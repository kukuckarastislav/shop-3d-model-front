import { Component, Input, OnInit } from '@angular/core';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css'],
  providers: [NgbRatingConfig],
})
export class RatingComponent implements OnInit {

  @Input() currentRate: number = 0;
  @Input() readonly: boolean = true;

  constructor(config: NgbRatingConfig) {
    config.max = 5;
  }

  ngOnInit(): void {
  }

}
