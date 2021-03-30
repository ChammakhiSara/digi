import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { AuthenticationService } from '../authentication.service';

@Injectable({
  providedIn: 'root'
})
export class ProfilEntrepriseService {

  constructor(private httpClient:HttpClient, private authenticationService: AuthenticationService, private router: Router) { }
  private  baseUrl = 'http://localhost:8080/entreprise/';
  private currentUser = sessionStorage.getItem('email');

   // Modification profil candidat
   getEntrepriseByEmail() {
    return this.httpClient.get(this.baseUrl+'email/'+this.currentUser);
  }

   // Modification profil entreprise
   modifDataEntreprise(entreprise :any) {
    return this.httpClient.put(this.baseUrl+'donnePersonnel/'+this.currentUser, entreprise);
  }
  
   // Modification dataconfid entreprise
   modifConfidDataEntreprise(entreprise :any) {
    return this.httpClient.put<any>(this.baseUrl+'donneConfid/'+this.currentUser, entreprise).pipe(
      map(
        Data => {
          if(Data.message === "Entreprise updated successfully!"){
            this.authenticationService.logOut();
            this.router.navigate(['login'])
            
          }
          else{
            alert("Email a été déja utilisé!");
          }
          
          return Data;
         }

      )
    );
  }

}
