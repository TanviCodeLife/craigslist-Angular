import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { MainComponent } from './main/main.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { ListingDetailComponent } from './listing-detail/listing-detail.component';
import { CategoryPipe } from './category.pipe';
import { AddListingComponent } from './add-listing/add-listing.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryListComponent,
    MainComponent,
    CategoryDetailComponent,
    ListingDetailComponent,
    CategoryPipe,
    AddListingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
