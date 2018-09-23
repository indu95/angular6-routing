import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router'; 
@Component({
  selector: 'app-login',
  templateUrl: './app-login.component.html',
  styleUrls: ['./app-login.component.css']
})
export class AppLoginComponent implements OnInit {
  errorMsg:string;
  error:Boolean =false;

  constructor(private router: Router){}

  ngOnInit() {
  }
  login(name,pwd){
    if(name==null || name=="" ){
      this.errorMsg="Please enter name";
      this.error=true;
    }
    else if(pwd==null || pwd=="" ){
      this.errorMsg="Please enter password";
      this.error=true;
    }
    else{
      this.router.navigate(['/menu/'+name]);
    }
  }
  signup(){
    this.router.navigate(['/signup']);
  }

}
