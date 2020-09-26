// Imports
import { Component, OnInit } from '@angular/core';
import {SideNavComponent} from "../side-nav/side-nav.component";

// Components
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
// Exports
export class HeaderComponent implements OnInit {
   showModal: boolean = false;
    constructor() {
  }

  ngOnInit() {
  }

  toggleModal = () => {
    this.showModal = !this.showModal;
  }
}
