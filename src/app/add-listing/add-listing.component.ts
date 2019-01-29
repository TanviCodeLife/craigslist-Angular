import { Component, OnInit } from '@angular/core';
import { ListingService } from '../listing.service';
import { Listing } from './../models/listing.model';

@Component({
  selector: 'app-add-listing',
  templateUrl: './add-listing.component.html',
  styleUrls: ['./add-listing.component.css'],
  providers: [ListingService]
})
export class AddListingComponent implements OnInit {
  listing: Listing;

  constructor(private listingService: ListingService) { }

  ngOnInit() {
    // this.listings = this.listingService.
  }

  submitListingForm(title, content, userName, categoryId){
    this.listing = new Listing(title, content, userName, categoryId);
    this.listing.assignListingId();
    this.listingService.addListing(this.listing);

  };
}
