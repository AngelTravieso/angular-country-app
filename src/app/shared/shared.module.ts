import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AboutPageComponent } from './components/about-page/about-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';


@NgModule({
  declarations: [
    AboutPageComponent,
    HomePageComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    AboutPageComponent,
    HomePageComponent,
    SidebarComponent,
  ]
})
export class SharedModule { }
