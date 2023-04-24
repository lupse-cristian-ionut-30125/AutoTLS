import { Component, OnInit } from '@angular/core';
import { NavigationItem } from '../models/models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  navigationList: NavigationItem[] = [
    {
      category: 'BMW',
      subcategories: ['sedan', 'Combi'],
    },
    {
      category: 'Piese',
      subcategories: ['motor', 'bara'],
    },
  ];
  constructor() {}
  ngOnInit(): void {}
}
