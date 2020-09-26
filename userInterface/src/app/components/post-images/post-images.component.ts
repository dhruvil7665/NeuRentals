import { Component, OnInit, Input } from '@angular/core';
import{Post} from "../../models/post";

@Component({
  selector: 'app-post-images',
  templateUrl: './post-images.component.html',
  styleUrls: ['./post-images.component.scss']
})
export class PostImagesComponent implements OnInit {
  @Input() post: Post;
  postImageDisplay: string;
  constructor() {
  }

  ngOnInit() {
    this.postImageDisplay = this.post.photos[0];
  }

}
