import { Directive } from '@angular/core';
import {AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, NG_VALIDATORS, ValidationErrors} from '@angular/forms';
import {Observable} from 'rxjs';
import {CustomValidationService} from './custom-validation.service';

@Directive({
  selector: '[appValidateUniqueEmail]',
  providers: [{ provide: NG_ASYNC_VALIDATORS, useExisting: ValidateUniqueEmailDirective, multi: true }]
})
export class ValidateUniqueEmailDirective implements AsyncValidator {

  constructor(private customValidator: CustomValidationService) { }

  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return this.customValidator.emailValidator(control);
  }

}
