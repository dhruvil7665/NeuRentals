import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { PostImagesComponent } from './components/post-images/post-images.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './components/footer/footer.component';
import { MatToolbarModule} from "@angular/material/toolbar";
import { SideNavComponent } from './components/side-nav/side-nav.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import { CategoryComponent } from './components/category/category.component';
import {MatTreeModule} from  '@angular/material/tree';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { PostsComponent } from './components/posts/posts.component';
import {FormsModule} from '@angular/forms';
import {MatRadioModule} from '@angular/material';
import {MAT_RADIO_DEFAULT_OPTIONS} from '@angular/material/radio';
import { DateTimePickerModule } from '@syncfusion/ej2-angular-calendars';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { AddPostsComponent } from './components/add-posts/add-posts.component';
import { AddPostDetailsComponent } from './components/add-post-details/add-post-details.component';
import { AddPostImagesComponent } from './components/add-post-images/add-post-images.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MyPostListComponent } from './components/my-post-list/my-post-list.component';
import {MatExpansionModule} from "@angular/material/expansion";
import {MatCardModule, MatCardTitle} from "@angular/material/card";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { ReactiveFormsModule} from "@angular/forms";
import { TemporaryComponent } from './components/temporary/temporary.component';
import {NgbCarousel,NgbSlideEvent, NgbSlideEventSource} from "@ng-bootstrap/ng-bootstrap";
import {NgPipesModule} from 'ngx-pipes';
import { CarouselComponent } from './components/carousel/carousel.component';
import {PostDisplayComponent} from "./components/post-display/post-display.component";
import { HomeComponent } from './components/home/home.component';
import {CommunicationService} from "./services/communication.service";
import { SummaryComponent } from './components/summary/summary.component';
import { PlaceOrderComponent } from './components/place-order/place-order.component';
import {MatDialogModule} from '@angular/material/dialog';


import { UserLoginComponent } from './components/user-login/user-login.component';

import { MyProfileComponent } from './components/my-profile/my-profile.component';

import {MyOrdersComponent} from "./components/my-orders/my-orders.component";

import { UserRegisterComponent } from './services/user-register/user-register.component';
import {MatTabsModule} from "@angular/material/tabs";
import { ThankYouComponent } from './components/thank-you/thank-you.component';





@NgModule({
  declarations: [
    AppComponent,
    PostDetailsComponent,
    PostImagesComponent,
    AddPostsComponent,
    AddPostDetailsComponent,
    AddPostImagesComponent,
    PostDisplayComponent,
    PostsComponent,
    PlaceOrderComponent,
    MyPostListComponent,
    HeaderComponent,
    FooterComponent,
    SideNavComponent,
    CategoryComponent,
    PostDisplayComponent,
    PostsComponent,
    TemporaryComponent,
    CarouselComponent,
    HomeComponent,
    SummaryComponent,

    UserLoginComponent,

    MyProfileComponent,
    MyOrdersComponent,

    UserRegisterComponent,

    ThankYouComponent,



  ],
  imports: [
    BrowserModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatRadioModule,
    MatToolbarModule,
    MatTreeModule,
    AppRoutingModule,
    MatSidenavModule,
    NgbModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule,
    BrowserAnimationsModule,
    NgPipesModule,
    FormsModule,
    DateTimePickerModule,
    NgbModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,

    MatGridListModule,
    HttpClientModule,
    MatSelectModule,
    MatCheckboxModule,
    MatCardModule,
    NgPipesModule,
    MatExpansionModule,

    FormsModule,
    MatTreeModule,
    MatProgressBarModule,
    NgPipesModule,
    MatTabsModule,
    HttpClientModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatCardModule,
    HttpClientModule,
  ],
  providers: [CategoryComponent,PostDisplayComponent,CommunicationService],
  bootstrap: [AppComponent]
})

export class AppModule { }
