import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { LoginService } from './login.service';
import { NewComment } from '../models/NewComment';
import { NewCommentReply } from '../models/NewCommentReply';
import { NewProductReview } from '../models/NewProductReview';
import { AdvanceSearch } from '../models/AdvanceSearch';
import { CreateNewProduct } from '../models/CreateNewProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private loginService: LoginService, private _http: HttpClient) { }

  url = environment.backend_url;

  GetProductPreview() {
    const headers = this.loginService.getHeaders();
    return this._http.get<any>(this.url+'api/product', { headers: headers });
  }

  GetProductPreviewByCreator(creator_id: string) {
    const headers = this.loginService.getHeaders();
    return this._http.get<any>(this.url+'api/product/creator/'+creator_id, { headers: headers });
  }

  GetProductPreviewAdvanceSearch(search: AdvanceSearch) {
    const headers = this.loginService.getHeaders();
    return this._http.post<any>(this.url+'api/product/advance-search', search, { headers: headers });
  }

  GetProductPreviewByCreatorAdvanceSearch(search: AdvanceSearch, creator_id: string, type_of_list: string) {
    const headers = this.loginService.getHeaders();
    return this._http.post<any>(this.url+'api/product/advance-search/creator/' + type_of_list + '/' + creator_id, search, { headers: headers });
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

  save(product_uuid: string, user_uuid: string) {
    const headers = this.loginService.getHeaders();
    return this._http.post<any>(this.url+'api/product/save', {"product_uuid":product_uuid,"user_uuid":user_uuid}, { headers: headers });
  }

  unsave(product_uuid: string, user_uuid: string) {
    const headers = this.loginService.getHeaders();
    return this._http.post<any>(this.url+'api/product/unsave', {"product_uuid":product_uuid,"user_uuid":user_uuid}, { headers: headers });
  }

  addComment(comment: NewComment) {
    const headers = this.loginService.getHeaders();
    return this._http.post<any>(this.url+'api/product/comment/add', comment, { headers: headers });
  }

  addReply(commentReply: NewCommentReply) {
    const headers = this.loginService.getHeaders();
    return this._http.post<any>(this.url+'api/product/comment/reply/add', commentReply, { headers: headers });
  }

  addReview(review: NewProductReview) {
    const headers = this.loginService.getHeaders();
    return this._http.post<any>(this.url+'api/product/review/add', review, { headers: headers });
  }

  BuyProduct(product_uuid: string, user_uuid: string) {
    const headers = this.loginService.getHeaders();
    return this._http.post<any>(this.url+'api/product/buy', {"product_uuid":product_uuid,"user_uuid":user_uuid}, { headers: headers });
  }

  CreateProduct(product: CreateNewProduct) {
    const headers = this.loginService.getHeaders();
    return this._http.post<any>(this.url+'api/product/create', product, { headers: headers });
  }
    
}
