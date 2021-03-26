import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InscriCandidatEntrepriseComponent } from './Components/inscri-candidat-entreprise/inscri-candidat-entreprise.component';
import { SeConnecterComponent } from './Components/se-connecter/se-connecter.component';
import { PageIntrouvableComponent } from './Components/page-introuvable/page-introuvable.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationService } from './Services/authentication.service';
import { AuthGuardService } from './Services/auth-guard.service';
import { JwtAuthHttpInterceptorService} from './Services/jwt-auth-http-interceptor.service';
import { SessionCandidatComponent } from './Components/Candidat/session-candidat/session-candidat.component';
import { ProfilCandidat } from './Components/Candidat/profil/profil.component';
import { ProfilEntreprise } from './Components/Entreprise/profil/profil.component';
import { NavbarComponent } from './Components/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    SeConnecterComponent,
    InscriCandidatEntrepriseComponent,
    PageIntrouvableComponent,
    SessionCandidatComponent,
    ProfilCandidat,
    ProfilEntreprise,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [AuthenticationService,AuthGuardService,JwtAuthHttpInterceptorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
