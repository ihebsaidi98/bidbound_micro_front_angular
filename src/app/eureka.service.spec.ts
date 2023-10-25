import { TestBed } from '@angular/core/testing';

import { EurekaService } from './eureka.service';

describe('EurekaService', () => {
  let service: EurekaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EurekaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
