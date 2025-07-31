import { TestBed } from '@angular/core/testing';

import { CommonLibraryService } from './common-library.service';

describe('CommonLibraryService', () => {
  let service: CommonLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
