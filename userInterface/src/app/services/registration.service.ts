import { Injectable } from '@angular/core';
import { HttpClient,HttpClientModule } from '@angular/common/http';

import { Observable, of, throwError, pipe} from "rxjs"
import { map, filter, catchError, mergeMap } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  public apiURL:string="http://localhost:3000/register";
  constructor(private httpClient:HttpClient) { }

  RegisterUser (user:any)
  {
    return this.httpClient.post(this.apiURL,user)
      .pipe(
        map(res => res),
        catchError( this.errorHandler)
      );
  }
  errorHandler(error: Response) {
    console.log(error);
    return throwError(error);
  }
}
