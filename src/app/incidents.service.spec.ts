import { TestBed } from '@angular/core/testing';

import { IncidentService } from './incidents.service';

describe('ProductService', () => {
  let service: IncidentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IncidentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
