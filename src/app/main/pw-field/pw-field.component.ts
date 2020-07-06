import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-pw-field',
  templateUrl: './pw-field.component.html',
  styleUrls: ['./pw-field.component.scss']
})
export class PwFieldComponent implements OnInit {

  @Input() pwField: number;

  constructor() { }

  ngOnInit(): void {
    // todo fetch required data
  }

  showPassword(event: MouseEvent) {
    const passwordField = event.target as HTMLInputElement;
    if (passwordField.type === 'password') {
      passwordField.type = 'text';
    } else {
      passwordField.type = 'password';
    }
  }
}
