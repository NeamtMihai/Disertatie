import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { LoginDTO } from '../Model/LoginDTO';
import { User } from '../Model/User';
import { Observable } from 'rxjs';
import { BasicTokenService } from './basic-token.service';

const httpOptions = {
  headers: new HttpHeaders({'Authorization': 'Basic YWRtaW5AYWRtaW4uY29tOlBhc3N3b3JkMSE='}) //Admin
};


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient, private tokenService: BasicTokenService) { }

  private loggedInStatus = false;
  private loginURL = 'http://localhost:8080/users/login';
  private getUserURL = 'http://localhost:8080/users/me';
  loginCredentialDTO: LoginDTO;

  
  requestToken(username: string, password: string) {
    return btoa(username + ':' + password);
  }

  getCurrentUser() {
    return this.httpClient.get<User>(this.getUserURL, {headers: this.tokenService.getBasicTokenAuthorizationHeader()});
  }


  setLoggedIn(value: boolean) {
    this.loggedInStatus = value;
  }

  getLoggedIn() {
    return this.loggedInStatus;
  }

  doLogin(email: string, password: string): Observable<User> {
    this.loginCredentialDTO = {
      email: email,
      password: password
    };
    return this.httpClient.post<User>(this.loginURL, this.loginCredentialDTO, httpOptions);
  }
}

