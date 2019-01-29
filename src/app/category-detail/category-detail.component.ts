import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Category } from './../models/category.model';
import { Listing } from './../models/listing.model';
import { ListingService } from '../listing.service';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css'],
  providers: [ ListingService ]
})
export class CategoryDetailComponent implements OnInit {
  categoryId: number = null;
  listings: Listing[];

  constructor(private route: ActivatedRoute, private location: Location, private router: Router, private listingService: ListingService) { }

  ngOnInit() {
    this.listings = this.listingService.getListings();

    this.route.params.forEach((urlParameters) => {
      this.categoryId = parseInt(urlParameters['id']);
    });

    console.log(this.categoryId);
    console.log(this.listings);
  }

  goToListingPage(clickedListing: Listing){
    console.log(clickedListing)
    this.router.navigate(['listings', clickedListing.id])
  }

}
