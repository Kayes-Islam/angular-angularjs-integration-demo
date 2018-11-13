import { TestBed } from '@angular/core/testing';

import { MvcDataService } from './mvc-data.service';

describe('MvcDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MvcDataService = TestBed.get(MvcDataService);
    expect(service).toBeTruthy();
  });
});
