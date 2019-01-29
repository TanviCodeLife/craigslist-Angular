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
  id: number = 0;

  constructor(private listingService: ListingService) { }

  ngOnInit() {
    // this.listings = this.listingService.
  }

  assignListingId() {
    let newId = this.id;
    this.id++;
    return newId;
  }

  submitListingForm(title, content, userName, categoryId){
    let categoryIdNum: number = parseInt(categoryId)
    let listingId: number = this.assignListingId();
    console.log(listingId);
    this.listing = new Listing(title, content, userName, categoryIdNum, listingId);
    this.listingService.addListing(this.listing);

  };
}
