import { TestBed } from '@angular/core/testing';

import { LogBService } from './log-b.service';

describe('LogBService', () => {
  let service: LogBService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogBService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
