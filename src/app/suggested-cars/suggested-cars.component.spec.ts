import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-suggested-cars',
  templateUrl: './suggested-cars.component.html',
  styleUrls: ['./suggested-cars.component.css'],
})
export class SuggestedCarsComponent implements OnInit {
  @Input() count: number = 3;
  constructor() {}

  ngOnInit(): void {}
}
