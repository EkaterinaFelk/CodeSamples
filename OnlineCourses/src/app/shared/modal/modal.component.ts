import {
  Component,
  Input,
} from '@angular/core';
import { ModalData } from './models/modal';

@Component({
  selector: 'app-modal',
  templateUrl: 'modal.component.html',
  styleUrls: ['./modal.component.scss']
})

export class ModalComponent {
  @Input()
  public data: ModalData;

  @Input()
  public close: () => void;;

  public submit() {
    this.data.action();
    this.close();
  }

  public onClose() {
    this.close();
  }
}
