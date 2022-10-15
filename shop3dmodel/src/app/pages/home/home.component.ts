import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ProductPreview } from 'src/app/models/ProductPreview';
import { AdvanceSearch } from 'src/app/models/AdvanceSearch';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private productService: ProductService, private route: ActivatedRoute) {}

  products: ProductPreview[] = [];

  search: AdvanceSearch = new AdvanceSearch();

  ngOnInit(): void {
    let productNameSearch = this.route.snapshot.paramMap.get('name')!;
    let category = this.route.snapshot.paramMap.get('category')!;
    if (productNameSearch) {
      this.search.productName = productNameSearch;
      this.searchProducts();
    } else if (category) {
      this.search.category = category;
      this.searchProducts(); 
    } else {
      this.productService.GetProductPreview().subscribe((data) => {
        this.products = data;
      }); 
    }
  }
  //images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  page = 4

  searchFun(event: any) {
    console.log(event)
    this.search = event;
    this.searchProducts();
  }

  searchProducts() { 
    this.productService.GetProductPreviewAdvanceSearch(this.search).subscribe((data) => {
      console.log("data", data);
      this.products = data;
    }, (error) => {
      console.log("Error", error);
    });
  }



}
