import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ToolbarComponent } from './toolbar/toolbar.component';
import { SearchFormComponent } from './searchForm/searchForm.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SelectboxComponent } from './selectbox/selectbox.component';
import { ModalComponent } from './modal/modal.component';
import { DualSelectboxComponent } from './dualSelectbox/dualSelectbox.component';
import { ModalGeneratorComponent } from './modalGenerator/modalGenerator.component';

import { ModalBodyDirective } from './directives/modalBody.directive';

import { DurationPipe } from './pipes/duration.pipe';
import { FilterPipe } from './pipes/filter.pipe';

import { NavigationtService } from './services/navigation.service';
import { FilterService } from './services/filter.service';
import { DateFormatService } from './services/dateFormat.service';
import { ModalService } from './modal/services/modal.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    ToolbarComponent,
    SearchFormComponent,
    HeaderComponent,
    FooterComponent,
    DurationPipe,
    FilterPipe,
    SelectboxComponent,
    ModalComponent,
    DualSelectboxComponent,
    ModalBodyDirective,
    ModalGeneratorComponent
  ],
  exports: [
    ToolbarComponent,
    SearchFormComponent,
    HeaderComponent,
    FooterComponent,
    DurationPipe,
    FilterPipe,
    SelectboxComponent,
    ModalComponent,
    DualSelectboxComponent,
    ModalBodyDirective,
    ModalGeneratorComponent
  ],
  entryComponents: [
    ModalComponent
  ],
  providers: [
    NavigationtService,
    FilterService,
    DateFormatService,
    ModalService
  ]
})

export class SharedModule { }
