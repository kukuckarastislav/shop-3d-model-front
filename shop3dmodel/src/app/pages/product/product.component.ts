import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EntityImage } from 'src/app/models/EntityImage';
import { LoginResponse } from 'src/app/models/LoginResponse';
import { Product } from 'src/app/models/Product';
import { LoginService } from 'src/app/services/login.service';
import { ProductService } from 'src/app/services/product.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private loginService: LoginService, private route: ActivatedRoute, private productService: ProductService) { }
  product_id: string = '';
  product: Product = new Product();
  commentsVisible = true;
  currentUser: LoginResponse = new LoginResponse();
  

  ngOnInit(): void {
    this.currentUser = this.loginService.getCurrentUser();
    this.product_id = this.route.snapshot.paramMap.get('id')!;
    this.productService.GetProduct(this.product_id).subscribe((data) => {
      this.product = data;
      console.log(this.product);
      //this.product.tags = ["likes" ,"like" ,"follow" ,"likeforlikes" ,"love" ,"instagood" ,"instagram" ,"followforfollowback" ,"followme" ,"photooftheday" ,"photography" ,"bhfyp" ,"instalike" ,"l" ,"instadaily" ,"likeforfollow" ,"picoftheday" ,"fashion" ,"beautiful" ,"me" ,"followers" ,"smile" ,"likeforlike" ,"myself" ,"followback" ,"f" ,"comment" ,"followforfollow" ,"likesforlikes" ,"art"]
    }, (error) => {
      console.log(error);
    });
  }

  getImageURL(img: EntityImage) {
    return environment.backend_url + img.url;
  }

  boolToYesNo(bool: boolean) {
    if (bool) {
      return 'Yes';
    }
    return 'No';
  }

  minutesToTime(minutes: number) {
    if (minutes <= 0) return "";
    if (minutes < 60) return minutes + " minutes";
    if (minutes < 60 * 4) return Math.floor(minutes / 60) + " hours" + (minutes % 60 > 0 ? " " + minutes % 60 + " minutes" : "");
    if (minutes <= 60 * 24) return Math.floor(minutes / 60) + " hours";
    if (minutes > 60 * 24) return Math.floor(minutes / 60 / 24) + " days";
    return "";
  }

  showReviews() {
    this.commentsVisible = false
  }

  showComments() {
    this.commentsVisible = true
  }

  unlike() {
    let user_uuid = this.loginService.getCurrentUser().uuid;
    if (user_uuid) {
      this.productService.unlike(this.product.uuid, user_uuid).subscribe((data: any) => {
        if (data.response == "successfully") {
          this.product.numberOfLikes -= 1;
          this.product.userInteraction.liked = false;
        } else {
          alert("Error?")
        }
      }, (err: any) => {
        console.log(err)
        alert("Error: " + err.error);
      });
    }else {
      alert("You must be logged in to unlike a product");
    }
  }

  like() {
    let user_uuid = this.loginService.getCurrentUser().uuid;
    if (user_uuid) {
      this.productService.like(this.product.uuid, user_uuid).subscribe((data: any) => {
        if (data.response == "successfully") {
          this.product.numberOfLikes += 1;
          this.product.userInteraction.liked = true;
        } else {
          alert("Error?")
        }
      }, (err: any) => {
        console.log(err)
        alert("Error: " + err.error);
      });
    } else {
      alert("You must be logged in to like a product");
    }
  }

}
