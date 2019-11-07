import { TestBed } from '@angular/core/testing';

import { ExitCompanyGuardService } from './exit-company-guard.service';

describe('ExitCompanyGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExitCompanyGuardService = TestBed.get(ExitCompanyGuardService);
    expect(service).toBeTruthy();
  });
});
