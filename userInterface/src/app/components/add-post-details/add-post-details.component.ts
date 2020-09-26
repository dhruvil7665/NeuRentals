import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PostService} from '../../services/post.service';

@Component({
  selector: 'app-add-post-details',
  templateUrl: './add-post-details.component.html',
  styleUrls: ['./add-post-details.component.scss']
})
export class AddPostDetailsComponent implements OnInit {
  uploadFiles: Array<File> = new Array<File>();
  imageUrls: Array<any> = new Array<any>();
  dailyChecked: boolean;
  weeklyChecked: boolean;
  monthlyChecked: boolean;
  postTitle: string;
  postCategory: string;
  postSubCategory: string;
  postDesc: string;
  postPickUpLocation: string;
  postContactNo: string;
  postDailyPrice = 0;
  postWeeklyPrice = 0;
  postMonthlyPrice = 0;
  rentStartDate: Date;
  rentEndDate: Date;
  postService: PostService;
  imageNames: Array<string> = new Array<string>();
  success: boolean = false;

  constructor(postService: PostService) {
    this.postService = postService;
  }

  //Method that will create a new post object and sent to service for http post call of server
  addPost() {
    this.postService.createPost(this.postTitle, this.postDesc, new Date(), null, true, false,
      null,
      null,
      this.postCategory,
      this.postSubCategory,
      [{startDate: this.rentStartDate, endDate: this.rentEndDate}],
      [{type: 'Daily', price: this.postDailyPrice}, {type: 'Weekly', price: this.postWeeklyPrice}, {type: 'Monthly', price: this.postMonthlyPrice}],
      this.postPickUpLocation,
      this.imageNames,
      null,"").subscribe(newPost => {});
    this.success = true;
    alert('Post created successfully');
  }

  //Uploading image of posts
  addImageUrls(element: any) {
    console.log('inside add');
    this.uploadFiles.push(<File>element.target.files[0]);
    this.previewImage(<File>element.target.files[0]);
    // this.imageUrls.push('Dimpi ' + this.count);
    // this.count++;
  }

  //previewing the image uploaded by the user
  previewImage(fileData) {
    //checking whether file uploaded is image file or not
    let mimeType = fileData.type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }
    let reader = new FileReader();
    reader.readAsDataURL(fileData);
    reader.onload = (_event) => {
      //pushing the image names in list
      this.imageUrls.push(reader.result);
      this.imageNames.push(fileData.name);
    };
  }

  ngOnInit() {
  }

}
