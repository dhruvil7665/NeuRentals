import { ThankYouComponent } from './components/thank-you/thank-you.component';
import { SummaryComponent } from './components/summary/summary.component';
import { PlaceOrderComponent } from './components/place-order/place-order.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PostDisplayComponent} from "./components/post-display/post-display.component";
import {AppComponent} from "./app.component";
import {PostDetailsComponent} from "./components/post-details/post-details.component";
import {HomeComponent} from "./components/home/home.component";

import {AddPostDetailsComponent} from "./components/add-post-details/add-post-details.component";
import {MyPostListComponent} from "./components/my-post-list/my-post-list.component";


const routes: Routes = [

  {path:"",component:HomeComponent},
  {path:"posts",component:PostDisplayComponent},
  {path:"posts/postDetails",component:PostDetailsComponent},
  {path:"myPost/addPost",component:AddPostDetailsComponent},
  {path:"myPost",component : MyPostListComponent},
  {path : "myCart", component:PlaceOrderComponent },
  {path : "myCart/summary", component:SummaryComponent },
  {path : "myCart/summary/thankyou", component:ThankYouComponent }

 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
