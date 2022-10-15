import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ProductPreview } from 'src/app/models/ProductPreview';
import { AdvanceSearch } from 'src/app/models/AdvanceSearch';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-products',
  templateUrl: './user-products.component.html',
  styleUrls: ['./user-products.component.css']
})
export class UserProductsComponent implements OnInit {

  constructor(private productService: ProductService, private route: ActivatedRoute) {}

  products: ProductPreview[] = [];

  search: AdvanceSearch = new AdvanceSearch();
  user_id: string = '';

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
    this.productService.GetProductPreviewByCreatorAdvanceSearch(this.search, this.user_id).subscribe((data) => {
      console.log("data", data);
      this.products = data;
    }, (error) => {
      console.log("Error", error);
    });
  }

}



