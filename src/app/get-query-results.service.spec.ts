import { TestBed } from '@angular/core/testing';

import { GetQueryResultsService } from './get-query-results.service';

describe('GetQueryResultsService', () => {
  let service: GetQueryResultsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetQueryResultsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
