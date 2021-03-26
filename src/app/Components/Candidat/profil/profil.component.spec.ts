import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilCandidat } from './profil.component';

describe('ProfilCandidat', () => {
  let component: ProfilCandidat;
  let fixture: ComponentFixture<ProfilCandidat>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilCandidat ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilCandidat);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
