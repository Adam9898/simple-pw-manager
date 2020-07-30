import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  get authentication() {
    return this.authService.isAuthenticated();
  }

  get navLink() {
    let link = '/auth';
    if (this.authService.isAuthenticated()) {
      link = '/main';
    }
    return link;
  }

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

}
