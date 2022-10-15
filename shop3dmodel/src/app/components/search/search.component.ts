import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AdvanceSearch } from 'src/app/models/AdvanceSearch';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  @Input() search: AdvanceSearch = new AdvanceSearch();
  @Output() searchChange = new EventEmitter<AdvanceSearch>();
  tags: string = '';

  ngOnInit(): void {
  }

  searchProducts() { 
    this.processTags();
    console.log(this.search);
    this.searchChange.emit(this.search);
  }

  processTags() {
    this.search.tags = [];
    if (this.tags != '') {
      this.search.tags = this.tags.split(',');
      for(let i = 0; i < this.search.tags.length; i++) {
        this.search.tags[i] = this.search.tags[i].trim();
      }
    }
  } 

}
