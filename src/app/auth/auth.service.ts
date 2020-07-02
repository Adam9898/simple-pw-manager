import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private auth = false;

  get authenticated() {
    return this.auth;
  }

  constructor() { }
}
