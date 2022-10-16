import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ProductPreview } from 'src/app/models/ProductPreview';
import { AdvanceSearch } from 'src/app/models/AdvanceSearch';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-user-products',
  templateUrl: './user-products.component.html',
  styleUrls: ['./user-products.component.css']
})
export class UserProductsComponent implements OnInit {

  constructor(private loginService: LoginService, private productService: ProductService, private route: ActivatedRoute) {}

  products: ProductPreview[] = [];

  search: AdvanceSearch = new AdvanceSearch();
  user_id: string = '';
  listName: string = 'created';

  ngOnInit(): void {
    this.user_id = this.route.snapshot.paramMap.get('id')!;
    this.productService.GetProductPreviewByCreator(this.user_id).subscribe((data) => {
      this.products = data;
    }); 
  }

  searchFun(event: any) {
    this.search = event;
    this.searchProducts();
  }

  searchProducts() { 
    this.productService.GetProductPreviewByCreatorAdvanceSearch(this.search, this.user_id, this.listName).subscribe((data) => {
      console.log("data", data);
      this.products = data;
    }, (error) => {
      console.log("Error", error);
    });
  }

  showProducts() {
    this.listName = 'created';
    this.searchProducts();
  }

  showLiked() {
    this.listName = 'liked'
    this.searchProducts();
  }

  showSaved() {
    this.listName = 'saved'
    this.searchProducts();
  }

  showPurchased() {
    this.listName = 'purchased'
    this.searchProducts();
  }

  userIsOwner() {
    return this.loginService.getCurrentUser().uuid == this.user_id;
  }



}



