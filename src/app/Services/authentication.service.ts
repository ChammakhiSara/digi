import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient:HttpClient, private router : Router) { }
   private  baseUrl = 'http://localhost:8080/auth/';

  // call for register backend api with a RegisterRequest in parameter(username + motDePasse)
  register(registerRequest) {
    return this.httpClient.post<any>(this.baseUrl+'register/',registerRequest).pipe(
      map(
        Data => {
          if(Data.message === "User registered successfully!"){
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
  // call for authentication backend api with a loginRequest in parameter(username + motDePasse)
  authenticate(loginRequest) {
    return this.httpClient.post<any>(this.baseUrl+'login/',loginRequest).pipe(
     map(
       userData => {
        sessionStorage.setItem('email',loginRequest.email);
        let tokenStr= 'Bearer '+userData.token;
        sessionStorage.setItem('token', tokenStr);
        return userData;
       }
     )

    );
  }


isUserLoggedIn() {
  let user = sessionStorage.getItem('email')
  //return true if user not null
  return !(user === null)
}

logOut() {
  sessionStorage.removeItem('email');
}
}
