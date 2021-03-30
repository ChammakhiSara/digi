import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfilService {

  constructor(private httpClient:HttpClient) { }
  private  baseUrl = 'http://localhost:8080/candidat/';
  private currentUser = sessionStorage.getItem('email');

   // Modification profil candidat
   getCandidatByEmail() {
    return this.httpClient.get(this.baseUrl+'email/'+this.currentUser);
  }

   // Modification profil candidat
   modifDataCandidat(candidat :any) {
    return this.httpClient.put(this.baseUrl+'donnePersonnel/'+this.currentUser, candidat);
  }
  
   // Modification profil candidat
   modifConfidDataCandidat(candidat :any) {
    return this.httpClient.put(this.baseUrl+'donneeConfid/'+this.currentUser, candidat);
  }


}
