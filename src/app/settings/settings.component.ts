import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent implements OnInit {
  settingsButtonDown: boolean;

  constructor() {
    this.settingsButtonDown = false;
  }

  ngOnInit(): void {}

  settingsButtonClick() {
    this.settingsButtonDown = !this.settingsButtonDown;
  }
}
