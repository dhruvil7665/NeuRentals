
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Post} from '../../models/post';
import {NgbDate, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';


import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../../models/user";
import {UserService} from "../../services/user.service";


// @ts-ignore
@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PostDetailsComponent implements OnInit {

  post: Post;
  user: User;
  startDate: Date = new Date();
  endDate: Date = new Date();
  hoveredDate: NgbDate;

  fromDate: NgbDate;
  toDate: NgbDate;
postDescription: string;
maxLength: number;
selectedTimeFrame: string;
timeFrames: string[] = ['Daily','Weekly', 'Monthly'];
  userService: UserService;
  loggedInUser:User;
  userList: Array<User>;
  constructor(private activatedRoute:ActivatedRoute,private router:Router,calendar: NgbCalendar, userService: UserService) {
    this.fromDate = calendar.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
    this.userService = userService;
    // this.userService.getUsers().subscribe(users => {
    //   this.userList = users;
    // });
    this.userList = this.userService.getUsers();
    console.log(this.userList);
    //console.log('const user: '+ this.user);
    //   this.post = new Post(
    //   "Dell laptop","Amazing laptop with lot of featuresghghghjgjhjyg hyfghfjhyghjgjghygfgtfyfyzfgcygyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy",new Date()
    //   ,new Date(),true,true,new Date(),"Dimpi Dedhia"
    //   ,"Boston","laptop",[{startDate: new Date(), endDate: new Date()}],
    //   "20","Tremont Street","Northeastern University",
    //   ["img1.jpg","img2.jpg"],["img2.jpg"]
    // );




   //console.log(this.router.getCurrentNavigation().extras.state);

  }

  //Showing the description content to user
  showAll(){
   this.maxLength = this.postDescription.length;
  }

  showLess(){
    this.maxLength = 3;
  }

  ngOnInit() {
      console.log("loged in post details"+this.userService.loggedInUser);
    // const map = tt.map({
    //   key: 'P9x14dNyFxPqo3QJMBTXTezwBKNQWA4O',
    //   container: 'map',
    //   style: 'tomtom://vector/1/basic-main'
    // });
    // map.addControl(new tt.NavigationControl());
    // this.getDirection();

  this.post=history.state;
  console.log(this.post);
    this.postDescription = this.post.description;
    this.maxLength = 500;

  }

  // getDirection() {
  //   this.origin = { lat: 24.799448, lng: 120.979021 }
  //   this.destination = { lat: 24.799524, lng: 120.975017 }
  //
  //   // this.origin = 'Taipei Main Station'
  //   // this.destination = 'Taiwan Presidential Office'
  // }

  onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
  }

  isHovered(date: NgbDate) {
    return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
  }

  isInside(date: NgbDate) {
    return date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return date.equals(this.fromDate) || date.equals(this.toDate) || this.isInside(date) || this.isHovered(date);
  }

  setTimeFrame(selectedDate: Date){
    console.log("method called");
    if(this.selectedTimeFrame == 'Daily'){
      //selectedDate = this.endDate = this.startDate;
      this.startDate = selectedDate;
      this.endDate = selectedDate;
      console.log(selectedDate);
      console.log(this.startDate);
      console.log(this.endDate);
    }else if(this.selectedTimeFrame == 'Weekly'){
      console.log('inside weekly');
      this.startDate = selectedDate;
      this.endDate.setDate(this.startDate.getDate() + 7);
      console.log(this.startDate);
      console.log(this.endDate);
    } else if(this.selectedTimeFrame == 'Monthly'){
      this.startDate = selectedDate;
      this.endDate.setDate(this.startDate.getDate() + 30);
      console.log(this.startDate);
      console.log(this.endDate);
    }
  }

  //Added the post data in cart of user on server
  addToCart(){
    console.log('user: '+this.userService.loggedInUser);
        // console.log('user cart: '+this.user.cartList);
       this.userService.loggedInUser.cartList.push({postId: this.post.id, startDate: this.startDate, endDate: this.endDate});
         this.userService.updateUser(this.userService.loggedInUser).subscribe(user => {
          alert('Added to cart successfully');
        });
  }

}
