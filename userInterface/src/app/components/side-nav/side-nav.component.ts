import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatSidenav} from "@angular/material/sidenav";

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  mode = new FormControl('over');

  constructor() { }
  opened = false;
  ngOnInit() {
  }




}
