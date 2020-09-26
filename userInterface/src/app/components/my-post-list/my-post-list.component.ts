import { Component, OnInit } from '@angular/core';
import {Post} from "../../models/post";
import {PostService} from "../../services/post.service";

@Component({
  selector: 'app-my-post-list',
  templateUrl: './my-post-list.component.html',
  styleUrls: ['./my-post-list.component.scss']
})
export class MyPostListComponent implements OnInit {
  myPostList: Array<Post>;
  active: boolean;
  postService: PostService;
  postCategory: string;
  constructor(postService: PostService) {
    this.postService = postService;
    //Getting all posts posted by the logged in user
    postService.getAllPosts().subscribe(posts => {
      //storing the posts in the arrayList
      this.myPostList = posts;
    });
  }

  //When user clicks on the checkbox activate/deactivate the post
  activeStatus(post: Post){
    console.log('post: '+post.isActive);
    this.active = post.isActive;
    console.log('post active statua: '+this.active);
    this.active = !this.active;
    post.isActive = this.active;
    this.postService.updatePost(post).subscribe(post => {
    });
  }

  setActive(post: Post){
    console.log('in page load');
  this.active = post.isActive;
  }

  ngOnInit() {
  }

  //Delete the post when user clicks on delete button
  deletePost(post: Post){
    let id: Number = post.id;
    //a call to delete the post from database
    this.postService.deletePost(post).subscribe(post => {
      alert('Post deleted successfully');
      //Filter the arrayList to not show the deleted post
      this.myPostList = this.myPostList.filter(post => post.id != id);
      }
    );
  }
}
