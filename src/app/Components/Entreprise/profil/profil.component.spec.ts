import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilEntreprise } from './profil.component';

describe('ProfilEntreprise', () => {
  let component: ProfilEntreprise;
  let fixture: ComponentFixture<ProfilEntreprise>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilEntreprise ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilEntreprise);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
