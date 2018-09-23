import { Component, OnInit ,Output} from '@angular/core';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
  @Output() messageFired = new EventEmitter<number>();

  message:String;
  constructor() { }

  ngOnInit() {
  }
  sendMessage(msg){
    this.messageFired.emit(msg);
  }

}
