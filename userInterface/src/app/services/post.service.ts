import { Injectable } from '@angular/core';

import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Post} from "../models/post";


@Injectable({
  providedIn: 'root'
})
export class PostService {
  postResource: string;
  postResourceURL: string;
  postList : Array<Post>;
  catList : Array<Post>;
  rentingType:string ="All";
  subCat : string = "All";
  private flag: number=0;
  constructor(private http: HttpClient) {
    this.postResource = 'posts';
    //Creating post URL
    this.postResourceURL = `${environment.serverBaseURL}/${this.postResource}`;
    this.postList=this.getPosts();
  }

  //Getting post from the server with filters
  filterList() : Array<Post>{
    if(this.subCat=='Laptops'){console.log("it is a laptop");}
    this.flag = 0;
    if(this.subCat=='All'&&this.rentingType=='All'){
      this.flag=0;
      this.catList=this.postList;
    }else if(this.rentingType=='Monthly'){
      this.flag=1;
      this.catList=this.postList.filter(post=>post.rentingWindowType=="Monthly")
    } else if(this.rentingType=='Weekly'){
      this.flag=1;
      this.catList= this.postList.filter(post=>post.rentingWindowType=="Weekly")
    } else if(this.rentingType=='Daily'){
      this.flag=1;
      this.catList= this.postList.filter(post=>post.rentingWindowType=="Daily")
    }

    // if(this.flag==1){
    //   this.catList=this.catList.filter(post=>post.subCategory==this.subCat);
    // }



    return this.catList;
    // if(this.rentingType=='All'){
    //   return this.postList;
    //   console.log(this.postList);
    //
    // }else if(this.rentingType=='Monthly'){
    //   return this.postList.filter(post=>post.rentingWindowType=="Monthly")
    // }else if(this.rentingType=='Weekly'){
    //   return this.postList.filter(post=>post.rentingWindowType=="Weekly")
    //    }
    // else if(this.rentingType=='Daily')
    //   return this.postList.filter(post=>post.rentingWindowType=="Daily")
  }

// gets all the to-dos from the server using get method in http


  //method to create a new post
  createPost(title: string, description: string, createdDate: Date, modifiedDate: Date, isActive: boolean, isApproved: boolean,
             approvedDate: Date,
             approvedByEditorName: string,
             category: string,
             subCategory: string,
             rentingWindowTimeFrame: Array<{ startDate: Date, endDate: Date }> = [],
             rentingWindowTypeWithPrice: Array<{ type: string, price: number }> = [],
             pickupLocation: string,
             photos: Array<string>,
             videos: Array<string>, customerId: string): Observable<Post> {
    let newPost: Post;
    //creation of new post object
    newPost = new Post(title, description, createdDate, modifiedDate, isActive, isApproved,
      approvedDate,
      approvedByEditorName,
      category,
      subCategory,
      rentingWindowTimeFrame,
      rentingWindowTypeWithPrice,
      pickupLocation,
      photos,
      videos, customerId);
    return this.http.post<Post>(this.postResourceURL, newPost);
  }

  //Method to get post from server
  getPosts(): Array<Post> {
    this.http.get<Array<Post>>(this.postResourceURL).subscribe(posts => {
      this.postList = posts;
    });
    return this.postList;
  }



  getAllPosts(): Observable<Array<Post>> {
    //http call to get all posts
    return this.http.get<Array<Post>>(this.postResourceURL);
  }


//method to update a post
  updatePost(post: Post): Observable<Post> {
    let postPutResourceURL = `${this.postResourceURL}/${post.id}`;
    //http call for updating post
    return this.http.put<Post>(postPutResourceURL, post);
  }

  //method to delete a post
  deletePost(post : Post): Observable<Post>{
    let postPutResourceURL = `${this.postResourceURL}/${post.id}`;
    //http call for deleting the post
    return this.http.delete<Post>(postPutResourceURL);
  }

}
