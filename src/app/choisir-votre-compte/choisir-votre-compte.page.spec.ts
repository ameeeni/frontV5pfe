import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChoisirVotreComptePage } from './choisir-votre-compte.page';

describe('ChoisirVotreComptePage', () => {
  let component: ChoisirVotreComptePage;
  let fixture: ComponentFixture<ChoisirVotreComptePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ChoisirVotreComptePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
