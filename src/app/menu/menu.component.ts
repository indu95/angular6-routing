import { Component, OnInit ,Output} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Router} from '@angular/router'; 
import { BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  uname:String;

  ngOnInit() {
    this.router.navigate(['menu/'+this.uname+'/customdata']);
  }

  constructor(private route: ActivatedRoute,private router: Router) {
    this.route.params.subscribe( params =>{
      console.log(params) ;
      this.uname=params.uname;
    });
   }
  

}
