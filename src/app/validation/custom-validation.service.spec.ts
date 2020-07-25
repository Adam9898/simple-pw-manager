import { TestBed } from '@angular/core/testing';

import { CustomValidationService } from './custom-validation.service';
import {HttpClientModule} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AbstractControl} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';

describe('CustomValidationService', () => {
  let service: CustomValidationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule, RouterTestingModule ]
    });
    service = TestBed.inject(CustomValidationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an observable when checking email availability', () => {
    const result = service.validateEmail('test@valid.com');
    expect(result).toBeInstanceOf(Observable);
  });

  it('should return true when checking email availability', async () => {
    const control = new class extends AbstractControl {
      value = '';
      patchValue(value: any, options?): void {
      }

      reset(value?: any, options?): void {
      }

      setValue(value: any, options?): void {
      }
    }(null, null);
    control.value = 'test@valid.com';
    const result = await service.emailValidator(control);
    expect(result).toBeTrue();
  });

});
