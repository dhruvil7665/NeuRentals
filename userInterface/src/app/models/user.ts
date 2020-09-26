import {fn} from "@angular/compiler/src/output/output_ast";

export class User {

  id: number;
  fname: string;
  // lname: string;
  // email: String;
  // phone:  number;
  // address: string;
  // dob: Date;
  // nuid: number;
  password: string;
  // cardDetails:Array<{cardNo: Number, cardDate: Date, cardHolderName: string}>;
   creationDate: Date;

  // gender: string;
  // isActive: boolean;
  // lastLogin: Date;
  // profileImg: string;
   cartList:Array<{postId: Number, startDate: Date, endDate: Date}>;

  //
  // constructor(id: string, fname: string,
  //   lname: string,
  //   email: String,
  //   phone:  number,
  //   address: string,
  //   dob: Date,
  //   nuid: number,
  //   password: string,
  //   cardDetails:Array<{cardNo: Number, cardDate: Date, cardHolderName: string}>=[],
  //   creationDate: Date,
  //   gender: string,
  //   isActive: boolean,
  //   lastLogin: Date,
  //   profileImg: string,
  //   cartList:Array<{postId: Number, startDate: Date, endDate: Date}>=[]){
  //   this.fname = fname;
  //   this.lname = lname;
  //   this.email = email;
  //   this.phone = phone;
  //   this.address = address;
  //   this.dob = dob;
  //   this.nuid = nuid;
  //   this.password = password;
  //   this.cardDetails = cardDetails;
  //   this.creationDate = creationDate;
  //   this.gender = gender;
  //   this.isActive = isActive;
  //   this.lastLogin = lastLogin;
  //   this.profileImg = profileImg;
  //   this.cartList = cartList;
  // }


  constructor(fname: string, password: string,cartList:Array<{postId: Number, startDate: Date, endDate: Date}>=[]){
    this.fname=fname;
    this.password=password;
    this.cartList=cartList;

  }
}
