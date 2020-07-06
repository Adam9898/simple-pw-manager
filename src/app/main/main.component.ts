import { Component, OnInit } from '@angular/core';
import {PasswordThumbnail} from './PasswordThumbnail';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  passwordThumbnails: PasswordThumbnail[];
  selectedPwField: number;

  constructor() { }

  ngOnInit(): void {
  }

  onDisplayProperPwField(event: Event) {
    const pwFieldId = (event.target as HTMLInputElement).value;
    this.selectedPwField = parseInt(pwFieldId, 10);
  }
}
