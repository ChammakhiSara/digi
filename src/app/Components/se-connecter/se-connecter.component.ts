import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/Services/authentication.service';
​
@Component({
  selector: 'app-se-connecter',
  templateUrl: './se-connecter.component.html',
  styleUrls: ['./se-connecter.component.css']
})
export class SeConnecterComponent implements OnInit {
​
  loginForm: FormGroup;
  invalidLogin: boolean = false;
​
  constructor(private router: Router, private authenticationservice: AuthenticationService) { }
​
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl ('', [Validators.required, Validators.email]),
      password: new FormControl ('', [Validators.required])
    });
  }
 
  onSubmit(){
  let loginRequest = this.loginForm.value;
    (this.authenticationservice.authenticate(loginRequest).subscribe(
      data => {
        this.router.navigate(['session-candidat'])
        this.invalidLogin = false;
      },
      error => {
        this.invalidLogin = true;
​
      }
    )
    );
}
}