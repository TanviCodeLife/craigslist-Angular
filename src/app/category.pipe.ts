import { Pipe, PipeTransform } from '@angular/core';
import { Listing } from './models/listing.model';
import { LISTINGS } from './mock-listings';
import { CATEGORIES } from './mock-categories';

@Pipe({
  name: "category",
  pure: false
})

export class CategoryPipe implements PipeTransform {

  transform(input: Listing[], categoryId) {
    var output: Listing[] = [];
    for(var i = 0; i< input.length; i++) {
      let categoryIdNumber: number = parseInt(input[i].categoryId)
      if(categoryIdNumber === categoryId){
        output.push(input[i]);
      }
    }
    return output;
  }
}
