import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})


export class SummaryComponent implements OnInit {
  
  cartItems: string[]=["Laptop", "Bicycle", "Camera"];
  display ='none';
  constructor() { }

  onCloseHandled(){
    this.display='none';
  }

  openModal (){
    this.display="block";
  } 
  
  ngOnInit() {
  }

}
