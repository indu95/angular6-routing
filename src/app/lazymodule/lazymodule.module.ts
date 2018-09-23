import { Page2Component } from './../page2/page2.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubpageComponent } from '../subpage/subpage.component';  
import { Routes, RouterModule } from '@angular/router';
import { LeftSidebarComponent } from '../left-sidebar/left-sidebar.component';
import { MenuComponent } from '../menu/menu.component';
import { Comp1Component } from '../comp1/comp1.component';
import { Comp2Component } from '../comp2/comp2.component';
import { Comp3Component } from '../comp3/comp3.component';
import { Comp4Component } from '../comp4/comp4.component';
import { PageComponent } from '../page/page.component';

const routes: Routes = [{ path: '', component: SubpageComponent },
  { path: 'subpage', component: SubpageComponent },
  { path: 'page2', component: Page2Component },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    SubpageComponent,
    Page2Component,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    Comp4Component,
    PageComponent,
  ]
})
export class LazymoduleModule { }
