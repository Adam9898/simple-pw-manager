import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {LoginDTO} from './LoginDTO';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginIsInvalid = true;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    // todo send form to server
  }
}
