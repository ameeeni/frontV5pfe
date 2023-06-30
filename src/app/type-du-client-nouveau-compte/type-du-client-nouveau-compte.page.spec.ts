import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TypeDuClientNouveauComptePage } from './type-du-client-nouveau-compte.page';

describe('TypeDuClientNouveauComptePage', () => {
  let component: TypeDuClientNouveauComptePage;
  let fixture: ComponentFixture<TypeDuClientNouveauComptePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TypeDuClientNouveauComptePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
