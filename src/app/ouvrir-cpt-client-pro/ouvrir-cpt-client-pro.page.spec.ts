import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OuvrirCptClientProPage } from './ouvrir-cpt-client-pro.page';

describe('OuvrirCptClientProPage', () => {
  let component: OuvrirCptClientProPage;
  let fixture: ComponentFixture<OuvrirCptClientProPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OuvrirCptClientProPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
