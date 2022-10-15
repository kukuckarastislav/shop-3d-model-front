import { Component, OnInit } from '@angular/core';
import { AdvanceSearch } from 'src/app/models/AdvanceSearch';
import { ProductPreview } from 'src/app/models/ProductPreview';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }

  products: ProductPreview[] = [];

  search: AdvanceSearch = new AdvanceSearch();

  ngOnInit(): void {
  }

}
