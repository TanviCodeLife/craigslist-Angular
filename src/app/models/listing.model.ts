export class Listing {
  dateNow: Date = new Date;
  id: number = 0;
  constructor(
    public title: string,
    public contents: string,
    public userName: string,
    public categoryId: number){}

  assignListingId() {
    let newId = this.id;
    this.id++;
    return newId;
  }
}
