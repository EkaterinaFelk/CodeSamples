import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesService } from './services/course.service';
import { AuthorsService } from './services/author.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    CoursesService,
    AuthorsService
  ]
})

export class CoreModule { }
