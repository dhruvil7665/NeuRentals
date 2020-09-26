export class Post {
  id: Number;
  title: string;
  description: string;
  createdDate: Date;
  modifiedDate: Date;
  isActive: boolean;
  isApproved: boolean;
  approvedDate: Date;
  approvedByEditorName: string;
  category: string;
  subCategory: string;
  rentingWindowTimeFrame: Array<{startDate: Date, endDate: Date}>;
  rentingWindowTypeWithPrice: Array<{type: string, price: number}>;
  rentingWindowType: string;
    pickupLocation: string;
  photos: Array<string>;
  videos: Array<string>;
  customerId: string;

  constructor(title: string, description: string, createdDate: Date, modifiedDate: Date, isActive: boolean, isApproved: boolean,
              approvedDate: Date,
  approvedByEditorName: string,
  category: string,
  subCategory: string,
  rentingWindowTimeFrame: Array<{startDate: Date, endDate: Date}> = [],
  rentingWindowTypeWithPrice: Array<{type: string, price: number}> = [],
  pickupLocation: string,
  photos: Array<string>,
  videos: Array<string>, customerID: string){
    this.title = title;
    this.description = description;
    this.createdDate = createdDate;
    this.modifiedDate = modifiedDate;
    this.isActive = isActive;
    this.isApproved = isApproved;
    this.approvedDate = approvedDate;
    this.approvedByEditorName = approvedByEditorName;
    this.category = category;
    this.subCategory = subCategory;
    this.rentingWindowTimeFrame = rentingWindowTimeFrame;
    this.rentingWindowTypeWithPrice = rentingWindowTypeWithPrice;
    this.pickupLocation = pickupLocation;
    this.photos = photos;
    this.videos = videos;
    this.customerId = customerID;
  }
}
