export class Renting {
  userId: Number;
  postId: Number;
  cost: Number;
  dateOfOrder: Date;
  rentStartDate: Date;
  rentEndDate: Date;

  constructor(userId: Number, postId: Number, cost: Number, dateOfOrder: Date, rentStartDate: Date, rentEndDate: Date) {
    this.userId = userId;
    this.postId = postId;
    this.cost = cost;
    this.dateOfOrder = dateOfOrder;
    this.rentStartDate = rentStartDate;
    this.rentEndDate = rentEndDate
  }
}
