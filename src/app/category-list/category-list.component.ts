import { Component } from '@angular/core';
import { Category } from '../models/category.model.ts'

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent {
  categories: Category[] = [
    new Category("Housing", 1),
    new Category("Jobs", 2),
    new Category("Furniture", 3)
  ];

  constructor() { }


}
