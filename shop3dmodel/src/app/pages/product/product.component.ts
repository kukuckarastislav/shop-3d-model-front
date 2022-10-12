import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EntityImage } from 'src/app/models/EntityImage';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private route: ActivatedRoute, private productService: ProductService) { }
  product_id: string = '';
  product: Product = new Product();
  commentsVisible = true;
  

  ngOnInit(): void {
    this.product_id = this.route.snapshot.paramMap.get('id')!;
    this.productService.GetProduct(this.product_id).subscribe((data) => {
      this.product = data;
      console.log(this.product);
      this.product.tags = ["likes" ,"like" ,"follow" ,"likeforlikes" ,"love" ,"instagood" ,"instagram" ,"followforfollowback" ,"followme" ,"photooftheday" ,"photography" ,"bhfyp" ,"instalike" ,"l" ,"instadaily" ,"likeforfollow" ,"picoftheday" ,"fashion" ,"beautiful" ,"me" ,"followers" ,"smile" ,"likeforlike" ,"myself" ,"followback" ,"f" ,"comment" ,"followforfollow" ,"likesforlikes" ,"art"]
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

}
