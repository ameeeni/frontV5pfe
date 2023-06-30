import { TestBed } from '@angular/core/testing';

import { CptClientProService } from './cpt-client-pro.service';

describe('CptClientProService', () => {
  let service: CptClientProService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CptClientProService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
