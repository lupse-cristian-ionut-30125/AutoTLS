export interface Category {
  id: number;
  category: string;
  subcategory: string;
}

export interface SuggestedCars {
  banerimage: string;
  category: Category;
}
