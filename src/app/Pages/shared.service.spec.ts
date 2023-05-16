import { TestBed } from '@angular/core/testing';

import { SHAREDService } from './shared.service';

describe('SHAREDService', () => {
  let service: SHAREDService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SHAREDService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
