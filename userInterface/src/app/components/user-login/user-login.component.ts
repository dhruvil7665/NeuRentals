import {Component, Input, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {User} from "../../models/user";

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  username : string=null;
  password : string=null;
  retypepassword: string=null;
  userService: UserService;
  userList:Array<User>;
  cartList:Array<{postId: Number, startDate: Date, endDate: Date}>=[]
  loggedInUser:User;
//inputs for opening and closing of login modal
  @Input() show = false;

  @Input() closeCallback = () => (false);


  loginUser:string;
  loginPass:string;
  constructor(userService:UserService) {
    //storing instance of userService
    this.userService=userService;
    // this.userList=userService.getUsers();
    // console.log(this.userList);
  }

  ngOnInit() {
   // this.userList=this.userService.getUsers();
  }
  loginFn(){
    //fethced the userList from the mongoDb
    this.userList=this.userService.getUsers();
    console.log("this "+this.userList );

    //iterating the loop and finding the user from the credentials
    this.userList.forEach(value => {
      console.log("lo"+this.loginUser+"  pas"+this.loginPass)
      if(value.fname==this.loginUser&&value.password==this.loginPass){
        console.log("userfound")

        this.loggedInUser=value;
        alert("You are logged in as: "+this.loggedInUser.fname);
        this.userService.loggedInUser=value;
      }
    })
    console.log("userfound outside" + this.loggedInUser.fname);
  }

  //code for registering the user
  registerUser(){
    if(this.password!=this.retypepassword&&this.password!=null){
      alert("Passwords Dont Match");
    }else{
            this.userService.createUser(this.username,this.password,this.cartList);
            alert("You are Registered")

    }



  }




}

