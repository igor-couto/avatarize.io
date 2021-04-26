import { Component } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent {
  settingsButtonDown: boolean;

  src: string;

  constructor() {
    this.settingsButtonDown = false;
    this.src = '../../assets/Images/settings-button-up.png';
  }

  press() {
    this.settingsButtonDown = true;
    this.src = '../../assets/Images/settings-button-down.png';
  }

  release() {
    this.settingsButtonDown = false;
    this.src = '../../assets/Images/settings-button-up.png';
  }
}
