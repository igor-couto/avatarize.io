import { Component } from '@angular/core';

@Component({
  selector: 'app-settings-button',
  templateUrl: './settings-button.component.html',
  styleUrls: ['./settings-button.component.css'],
})
export class SettingsButtonComponent {
  isPressed: boolean;
  src: string;

  constructor() {
    this.isPressed = false;
    this.src = '../../assets/Images/settings-button-up.png';
  }

  press() {
    this.isPressed = true;
    this.src = '../../assets/Images/settings-button-down.png';
  }

  release() {
    this.isPressed = false;
    this.src = '../../assets/Images/settings-button-up.png';
  }
}
