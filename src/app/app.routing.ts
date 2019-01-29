import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { ListingDetailComponent } from './listing-detail/listing-detail.component';

const appRoutes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'categories/:id',
    component: CategoryDetailComponent
  },
  {
    path: 'listings/:id',
    component: ListingDetailComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
