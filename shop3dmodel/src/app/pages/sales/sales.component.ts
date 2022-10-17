import { Component, OnInit } from '@angular/core';
import { Purchase } from 'src/app/models/Purchase';
import { LoginService } from 'src/app/services/login.service';
import { ProductService } from 'src/app/services/product.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {

  
  constructor(private loginService: LoginService, private productService: ProductService) { }

  purchases: Purchase[] = [];

  searchProductName: string = '';
  searchUserName: string = '';
  searchCategory: string = 'All';
  sortType: string = 'DATE_DESC';

  ngOnInit(): void {

    this.productService.GetMySales().subscribe((data) => {
      this.purchases = data;
    } );
  }

  getImgURL(purchase: Purchase) {
    return environment.backend_url + purchase.productPreviewDTO.imageUrl
  }

  redirectUserPage(purchase: Purchase) {
    window.location.href = '/user/products/' + purchase.buyer.uuid;
  }

  redirectProductPage(purchase: Purchase) {
    window.location.href = '/product/' + purchase.productPreviewDTO.uuid;
  }

  showPurchaseIf(purchase: Purchase) {
    if (this.searchProductName != '' && !purchase.productPreviewDTO.name.toLowerCase().includes(this.searchProductName.toLowerCase())) {
      return false;
    }
    if (this.searchUserName != '' && !purchase.buyer.name.toLowerCase().includes(this.searchUserName.toLowerCase())) {
      return false;
    }
    if (this.searchCategory != 'All' && !purchase.productPreviewDTO.category.toLowerCase().includes(this.searchCategory.toLowerCase())) {
      return false;
    }
    return true;
  }

  sortBySortType() {
    if (this.sortType == 'DATE_DESC') {
      this.purchases.sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      });
    } else if (this.sortType == 'DATE_ASC') {
      this.purchases.sort((a, b) => {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      });
    } else if (this.sortType == 'PRICE_DESC') {
      this.purchases.sort((a, b) => {
        return b.productPreviewDTO.price - a.productPreviewDTO.price;
      });
    } else if (this.sortType == 'PRICE_ASC') {
      this.purchases.sort((a, b) => {
        return a.productPreviewDTO.price - b.productPreviewDTO.price;
      });
    }
  }


}
