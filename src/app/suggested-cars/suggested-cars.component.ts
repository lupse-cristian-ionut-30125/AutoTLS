import { Component, Input, OnInit } from '@angular/core';
import { Category } from '../models/models';

@Component({
  selector: 'app-suggested-cars',
  templateUrl: './suggested-cars.component.html',
  styleUrls: ['./suggested-cars.component.css'],
})
export class SuggestedCarsComponent implements OnInit {
  @Input() category: Category = {
    id: 0,
    category: '',
    subcategory: '',
  };

  @Input() count: number = 3;
  constructor() {}

  ngOnInit(): void {}
}
