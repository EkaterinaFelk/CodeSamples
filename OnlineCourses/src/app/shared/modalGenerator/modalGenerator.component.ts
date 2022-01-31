import {
  Component,
  OnInit,
  ViewChild,
  Type,
  ComponentRef
} from '@angular/core';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { ModalService } from '../modal/services/modal.service';

import { ModalBodyDirective } from '../directives/modalBody.directive';
import { ModalComponent } from '../modal/modal.component';
import { ModalData } from '../modal/models/modal';

@Component({
  selector: 'app-modal-generator',
  templateUrl: 'modalGenerator.component.html',
})

export class ModalGeneratorComponent implements OnInit {

  public component: Type<ModalComponent>;
  public data: ModalData;

  private ngUnsubscribe: Subject<boolean> = new Subject();

  @ViewChild(ModalBodyDirective)
  public modalBody: ModalBodyDirective;

  private currentComponent: ComponentRef<ModalComponent>;

  constructor(
    private modalService: ModalService,
  ) {
  }

  public ngOnInit() {
    this.modalService.currentSettings
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(settings => {
          this.component = settings.component;
          this.data = settings.data;

          this.loadComponent()
        }
      );
  }

  public ngOnDestroy() {
    this.ngUnsubscribe.next(true);
    this.ngUnsubscribe.complete();
  }

  public loadComponent() {
    let viewContainerRef = this.modalBody.viewContainerRef;
    viewContainerRef.clear();

    if(this.currentComponent){
      this.close();
    }

    let componentRef = viewContainerRef.createComponent<ModalComponent>(this.component);

    this.currentComponent = componentRef;

    this.currentComponent.instance.data = this.data;
    this.currentComponent.instance.close = () => this.close();
  }

  public close(){
    this.currentComponent.destroy();
  }
}
