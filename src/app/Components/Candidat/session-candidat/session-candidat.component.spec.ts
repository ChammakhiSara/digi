import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionCandidatComponent } from './session-candidat.component';

describe('SessionCandidatComponent', () => {
  let component: SessionCandidatComponent;
  let fixture: ComponentFixture<SessionCandidatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SessionCandidatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionCandidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
