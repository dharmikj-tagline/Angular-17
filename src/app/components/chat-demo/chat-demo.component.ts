import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chat-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chat-demo.component.html',
  styleUrl: './chat-demo.component.scss'
})
export class ChatDemoComponent {
  userList: Array<any> = [
    {
      name: 'NOTHING',
      email: 'nothing123@gmail.com',
      img: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
    },
    {
      name: 'NOTHING',
      email: 'nothing123@gmail.com',
      img: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
    },
    {
      name: 'NOTHING',
      email: 'nothing123@gmail.com',
      img: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
    },
    {
      name: 'NOTHING',
      email: 'nothing123@gmail.com',
      img: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
    }
  ];

}
