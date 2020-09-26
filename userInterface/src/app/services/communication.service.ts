import { Injectable } from '@angular/core';
import {Observable, ObservedValueOf, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
   subject = new Subject<string>();
  constructor() { }

  sendMessage( message : string){
    this.subject.next(message);
  }

  clearMessage(){
    this.subject.next();
  }

  getMessage():Observable<string>{
    return this.subject.asObservable()  ;
  }
}
