import {
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { Course } from '../../core/models/course';
import { CoursesService } from '../../core/services/course.service';
import { FilterService } from '../../shared/services/filter.service';

@Component({
  selector: 'app-course-list',
  templateUrl: 'courseList.component.html'
})

export class CourseList implements OnDestroy, OnInit {
  public courses: Course[] = [];
  public searchString: string;
  private ngUnsubscribe: Subject<boolean> = new Subject();

  constructor(
    private coursesService: CoursesService,
    private filterService: FilterService
  ) { }

  public ngOnInit() {
    this.getCourses();

    this.filterService.currentSearchString
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(query => this.searchString = query);
  }

  public ngOnDestroy() {
    this.ngUnsubscribe.next(true);
    this.ngUnsubscribe.complete();
  }

  public getCourses() {
    this.coursesService.getAllCourses()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(courses => this.courses = courses);
  }

  public removeCourse(inputCourse: Course) {
    this.courses = this.courses.filter(course => course.id !== inputCourse.id);
    this.coursesService.removeCourse(inputCourse);
  }
}
