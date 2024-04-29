import { ChangeDetectionStrategy, Component, Signal, ViewEncapsulation, WritableSignal, computed, effect, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../service/api.service';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { Observable } from 'rxjs';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-signal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignalComponent {

  apiService = inject(ApiService);
  plus = signal(0);
  secondMultiply = computed(() => this.plus() * 2);

  detailObj = signal(
    [{ id: 1, name: '', age: 20 }]
  );

  // samplePostData = toSignal(this.apiService.getSampleData());
  samplePostData = signal<Array<any>>([]);

  fname = new FormControl();
  firstNameSignal = toSignal(this.fname.valueChanges, { initialValue: '' });

  constructor() {
    // effect(() => {
    //   console.log(`POST DATA ${this.samplePostData()}`);
    //   console.log('firstNameSignal :>> ', this.firstNameSignal());
    // });

    const detail: Signal<any> = toSignal(this.apiService.getSampleData());
    console.log('detail() :>> ', detail());
    this.samplePostData.set(detail());
    console.log('this.samplePostData() :>> ', this.samplePostData());
  }

  increase() {
    this.plus.update((res) => res + 1);
  }

  decrease() {
    this.plus.update((res) => res - 1);
  }

  editData(index: number) {
    this.samplePostData.update((res: any) => {
      res[index].title = "Edited Title";
      res[index].body = "Edited Body";

      // res[index] = {
      //   "userId": 1,
      //   "id": 1,
      //   "title": "Edited Title",
      //   "body": "Edited Body"
      // }
      return res;
    })
  }

  updateObj() {
    this.detailObj.update((res) => {
      console.log('DETAIL ===:>> ', res);
      return res;
    })
  }
}
