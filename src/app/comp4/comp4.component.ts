import { Component, OnInit } from '@angular/core';

import { SharedService } from "../shared.service";
@Component({
  selector: 'app-comp4',
  templateUrl: './comp4.component.html',
  styleUrls: ['./comp4.component.css']
})
export class Comp4Component implements OnInit {
 message:String;
  constructor(private sharedService:SharedService) {
    //this.sharedService.currentMessage.subscribe(message => this.message = message);
  }

  ngOnInit() {
     
    this.sharedService.messageSource.subscribe(message =>{
     this.message=message;

    } );
  }
  

}
