import { TestBed } from '@angular/core/testing';

import { BasicTokenService } from './basic-token.service';

describe('BasicTokenService', () => {
  let service: BasicTokenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BasicTokenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
