import { TestBed } from '@angular/core/testing';

import { ExitAdminGuardService } from './exit-admin-guard.service';

describe('ExitAdminGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExitAdminGuardService = TestBed.get(ExitAdminGuardService);
    expect(service).toBeTruthy();
  });
});
