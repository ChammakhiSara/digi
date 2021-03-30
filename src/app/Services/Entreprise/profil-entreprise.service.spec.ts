import { TestBed } from '@angular/core/testing';

import { ProfilEntrepriseService } from './profil-entreprise.service';

describe('ProfilEntrepriseService', () => {
  let service: ProfilEntrepriseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfilEntrepriseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
