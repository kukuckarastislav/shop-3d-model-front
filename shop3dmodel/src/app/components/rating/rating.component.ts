import { Component, OnInit } from '@angular/core';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css'],
  providers: [NgbRatingConfig],
})
export class RatingComponent implements OnInit {

  constructor(config: NgbRatingConfig) {
    config.max = 5;
  }

  ngOnInit(): void {
  }

  currentRate = 5

}
