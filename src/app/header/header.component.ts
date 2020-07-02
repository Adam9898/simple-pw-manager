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
    return this.authService.authenticated;
  }

  get navLink() {
    let link = '/auth';
    if (this.authService.authenticated) {
      link = '/main';
    }
    return link;
  }

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.router.navigate([this.navLink]);
  }

}
