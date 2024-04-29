import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Data {
  id: number,
  name: string,
  isEdit: boolean
}

@Component({
  selector: 'app-for',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './for.component.html',
  styleUrl: './for.component.scss'
})
export class ForComponent {

  userList = signal([
    {
      id: 101,
      name: 'Jaydip',
      isEdit: false
    },
    {
      id: 201,
      name: 'Arvind',
      isEdit: false
    },
    {
      id: 301,
      name: 'Raju',
      isEdit: false
    },
    {
      id: 401,
      name: 'Tejas',
      isEdit: false
    },
  ]);

  constructor() {
  }

  onEdit(index: number, isEdit: boolean, updateData: any) {
    console.log('EDIT ===:>> ', index, isEdit, updateData, this.userList());
    this.userList.update((res) => {
      res[index].isEdit = true;
      return res;
    });

    if (isEdit) {
      this.userList.update((res): any => {
        res[index].isEdit = false;
        res[index] = updateData;
        return res;
      });
    }
  }
}
