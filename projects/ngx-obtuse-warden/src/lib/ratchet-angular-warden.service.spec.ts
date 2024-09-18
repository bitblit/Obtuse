import { TestBed } from '@angular/core/testing';

import { RatchetAngularWardenService } from './ratchet-angular-warden.service';

describe('RatchetAngularWardenService', () => {
  let service: RatchetAngularWardenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RatchetAngularWardenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
