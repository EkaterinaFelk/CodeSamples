import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EditCourseComponent } from './editCourse/editCourse.component';
import { NotFoundComponent } from './notFound';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'courses/:id', component: EditCourseComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
