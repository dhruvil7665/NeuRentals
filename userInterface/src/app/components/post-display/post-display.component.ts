import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../../models/post";
import {NgbCalendar, NgbDate, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {PostService} from "../../services/post.service";
import {Observable} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {map} from "rxjs/operators";
import {MatToolbarRow} from "@angular/material/toolbar";
import {CommunicationService} from "../../services/communication.service";
@Component({
  selector: 'app-post-display',
  templateUrl: './post-display.component.html',
  styleUrls: ['./post-display.component.scss']
})
//service for fetching posts, displaying and updating it
export class PostDisplayComponent implements OnInit {
  newCategory: string;
opened: boolean;
events:string[] =[];
categoryList: string[];


@Input() cat :string;
// postList : Array<Post>;
// finalList : Array<Post>;
postService : PostService;
category : string;

  frames: string[] = ['All','Monthly', 'Daily', 'Weekly']
  cats : string[] = ['All','Laptops','Cameras','Projectors','Treadmil','Dumbbell Set','Books' ]
  rentingType:string = 'All';
  communicationService :CommunicationService;
  subCat:string;
  testing$:string;
  postList:Array<Post>;
  post:Post;
  private catList: any;
  // constructor for app component which is calling the get to-do function
  constructor(postService: PostService,public activatedRoute: ActivatedRoute,private router: Router, communicationService :CommunicationService) {
    this.communicationService = communicationService;
    this.postService = postService;



     // this.category=this.testing$.toString();
     // this.post=this.testing$;

    this.communicationService.getMessage().subscribe((message) => {
      this.newCategory = message.toString()   ;
      console.log('ho gaya: '+this.newCategory);
    });

  }
  //constructor() { }

  ngOnInit() {


    // this.category=JSON.stringify(history.state);
    //
    // this.cat= history.state;
    // console.log("cattttt  "+ this.cat);
    //
    // console.log("cinit "+ this.category);

  }

filterList() : Array<Post>{


  //this.postService.subCat='Laptops';
  return this.postService.filterList();
}

  reset(){
    this.rentingType='All';
    this.postService.rentingType="All";

    this.subCat='All';
    this.postService.subCat='All';

  }

  // public gotoProductDetails(url, id) {
  //   this.router.navigate([url, id]).then( (e) => {
  //     if (e) {
  //       console.log("Navigation is successful!");
  //     } else {
  //       console.log("Navigation has failed!");
  //     }
  //   });
  // }




}
