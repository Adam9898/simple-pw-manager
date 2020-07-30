import { Injectable } from '@angular/core';
import {SignUpDTO} from './signup/SignUpDTO';
import {SignUpResponse} from './signup/SignUpResponse';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {LoginDTO} from './login/LoginDTO';
import {LoginResponse} from './login/LoginResponse';
import scrypt from 'scrypt-js';
import buffer, {Buffer} from 'buffer/';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private logoutTimeout = null;

  constructor(private httpClient: HttpClient, private router: Router) {}

  isAuthenticated() {
    let returnVal = false;
    let token = '';
    if (this.getAuthToken()) {
      token += this.getAuthToken();
      returnVal = true;
      const timestampB64 = token.substr(token.indexOf('.') + 1, 91);
      const parsedJwtData = JSON.parse(atob(timestampB64));
      const timestamp = parseInt(parsedJwtData.exp, 10);
      const currentTimestamp = Math.floor(Date.now() / 1000);
      if (currentTimestamp > timestamp) {
        // token expired
        returnVal = false;
      }
    }
    return returnVal;
  }

  registerUser(signUpData: SignUpDTO) {
    this.hashPassword(signUpData.email, signUpData.password).then(hashedPassword => {
      signUpData.password = hashedPassword;
      this.httpClient.post<SignUpResponse>(environment.host + '/users', signUpData)
        .subscribe((response) => {
          this.setAuthToken(response.token);
          location.reload();
        });
    });
  }

  logout() {
    this.removeAuthToken();
    if (this.logoutTimeout) {
      clearTimeout(this.logoutTimeout);
    }
    this.logoutTimeout = null;
    this.router.navigate(['/auth']);
  }

  autoLogout(duration: number) {
    this.logoutTimeout = setTimeout(() => {
      this.logout();
    }, duration);
  }

  async login(loginData: LoginDTO) {
    let returnVal = false;
    loginData.password = await this.hashPassword(loginData.email, loginData.password);
    this.httpClient.post<LoginResponse>(environment.host + '/users/login', loginData)
      .subscribe(response => {
        if (response.success) {
          this.setAuthToken(response.token);
          this.autoLogout(this.getExpirationTimestamp() - Date.now());
          returnVal = true;
          this.router.navigate(['/main']);
        }
      });
    return returnVal;
  }

  getExpirationTimestamp() {
    const token = this.getAuthToken();
    const timestampB64 = token.substr(token.indexOf('.'), 129);
    const timestamp = parseInt(JSON.parse(atob(timestampB64)).exp, 10);
    return timestamp;
  }

  getAuthToken() {
    return localStorage.getItem('authToken');
  }

  setAuthToken(token: string) {
    localStorage.setItem('authToken', token);
  }

  removeAuthToken() {
    localStorage.removeItem('authToken');
  }

  /**
   * Hashing the user password on the client side, before sending it to the api. Salt should be provided by an argument.
   * @param salt
   * @param password
   * @private
   */
  private async hashPassword(salt: string, password: string) {
    const passwordEncoded = new Buffer(password.normalize('NFKC'));
    const saltEncoded = new Buffer(salt.normalize('NFKC'));
    const hashedPasswordArr = await scrypt.scrypt(passwordEncoded, saltEncoded, 8192, 8, 1, 64);
    console.log(new TextDecoder().decode(hashedPasswordArr));
    // hashing it even more with SHA-512 just for a little extra hardening...
    const hash = await crypto.subtle.digest('sha-512', hashedPasswordArr);
    console.log(new TextDecoder().decode(hash));
    return new TextDecoder('utf-8').decode(hash);
  }
}
