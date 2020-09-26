import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {User} from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userResource: string;
  userResourceURL: string;
  userList : Array<User>;
  rentingType:String ="All";
  user: any;
  loggedInUser: User;
  constructor(private http: HttpClient) {
    this.userResource = 'users';
    this.userResourceURL = `${environment.serverBaseURL}/${this.userResource}`;
    this.userList=this.getUsers();
  }
// gets all the users from the server using get method in http
  getUsers(): Array<User> {
    this.http.get<Array<User>>(this.userResourceURL).subscribe(users => {
      this.userList = users;
      console.log(this.userList);
    });
    return this.userList;
  }

  // gets the users from the server using get method in http
  getUser(id:string): Observable<User> {
    let userGetResourceURL = `${this.userResourceURL}/${id}`;
    console.log('inside service: '+this.http.get<User>(userGetResourceURL));
    return this.http.get<User>(userGetResourceURL);
  }
  //method to update user cart
  updateUser(user: User): Observable<User> {
    let userPutResourceURL = `${this.userResourceURL}/${user.id}`;
    //http call for updating user
    return this.http.put<User>(userPutResourceURL, user);
  }
  //creating new user
  createUser(username:string,password:string,cartList:Array<{postId: Number, startDate: Date, endDate: Date}>=[]): Observable<User> {
    let newUser = new User(username,password,cartList);
    //console.log("title"+title);
    return this.http.post<User>(this.userResourceURL, newUser);
  }

  // filterList() : Array<Post>{
  //   if(this.rentingType=='All'){
  //     return this.postList;
  //     console.log(this.postList);
  //   }else if(this.rentingType=='Monthly'){
  //     return this.postList.filter(post=>post.rentingWindowType=="Monthly")
  //   }else if(this.rentingType=='Weekly'){
  //     return this.postList.filter(post=>post.rentingWindowType=="Weekly")
  //      }
  //   else if(this.rentingType=='Daily')
  //     return this.postList.filter(post=>post.rentingWindowType=="Daily")
  //   }

}
