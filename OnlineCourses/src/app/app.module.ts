import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core';
import { EditCourseModule } from './editCourse';
import { HomeModule } from './home';
import { NotFoundComponent } from './notFound';
import { SharedModule } from './shared';

import '../styles/styles.scss';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
    CoreModule,
    HomeModule,
    EditCourseModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
