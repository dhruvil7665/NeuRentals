import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Renting} from "../models/order";

@Injectable({
  providedIn: 'root'
})
export class RentingService {
  rentingResource: string;
  rentingResourceURL: string;
  rentingList: Array<Renting>;

  constructor(private http: HttpClient) {
    this.rentingResource = 'rentings';
    this.rentingResourceURL = `${environment.serverBaseURL}/${this.rentingResource}`;
    this.rentingList = this.getRentings();

  }

  getRentings(): Array<Renting> {
    this.http.get<Array<Renting>>(this.rentingResourceURL).subscribe(rentings => {
      this.rentingList = rentings;
      console.log(this.rentingList);
    });

    return this.rentingList;
  }

}
