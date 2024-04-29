import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { startViewTransition } from '@angular/core';

@Component({
  selector: 'app-defer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './defer.component.html',
  styleUrl: './defer.component.scss'
})
export class DeferComponent {
  isVisible !: boolean;
}
