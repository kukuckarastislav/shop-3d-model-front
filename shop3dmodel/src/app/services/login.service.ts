import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LoginRequest } from '../models/LoginRequest';
import { LoginResponse } from '../models/LoginResponse';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _http: HttpClient) { }

  url = environment.backend_url;

  login(loginR: LoginRequest) {
    return this._http.post<any>(this.url+'auth/login', {"username":loginR.email,"password":loginR.password});
  }

  logout() {
    var user = new LoginResponse();
    localStorage.setItem('currentUser', JSON.stringify(user));
    window.location.href = '/';
  }

  getCurrentUser(): LoginResponse {
    let currentUser = localStorage.getItem('currentUser');
    if (currentUser != null) {
      return JSON.parse(localStorage.getItem('currentUser')!);
    } else {
      return new LoginResponse();
    }
  }

  isUserLoggedIn() {
    let user=this.getCurrentUser();
    if (user== null || user.accessToken==undefined) {
      return false;
    } else {
      return this.getCurrentUser().role !== '';
    }
  }

  getHeaders() {
    if (this.isUserLoggedIn()) {
      const token = this.getCurrentUser().accessToken;
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ` + token,
      });
      return headers;
    } else {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
      });
      return headers;
    }
  }

  loginSetUser(loginResponse: LoginResponse) {
    localStorage.setItem('currentUser', JSON.stringify(loginResponse));
  }
}
