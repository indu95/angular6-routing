import { SharedService } from './../shared.service';
import { BehaviorSubject } from 'rxjs';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
  
})
export class Comp3Component implements OnInit {
 msg:String;
  constructor(private sharedService:SharedService) {

   }

  ngOnInit() {
   
    this.sharedService.currentMessage.subscribe(message => this.msg = message)
  }
  changeDate(){
    this.sharedService.changeMessage("new msg modified from comp3!!");
   // this.sharedService.messageSource.next("new msg modified from comp3!!");
  }
  
}
