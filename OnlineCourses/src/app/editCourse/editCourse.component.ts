import {
  Component,
  OnInit,
  OnDestroy,
  Input
} from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl
} from '@angular/forms';

import { takeUntil } from 'rxjs/operators';
import { Subject } from "rxjs";

import { CoursesService } from '../core/services/course.service';
import { AuthorsService } from '../core/services/author.service';
import { DateFormatService } from '../shared/services/dateFormat.service';
import { NavigationtService } from '../shared/services/navigation.service';

import { Course } from '../core/models/course';
import { Author } from '../core/models/author';

import { dateFormatValidator } from './validators/dateFormat.validator';

import { dateUtils, stringUtils } from '../utils';
import { defaultDateFormat } from '../core/constants';

@Component({
  selector: 'edit-course',
  templateUrl: 'editCourse.component.html',
  styleUrls: ['./editCourse.component.scss'],
})
export class EditCourseComponent implements OnInit, OnDestroy {
  @Input()
  public course: Course;
  public allAuthors: Author[] = [];
  public courseAuthors: Author[] = [];

  public selectedAvailableIds: string[] = [];
  public selectedCourseIds: string[] = [];

  public editForm: FormGroup;
  private param: string;
  private isNewCourse: boolean = false;
  private ngUnsubscribe: Subject<boolean> = new Subject();

  get date() {
    return this.editForm.get('date');
  }

  get title() {
    return this.editForm.get('title');
  }

  get duration() {
    return this.editForm.get('duration');
  }

  constructor(
    private route: ActivatedRoute,
    private coursesService: CoursesService,
    private authorsService: AuthorsService,
    private dateFormatService: DateFormatService,
    private navigationtService: NavigationtService
  ) {
  }

  public ngOnInit() {
    this.route.params.subscribe(params => {
      this.param = params['id'];
      this.isNewCourse = this.param === 'new';

      if (this.isNewCourse) {
        this.course = new Course();
      } else {
        this.initCourse();
      }
    });

    this.initAuthors();
    this.initForm();

    this.dateFormatService.currentDate
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(date => {
        this.editForm.patchValue({
          date: date
        });
      });
  }

  public ngOnDestroy() {
    this.ngUnsubscribe.next(true);
    this.ngUnsubscribe.complete();
  }

  private initForm() {
    this.editForm = new FormGroup(
      {
        id: new FormControl(this.course.id),
        title: new FormControl(this.course.title, Validators.required),
        description: new FormControl(this.course.description),
        date: new FormControl(this.course.date, [
          Validators.required,
          dateFormatValidator
        ]),
        duration: new FormControl(this.course.duration, [
          Validators.required,
          Validators.pattern("[0-9]+")
        ]),
        author: new FormControl(this.courseAuthors)
      },
      { updateOn: 'blur' }
    );

    const dateString = dateUtils.convertDateToString(this.course.date, defaultDateFormat);
    this.dateFormatService.changeDate(dateString);
  }

  public onChange(event: KeyboardEvent) {
    const inputValue = (event.target as HTMLInputElement).value;
    const properValue = stringUtils.removeLastLetter(inputValue);

    this.dateFormatService.changeDate(properValue);
  }

  public initCourse() {
    const id = parseInt(this.param, 10);

    this.coursesService.getCourse(id)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(course => this.course = course);
  }

  private initAuthors() {
    const authorIds = this.course.authorsId;

    this.authorsService.getAllAuthors()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(authors => this.allAuthors = authors);

    if (authorIds) {
      this.courseAuthors = this.getCourseAuthors(authorIds);
    }
  }

  public cancelEdit() {
    this.navigationtService.navigateTo('index');
  }

  public submit() {
    const submitForm = this.editForm.value;
    submitForm.authorsId = this.courseAuthors.map(author => +author.id);

    if (this.isNewCourse) {
      this.coursesService.addNewCourse(submitForm);
    } else {
      this.coursesService.editCourse(submitForm);
    }
    this.navigationtService.navigateTo('index');
  }

  public isShowErrors(control: AbstractControl | null): boolean {
    return control ? control.invalid && (control.dirty || control.touched): false;
  }

  private getCourseAuthors(authorIds: number[]): Author[] {
    return this.allAuthors.filter(author => authorIds.indexOf(author.id) > -1);
  }
}
