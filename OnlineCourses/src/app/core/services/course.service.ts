import { Injectable } from '@angular/core';

import { Course } from '../models/course';
import { COURSES } from '../mockCourses';
import { Observable, of } from 'rxjs';

@Injectable()
export class CoursesService {
  private courses: Course[];

  constructor() {
    this.courses = COURSES;
  }

  public getAllCourses(): Observable<Course[]> {
    return of(this.courses);
  }

  public getCourse(id: number): Observable<Course> {
    const course = this.courses.find(course => course.id === id);

    return of(course || ({} as Course));
  }

  public removeCourse(inputCourse: Course): void {
    this.courses = this.courses.filter(course => course.id !== inputCourse.id);
  }

  public addNewCourse(inputCourse: Course): void {
    inputCourse.id = this.courses.length + 1;
    const newCourse = new Course(inputCourse);

    this.courses.push(newCourse);
  }

  public editCourse(inputCourse: Course): void {
    const newCourse = new Course(inputCourse);

    this.courses = this.courses.map(course => (course.id === inputCourse.id) ? newCourse : course);
  }
}
