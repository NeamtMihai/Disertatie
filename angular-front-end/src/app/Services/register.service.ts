import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RegisterDTO } from '../Model/RegisterDTO';
import { User } from '../Model/User';
import { BasicTokenService } from './basic-token.service';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private httpClient: HttpClient, private tokenService: BasicTokenService) { }

  private registerURL = 'http://localhost:8080/users/register';
  registerCredentialDTO: RegisterDTO;

  doRegister(user: User)  {
    this.registerCredentialDTO = {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password
    };
    return this.httpClient.post<User>(this.registerURL, this.registerCredentialDTO, {headers: this.tokenService.getBasicTokenAuthorizationHeader()});
  }
}
