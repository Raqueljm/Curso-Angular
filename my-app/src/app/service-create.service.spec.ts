import { TestBed } from '@angular/core/testing';

import { ServiceCreateService } from './service-create.service';

interface Test{}

describe('ServiceCreateService', () => {
  let service: ServiceCreateService<Test>;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceCreateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
