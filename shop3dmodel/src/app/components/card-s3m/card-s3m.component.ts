import { Component, Input, OnInit } from '@angular/core';
import { ProductPreview } from 'src/app/models/ProductPreview';
import { LoginService } from 'src/app/services/login.service';
import { ProductService } from 'src/app/services/product.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-card-s3m',
  templateUrl: './card-s3m.component.html',
  styleUrls: ['./card-s3m.component.css']
})
export class CardS3mComponent implements OnInit {

  constructor(private loginService: LoginService, private productService: ProductService) { }

  @Input() product: ProductPreview = new ProductPreview();

  ngOnInit(): void {
    console.log(this.product);
  }

  getImage() {
    return environment.backend_url + this.product.imageUrl;
  }

  showDetail() {
    window.location.href = '/product/' + this.product.uuid;
  }

  unsave() {
    let user_uuid = this.loginService.getCurrentUser().uuid;
    if (user_uuid) {
      this.productService.unsave(this.product.uuid, user_uuid).subscribe((data: any) => {
        if (data.response == "successfully") {
          this.product.saved = false;
        } else {
          alert("Error?")
        }
      }, (err: any) => {
        console.log(err)
        alert("Error: " + err.error);
      });
    }else {
      alert("You must be logged in to unsave a product");
    }
  }

  save() {
    let user_uuid = this.loginService.getCurrentUser().uuid;
    if (user_uuid) {
      this.productService.save(this.product.uuid, user_uuid).subscribe((data: any) => {
        if (data.response == "successfully") {
          this.product.saved = true;
        } else {
          alert("Error?")
        }
      }, (err: any) => {
        console.log(err)
        alert("Error: " + err.error);
      });
    } else {
      alert("You must be logged in to save a product");
    }
  }

}
