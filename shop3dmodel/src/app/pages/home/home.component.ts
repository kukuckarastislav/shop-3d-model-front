import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ProductPreview } from 'src/app/models/ProductPreview';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private productService: ProductService) {}

  products: ProductPreview[] = [];

  ngOnInit(): void {
    this.productService.GetProductPreview().subscribe((data) => {
      this.products = data;
    });
  }


  //images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  page = 4



}
