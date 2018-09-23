import { Component, OnInit } from '@angular/core';
import { SharedService } from "../shared.service";
@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
message : String;
parentMsg:String;
  constructor() { }

  ngOnInit() {
    
  }
  getMessage(message:String){
    this.message=message;
  }
  sendMessage(){
       this.parentMsg="Message from parent";
  }

}
