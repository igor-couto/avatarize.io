import { Component, OnInit } from '@angular/core';
import { AvatarService } from '../services/avatar.service';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css'],
})
export class UserInputComponent implements OnInit {
  input: string;

  constructor(private avatarService: AvatarService) {
    this.input = '';
  }

  ngOnInit(): void {}

  generateAvatar() {
    if (this.isEmptyInput()) {
      //imageElement.src = "./template.png";
      return;
    }

    this.avatarService.getAvatar(this.input).subscribe(
      (response) => {
        //imageElement.src = "data:image/png;base64, " + text;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  private isEmptyInput() {
    return this.input === null || this.input === undefined || this.input === '';
  }
}
