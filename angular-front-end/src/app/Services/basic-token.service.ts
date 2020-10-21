import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BasicTokenService {

  constructor() {}

  getBasicTokenAuthorizationHeader(): HttpHeaders {
    return new HttpHeaders()
      .set('Authorization', 'Basic ' + localStorage.getItem('access_token'))
      .set('Content-Type', 'application/json');
  }
}