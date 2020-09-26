/**
* Imports
 */
import { logging } from 'protractor';
import { PostService } from './../../services/post.service';
import { UserService } from './../../services/user.service';
import { Post } from './../../models/post';
import { User } from './../../models/user';
import { Component, OnInit, Input, Inject } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { post } from 'selenium-webdriver/http';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

/**
 * Exporting cart interface
 */
export interface cart {
  title: string;
  category: string;
  sDate: Date;
  eDate: Date;
  price: number;
}

export interface cartI {
  id: number,
  sdate: Date,
  eDate: Date
}

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.scss']
})

export class PlaceOrderComponent implements OnInit {

custId: string = "5deff6da60a7532ab858f861";

  posts: Post[];
  post : Post;
  totalPrice : number=0;
  user : User;
  userList: User[];
  mycartItem : {postId: Number, startDate: Date, endDate: Date};

  myCart:Array<{postId: Number, startDate: Date, endDate: Date}>;
  id: number;
  //post: Post = new Post();



  myPost : Post[];


  cartItems: cart[] = [
    {
      title: 'Laptop',
      category: 'Electronics',
      sDate: new Date('1/1/16'),
      eDate: new Date('2/1/16'),
      price: 200
    },
    {
      title: 'Bicycle',
      category: 'Sports',
      sDate: new Date('1/1/16'),
      eDate: new Date('2/1/16'),
      price: 150
    },
    {
      title: 'Camera',
      category: 'Electronics',
      sDate: new Date('1/1/16'),
      eDate: new Date('2/1/16'),
      price: 300
    }
  ];


  ngOnInit() {

    console.log("Inside Place Order Component")
  }

  constructor(public dialog: MatDialog, private userService: UserService, private postService :PostService) {

    this.postService=postService;
    this.userService = userService;
    this.gettot();
    console.log(this.totalPrice)
    //this.user = userService.getUser(this.custId);

    // this.user = this.userService.getUser("5deff6da60a7532ab858f861").subscribe(user => {
    // });
    // this.myCart = this.user.cartList;
    // console.log('my cart: '+this.user.fname);
    // this.posts = this.postService.getPosts();
    // //this.getCart();

   }


  //  getCart(): void {
  //   for(this.id in this.myCart)
  //   {
  //     console.log(this.id);
  //   }
  //  }

   getCart(): void {
    for(this.mycartItem of this.user.cartList)
    {
//
//       // for( in this.posts)
//       // {
//       //   if()
//
//       // }
//
      for(this.post of this.posts)
      {
        if(this.post.id == this.mycartItem.postId)
        {
          console.log(this.post);
         this.myPost.push(this.post);
        }

      }


    //   getCart2(): void {
    // for(this.id in this.myCart)
    // {
      // for( in this.posts)
      // {
      //   if()

      // }

    }
   }


  deleteItem(c: cart){
    this.cartItems.forEach( (item, index) => {
      if(item === c) this.cartItems.splice(index,1);
      this.gettot();
    });
 }

 gettot(){
   this.totalPrice =0;
  this.cartItems.forEach( (item, index) => {
    this.totalPrice = this.add(this.totalPrice,item.price);
  });
}

 add = function (a: number, b: number): number {
  return a + b

};

}
