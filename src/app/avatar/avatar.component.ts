import { Component } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css'],
})
export class AvatarComponent {
  src: string;

  constructor() {
    this.src = '../../assets/Images/template.png';
  }
}
