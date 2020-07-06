import { TestBed } from '@angular/core/testing';

import { PwGeneratorCryptoService } from './pw-generator-crypto.service';

describe('PwGeneratorCryptoService', () => {
  let service: PwGeneratorCryptoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PwGeneratorCryptoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
