import { Injectable } from '@angular/core';
import {AbstractControl, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {CheckEmailResponse} from './CheckEmailResponse';
import {environment} from '../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class CustomValidationService {

  constructor(private httpClient: HttpClient) {  }

  MatchPassword(password: string, confirmPassword: string) {
    return (formGroup: FormGroup) => {
      const passwordControl = formGroup.controls[password];
      const confirmPasswordControl = formGroup.controls[confirmPassword];

      if (!passwordControl || !confirmPasswordControl) {
        return null;
      }

      if (confirmPasswordControl.errors && !confirmPasswordControl.errors.passwordMismatch) {
        return null;
      }

      if (passwordControl.value !== confirmPasswordControl.value) {
        confirmPasswordControl.setErrors({ passwordMismatch: true });
      } else {
        confirmPasswordControl.setErrors(null);
      }
    };
  }

  emailValidator(userControl: AbstractControl) {
    return new Promise((resolve, reject) => {
      this.validateEmail(userControl.value)
      .subscribe((result: CheckEmailResponse) => {
        if (result.valid) {
          userControl.setErrors(null);
          resolve(null);
        } else {
          userControl.setErrors({ emailNotAvailable: true });
        }
      }, error => {
        reject(error);
      });
    });
  }

  validateEmail(email: string) {
    return this.httpClient.post(environment.host + '/users/check-email', { email });
  }

}
