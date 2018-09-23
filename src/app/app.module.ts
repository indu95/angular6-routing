import { SharedService } from './shared.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppLoginComponent } from './app-login/app-login.component';
import { MenuComponent } from './menu/menu.component';
import { Routes, RouterModule } from '@angular/router';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { Comp4Component } from './comp4/comp4.component';
import { StoreModule } from "@ngrx/store";
import { PageComponent } from './page/page.component';
import { SignupComponent } from './signup/signup.component';
import { SubpageComponent } from './subpage/subpage.component';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';
import { Page2Component } from './page2/page2.component';
import { CustomdataComponent } from './customdata/customdata.component';
const appRoutes: Routes = [
  {
    path: 'menu/:uname', component: MenuComponent,
    children: [
      {
        path: 'customdata', component: CustomdataComponent, children: [

        ]
      },
      
        { path: 'communication', component: LeftSidebarComponent, loadChildren: './lazymodule/lazymodule.module#LazymoduleModule' }
        
    ]
  },
  { path: '', component: AppLoginComponent },
  { path: 'signup', component: SignupComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AppLoginComponent,
    MenuComponent,
    SignupComponent,
    CustomdataComponent,
    LeftSidebarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
