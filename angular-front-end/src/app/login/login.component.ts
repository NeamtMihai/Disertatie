import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LoginService } from '../Services/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  invalidCredentials = false;
  loading = false;
  testare = false;

  constructor(private loginSevice: LoginService, private  router: Router) {
 /*   if(localStorage.getItem('access_token')) {
      this.router.navigate(['home']);
    } */
   }

  ngOnInit() {}

  requestToken(username: string, password: string) {
    let token = this.loginSevice.requestToken(username,password);
    this.invalidCredentials = false;
    localStorage.setItem('access_token', token);
    this.redirectUser();
    this.loading = false;
  }

  doLogin(username: string, password: string) {
    this.loginSevice.doLogin(username, password).subscribe(data => {
        if (data) {

          this.requestToken(username,password);
          this.loginSevice.setLoggedIn(true);
          this.testare = true;

          console.log('Login successfully');
        } else {
            this.loading = false;
            this.invalidCredentials = true;
            window.alert('Bad Credentials!');
        }
      },
        error => {
        if (error.status === 500) {
            console.log(error);
            this.loading = false;
            this.invalidCredentials = true;
          }
        });

  }

  redirectUser(): void {
    this.router.navigate(['articles']);
  }
}
