import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EntityImage } from 'src/app/models/EntityImage';
import { LoginResponse } from 'src/app/models/LoginResponse';
import { NewComment } from 'src/app/models/NewComment';
import { NewCommentReply } from 'src/app/models/NewCommentReply';
import { NewProductReview } from 'src/app/models/NewProductReview';
import { Product } from 'src/app/models/Product';
import { ProductComment } from 'src/app/models/ProductComment';
import { ProductUserInteraction } from 'src/app/models/ProductUserInteraction';
import { LoginService } from 'src/app/services/login.service';
import { ProductService } from 'src/app/services/product.service';
import { environment } from 'src/environments/environment';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private modalService: NgbModal, private loginService: LoginService, private route: ActivatedRoute, private productService: ProductService) { }
  product_id: string = '';
  product: Product = new Product();
  commentsVisible = true;
  currentUser: LoginResponse = new LoginResponse();
  newComment: string = '';

  newReviewComment: string = '';
  newGrade: number = 5;
  

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

  unsave() {
    let user_uuid = this.loginService.getCurrentUser().uuid;
    if (user_uuid) {
      this.productService.unsave(this.product.uuid, user_uuid).subscribe((data: any) => {
        if (data.response == "successfully") {
          this.product.userInteraction.saved = false;
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
          this.product.userInteraction.saved = true;
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

  userLoggedIn() { 
    return this.loginService.getCurrentUser().uuid;
  }

  userIsOwner() { 
    return this.userLoggedIn() == this.product.creator.uuid;
  }

  showBuyOption() {
    if (this.product.creator.uuid == this.loginService.getCurrentUser().uuid) 
      return false;
    
    return !this.product.userInteraction.purchased;
  }

  addComment() {
    let comment = new NewComment(this.loginService.getCurrentUser().uuid, this.product.uuid, this.newComment)
    this.productService.addComment(comment).subscribe((data: any) => {
      if (data.response == "successfully") {
        location.reload();
      } else {
        alert("Error?")
      }
    }, (err: any) => {
      console.log(err)
      alert("Error: " + err.error);
    });
  }

  cancelComment() {
    this.newComment = "";
  }

  addReply(comment: ProductComment) {
    let commentReply = new NewCommentReply(this.loginService.getCurrentUser().uuid, this.product.uuid, comment.uuid, comment.creatorReplyInput)
    this.productService.addReply(commentReply).subscribe((data: any) => {
      if (data.response == "successfully") {
        location.reload();
      } else {
        alert("Error?")
      }
    }, (err: any) => {
      console.log(err)
      alert("Error: " + err.error);
    });
  }

  cancelReply(comment: ProductComment) {
    comment.creatorReplyInput = '';
  }

  showReplyForm(comment: ProductComment) {
    return this.userLoggedIn() &&
      this.loginService.getCurrentUser().uuid == this.product.creator.uuid &&
      !comment.creatorReply;
  }

  showReviewForm() {
    return this.userLoggedIn() &&
      this.loginService.getCurrentUser().uuid != this.product.creator.uuid &&
      !this.product.userInteraction.reviewed &&
      !this.product.userInteraction.purchased;
  }

  addReview() {
    let review = new NewProductReview(this.newGrade, this.newReviewComment, this.loginService.getCurrentUser().uuid, this.product.uuid)
    this.productService.addReview(review).subscribe((data: any) => {
      if (data.response == "successfully") {
        location.reload();
      } else {
        alert("Error?")
      }
    }, (err: any) => {
      console.log(err)
      alert("Error: " + err.error);
    });
  }

  cancelReview() { 
    this.newReviewComment = "";
    this.newGrade = 5;
  }

  redirectToUserPage() {
    window.location.href = '/user/products/' + this.product.creator.uuid
  }

  buyProduct(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    }, (reason) => {
    });
  }

  buy() {
    this.productService.BuyProduct(this.product.uuid, this.currentUser.uuid).subscribe((data: any) => {
      if (data.response == "successfully") {
        location.reload();
      } else {
        alert("Error?")
      }
    } , (err: any) => {
      console.log(err)
      alert("Error: " + err.error);
    } );
  }

  download() {
    this.productService.DownloadProduct(this.product.uuid).subscribe((data: any) => {
      saveAs(data, this.product.name);
      /*
      const blob = new Blob([data], {
        type: 'application/octet-stream'
      });
      saveAs(blob, this.product.name);
      const url = window.URL.createObjectURL(blob);
      window.open(url);
      */
    }, (err: any) => {
      console.log(err)
      alert("Error: " + err.error);
    } );
  }

}
