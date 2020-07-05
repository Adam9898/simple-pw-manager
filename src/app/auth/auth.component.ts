import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  authComponentToDisplay = 'login';

  constructor() { }

  ngOnInit(): void {
  }

  onDisplayLogin() {
    this.authComponentToDisplay = 'login';
  }

  onDisplaySignUp() {
    this.authComponentToDisplay = 'signup';
  }
}
