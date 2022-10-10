import { Component, Input, OnInit } from '@angular/core';
import { ProductPreview } from 'src/app/models/ProductPreview';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-card-s3m',
  templateUrl: './card-s3m.component.html',
  styleUrls: ['./card-s3m.component.css']
})
export class CardS3mComponent implements OnInit {

  constructor() { }

  @Input() product: ProductPreview = new ProductPreview();

  ngOnInit(): void {
  }

  getImage() {
    return environment.backend_url + this.product.imageUrl;
  }

}
