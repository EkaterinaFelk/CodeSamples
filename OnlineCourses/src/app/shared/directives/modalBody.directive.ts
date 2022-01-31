import {
  Directive,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[modalBody]',
})
export class ModalBodyDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
