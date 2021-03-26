import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfilCandidat } from './Components/Candidat/profil/profil.component';
import { ProfilEntreprise } from './Components/Entreprise/profil/profil.component';
import { SessionCandidatComponent } from './Components/Candidat/session-candidat/session-candidat.component';
import { AuthGuardService } from './Services/auth-guard.service';
import { InscriCandidatEntrepriseComponent } from './Components/inscri-candidat-entreprise/inscri-candidat-entreprise.component';
import { PageIntrouvableComponent } from './Components/page-introuvable/page-introuvable.component';
import { SeConnecterComponent } from './Components/se-connecter/se-connecter.component';
import { NavbarComponent } from './Components/navbar/navbar.component';


const routes: Routes = [
  {
    path:'',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'register',
    component: InscriCandidatEntrepriseComponent
  },
  {
    path: 'login',
    component: SeConnecterComponent
  },
  {
    path: '404-error',
    component: PageIntrouvableComponent
  },
  {
    path: 'session-candidat',
    component: SessionCandidatComponent,canActivate:[AuthGuardService]
  },
  {
    path: 'candidat/profil',
    component: ProfilCandidat
  },
  {
    path: 'entreprise/profil',
    component: ProfilEntreprise
  },
  {
    path: 'navbar',
    component: NavbarComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
