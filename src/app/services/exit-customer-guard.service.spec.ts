import { TestBed } from '@angular/core/testing';

import { ExitCustomerGuardService } from './exit-customer-guard.service';

describe('ExitCustomerGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExitCustomerGuardService = TestBed.get(ExitCustomerGuardService);
    expect(service).toBeTruthy();
  });
});
