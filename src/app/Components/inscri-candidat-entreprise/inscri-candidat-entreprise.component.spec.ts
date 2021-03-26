import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriCandidatEntrepriseComponent } from './inscri-candidat-entreprise.component';

describe('InscriCandidatEntrepriseComponent', () => {
  let component: InscriCandidatEntrepriseComponent;
  let fixture: ComponentFixture<InscriCandidatEntrepriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscriCandidatEntrepriseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InscriCandidatEntrepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
