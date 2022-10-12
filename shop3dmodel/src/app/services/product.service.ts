import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _http: HttpClient) { }

  url = environment.backend_url;

  GetProductPreview() {
    return this._http.get<any>(this.url+'api/product');
  }

  GetProduct(id: string) {
    return this._http.get<any>(this.url+'api/product/'+id);
  }
}
