import { NgModule } from '@angular/core';
import { ReactiveFormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';

import { EditCourseComponent } from './editCourse.component';
import { SharedModule } from '../shared';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [
    EditCourseComponent,
  ],
})

export class EditCourseModule { }
