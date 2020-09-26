import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../../models/post";
import {ActivatedRoute, ActivationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {


  @Input() post: Post;


  constructor(private router :Router , private activatedRouter : ActivatedRoute) {

  }

  ngOnInit() {
  }


  public gotoProductDetails() {
    console.log(this.post)
    this.router.navigateByUrl('posts/postDetails', { state: this.post });
  }

}
