import { TestBed } from '@angular/core/testing';

import { NgxObtuseWardenService } from './ngx-obtuse-warden.service';

describe('NgxObtuseWardenService', () => {
  let service: NgxObtuseWardenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxObtuseWardenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
