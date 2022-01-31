
import { Component } from '@angular/core';
import { NavigationtService } from '../services/navigation.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: 'toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  constructor(
    private navigationtService: NavigationtService
  ) { }

  navigateToCreationCourse() {
    this.navigationtService.navigateTo('courses');
  }
}
