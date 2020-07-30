import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {LoginDTO} from './LoginDTO';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginIsValid = true;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    const loginData: LoginDTO = {
      email: form.value.email,
      password: form.value.password
    };
    this.authService.login(loginData).then(wasSuccessful => this.loginIsValid = wasSuccessful);
  }
}
