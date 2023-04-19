import { Component, OnInit } from '@angular/core';
import { SuggestedCars } from '../models/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  suggestedCars: SuggestedCars[] = [
    {
      banerimage: 'baner/baner-audi.jpg',
      category: {
        id: 0,
        category: 'cars',
        subcategory: 'audi',
      },
    },
    {
      banerimage: 'baner/baner-bmw.png',
      category: {
        id: 1,
        category: 'cars',
        subcategory: 'bmw',
      },
    },
    {
      banerimage: 'baner/baner-mercedes.jpg',
      category: {
        id: 2,
        category: 'cars',
        subcategory: 'mercedes',
      },
    },
  ];
  constructor() {}
  ngOnInit(): void {}
}
