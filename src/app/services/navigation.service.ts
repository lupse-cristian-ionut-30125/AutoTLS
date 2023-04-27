import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs';
import { Category } from '../models/models';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  baseUrl = 'https://localhost:7105/api/Shopping/';

  constructor(private http: HttpClient) {}

  getCategoryList() {
    let url = this.baseUrl + 'GetCategoryList';
    return this.http.get<any[]>(url).pipe(
      map((categories) =>
        categories.map((category) => {
          let mappedCategory: Category = {
            id: category.id,
            category: category.category,
            subcategory: category.subcategory,
          };
          return mappedCategory;
        })
      )
    );
  }
}
