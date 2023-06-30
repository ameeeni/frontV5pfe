import { TestBed } from '@angular/core/testing';

import { TypeCompteService } from './type-compte.service';

describe('TypeCompteService', () => {
  let service: TypeCompteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypeCompteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
