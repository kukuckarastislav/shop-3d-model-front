import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private loginService: LoginService, private _http: HttpClient) { }

  url = environment.backend_url;

  GetProductPreview() {
    return this._http.get<any>(this.url+'api/product');
  }

  GetProduct(id: string) {
    const headers = this.loginService.getHeaders();
    return this._http.get<any>(this.url+'api/product/'+id, { headers: headers });
  }

  like(product_uuid: string, user_uuid: string) {
    const headers = this.loginService.getHeaders();
    return this._http.post<any>(this.url+'api/product/like', {"product_uuid":product_uuid,"user_uuid":user_uuid}, { headers: headers });
  }

  unlike(product_uuid: string, user_uuid: string) {
    const headers = this.loginService.getHeaders();
    return this._http.post<any>(this.url+'api/product/unlike', {"product_uuid":product_uuid,"user_uuid":user_uuid}, { headers: headers });
  }
    
}
