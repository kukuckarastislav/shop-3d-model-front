import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private loginService: LoginService, private _http: HttpClient) { }

  url = environment.backend_url;

  GetUserPreview(user_id: string) {
    const headers = this.loginService.getHeaders();
    return this._http.get<any>(this.url+'api/user/id/'+user_id, { headers: headers });
  }
}
