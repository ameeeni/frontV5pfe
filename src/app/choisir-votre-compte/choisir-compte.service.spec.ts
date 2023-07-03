import { TestBed } from '@angular/core/testing';

import { ChoisirCompteService } from './choisir-compte.service';

describe('ChoisirCompteService', () => {
  let service: ChoisirCompteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChoisirCompteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
