import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-if-else-if',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './if-else-if.component.html',
  styleUrl: './if-else-if.component.scss'
})
export class IfElseIfComponent {

  userInfo = {
    isLoggedIn: true,
    isAdmin: true,
    name: 'Max'
  }
}
