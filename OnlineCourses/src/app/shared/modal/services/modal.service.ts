import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Modal } from '../models/modal';

@Injectable()
export class ModalService {

  private modalSettings = new Subject<Modal>();

  get currentSettings() {
    return this.modalSettings.asObservable();
  }

  public create(modal: Modal): void {
    this.modalSettings.next({
      component: modal.component,
      data: modal.data
    });
  }
}
