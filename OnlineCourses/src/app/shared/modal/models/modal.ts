import { Type } from '@angular/core';
import { ModalComponent } from '../modal.component';

export type ModalData = {
  title: string;
  body: string;
  action: () => void;
};

export class Modal {
  public component: Type<ModalComponent>;
  public data: ModalData;

  constructor(component: Type<ModalComponent>, data: ModalData) {
    this.component = component;
    this.data = data;
  }
}
