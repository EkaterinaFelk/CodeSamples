
import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewChild
} from '@angular/core';
import { NavigationtService } from '../../shared/services/navigation.service';

import { ModalService } from '../../shared/modal/services/modal.service';

import { Course } from '../../core/models/course';
import { Modal } from '../../shared/modal/models/modal';
import { ModalComponent } from '../../shared/modal/modal.component';

@Component({
  selector: 'app-course-item',
  templateUrl: 'courseItem.component.html',
  styleUrls: ['./courseItem.component.scss']
})
export class CourseItem {

  @Input()
  public course: Course;

  @Output()
  public remove = new EventEmitter();

  constructor(
    private navigationtService: NavigationtService,
    private modalService: ModalService
  ) { }

  public onNavigateToEditingCourse(course: Course): void {
    this.navigationtService.navigateTo('courses', course.id);
  }

  public confirmRemove(course: Course): void {
    const modal = new Modal(
      ModalComponent,
      {
        title: 'Confirmation',
        body: `Do you really want to remove ${course.title}?`,
        action: () => this.remove.emit(course)
      }
    );

    this.modalService.create(modal);
  }
}
