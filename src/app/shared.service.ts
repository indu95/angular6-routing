import { Injectable, EventEmitter } from '@angular/core';


import { BehaviorSubject } from 'rxjs';

@Injectable()
export class SharedService {

   messageSource = new BehaviorSubject<string>("default message");
  currentMessage = this.messageSource.asObservable();
  constructor() { }

  changeMessage(message: string) {
     
    this.messageSource.next(message);
  }

  getMessage(){
      return this.messageSource.getValue();
  }

}