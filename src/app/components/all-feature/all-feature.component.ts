import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AppRoute } from '../../model/route';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { YouTubePlayer } from '@angular/youtube-player';

interface FeatureList {
  label: string;
  link: string;
}

@Component({
  selector: 'app-all-feature',
  animations: [
    trigger('openClose', [
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.8,
        backgroundColor: 'blue'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
    trigger('slideInOut', [
      state('in', style({
        transform: 'translate3d(0,0,0)'
      })),
      state('out', style({
        transform: 'translate3d(100%, 0, 0)'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
  ],
  standalone: true,
  imports: [CommonModule, YouTubePlayer],
  templateUrl: './all-feature.component.html',
  styleUrl: './all-feature.component.scss',
  host: { ngSkipHydration: 'true' }
  // encapsulation: ViewEncapsulation.ShadowDom
})
export class AllFeatureComponent {

  menuState: string = 'out';
  private router = inject(Router);
  isOpen = true;

  featureList: FeatureList[] = [
    {
      label: '@IF',
      link: AppRoute.IF
    },
    {
      label: '@IF - ELSE',
      link: AppRoute.IFELSE
    },
    {
      label: '@IF - ELSE IF',
      link: AppRoute.ELSEIF
    },
    {
      label: '@FOR',
      link: AppRoute.FOR
    },
    {
      label: '@DEFER',
      link: AppRoute.DEFER
    },
    {
      label: 'SIGNAL',
      link: AppRoute.SIGNAL
    },
    {
      label: 'SSR',
      link: AppRoute.SSR
    },
    {
      label: 'DEMO',
      link: AppRoute.DEMO
    },
  ]

  timer!: string;
  worker!: Worker | null;

  ngOnInit() {
    if (typeof Worker !== 'undefined') {
      this.worker = new Worker(new URL('./../../worker/timer.worker.ts', import.meta.url))
      this.worker.onmessage = ({ data }) => {
        this.timer = data;
      };
      this.worker.postMessage(new Date());
    }
  }

  startTime() {
    if (typeof Worker !== 'undefined') {
      if (!this.worker) this.worker = new Worker(new URL('./../../worker/timer.worker.ts', import.meta.url));
      this.worker.onmessage = ({ data }) => {
        this.timer = data;
        console.log('WORKER MESSAGE RECEIVE :>> ', data);
      };
      this.worker.postMessage(new Date());
    }
  }

  stopTime() {
    this.worker?.terminate();
    this.worker = null;
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }

  navigate(link: string) {
    this.router.navigate([`${link}`]);
  }
}
