export class Listing {
  dateNow: Date = new Date;
  constructor(public title: string, public contents: string, public userName: string, public categoryId: number, public id: number){}
}
