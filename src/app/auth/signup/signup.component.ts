import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  isSubmitting = false;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {
    this.isSubmitting = true;
    this.authService.registerUser(f.value);
  }
}
