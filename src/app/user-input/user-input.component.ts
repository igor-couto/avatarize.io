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
        console.log(response);
      },
      (e) => {
        console.log(e);
      }
    );

    // fetch('https://localhost:5001/Avatar?input=' + this.input).then(
    //   (response) =>
    //     response.text().then((text) => {
    //       console.log(text);
    //       //imageElement.src = "data:image/png;base64, " + text;
    //     })
    // );
  }

  private isEmptyInput() {
    return this.input === null || this.input === undefined || this.input === '';
  }
}
