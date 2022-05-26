import { TestBed } from '@angular/core/testing';

import { ServicemitterService } from './servicemitter.service';

describe('ServicemitterService', () => {
  let service: ServicemitterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicemitterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
