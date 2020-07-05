import { Injectable } from '@angular/core';
import {AbstractControl, FormGroup} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CustomValidationService {

  constructor() { }

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
    return new Promise(resolve => {
      setTimeout(() => {
        if (this.validateEmail(userControl.value)) {
          resolve({ emailNotAvailable: true });
        } else {
          resolve(null);
        }
      }, 1000);
      console.log('timeout ended');
    });
  }

  validateEmail(userName: string): boolean {
    // todo reach out to server
    return true;
  }

}
