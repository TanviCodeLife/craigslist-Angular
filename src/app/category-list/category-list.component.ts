import { Component } from '@angular/core';
import { Category } from '../models/category.model.ts';
import { Router } from '@angular/router';

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

  constructor(private router: Router) { }

  goToCategoryPage(clickedCategory: Category) {
    this.router.navigate(['categories', clickedCategory.id])
  }

}
