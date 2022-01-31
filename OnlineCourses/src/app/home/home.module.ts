import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'

import { HomeComponent } from './home.component';
import { SharedModule } from '../shared';

import { CourseItem } from './courseItem/courseItem.component';
import { CourseList } from './courseList/courseList.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  declarations: [
    HomeComponent,
    CourseItem,
    CourseList
  ]
})

export class HomeModule { }
