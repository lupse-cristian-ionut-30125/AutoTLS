import { Component, Input, OnInit } from '@angular/core';
import { OpenProductDetailsDirective } from '../directives/open-product-details.directive';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  @Input() view: 'grid' | 'list' | 'currcartitem' | 'prevcartitem' = 'grid';
  constructor() {}
  ngOnInit(): void {}
}
