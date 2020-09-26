/**
 * Imports
 */
import { Component, OnInit } from '@angular/core';
import {Renting} from './../../models/order';
import {MatDialog} from "@angular/material/dialog";
import {RentingService} from "../../services/order.service";
import {Post} from "../../models/post";

/**
 * Exporting rentings Interface
 */
export interface rentings {
  postId: Number;
  userId: Number;
  sDate: Date;
  eDate: Date;
  cost: Number;
}

/**
 * Components
 */
@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.scss']
})

export class MyOrdersComponent implements OnInit {
  // myRentings: Renting[];
  //post: Post = new Post();
  posts: Post[];
  myRentings: rentings[] = [
    {
      postId:12,
      userId: 123,
      sDate: new Date('1/1/16'),
      eDate: new Date('2/1/16'),
      cost: 100
    },
    {
      postId:13,
      userId: 456,
      sDate: new Date('1/1/16'),
      eDate: new Date('2/1/16'),
      cost: 150
    },
    {
      postId:14,
      userId: 789,
      sDate: new Date('1/1/16'),
      eDate: new Date('2/1/16'),
      cost: 200
    }]
  constructor(public dialog: MatDialog, private rentingService: RentingService) { }

  ngOnInit() {
  }

}
