import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/Services/authentication.service';

@Component({
  selector: 'app-session-candidat',
  templateUrl: './session-candidat.component.html',
  styleUrls: ['./session-candidat.component.css']
})
export class SessionCandidatComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
  }
  
  LogOut(){
    this.authenticationService.logOut();
    this.router.navigate(['login']);
  }
}
