import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OuvrirCptClientParPage } from './ouvrir-cpt-client-par.page';

describe('OuvrirCptClientParPage', () => {
  let component: OuvrirCptClientParPage;
  let fixture: ComponentFixture<OuvrirCptClientParPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OuvrirCptClientParPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
