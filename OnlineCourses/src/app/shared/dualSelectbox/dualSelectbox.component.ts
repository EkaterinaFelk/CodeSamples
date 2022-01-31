
import {
  Component,
  OnInit,
  Input,
  forwardRef
} from '@angular/core';

import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR
} from '@angular/forms';
import { IOption } from 'src/app/core/interfaces/IOption';

@Component({
  selector: 'app-dual-selectbox',
  templateUrl: 'dualSelectbox.component.html',
  styleUrls: ['./dualSelectbox.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DualSelectboxComponent),
      multi: true
    }
  ]
})

export class DualSelectboxComponent implements OnInit, ControlValueAccessor {
  constructor(
  ) {
  }

  @Input()
  public allData: IOption[] = [];

  @Input()
  public selectedData: IOption[] = [];

  @Input()
  public idProperty: string;

  @Input()
  public labelProperty: string;

  public availableData: IOption[];
  public selectedAvailableData: IOption[];
  public selectedSelectedData: IOption[];

  public ngOnInit() {
    this.availableData = this.allData;

    this.selectedData.forEach(item => {
      this.availableData = this.availableData.filter(option => item[this.idProperty] !== option[this.idProperty]);
    })
  }

  public writeValue(options: IOption[]) {
    this.selectedData = [...options];
  }

  public registerOnChange(fn: any) {
  }

  public registerOnTouched(fn: any) {
  }

  public add() {
    if (!this.selectedAvailableData) {
      return;
    }

    this.selectedAvailableData.forEach(data => {
      this.selectedData.push(data);
      this.availableData = this.removeFromData(this.availableData, data);
    });

    this.writeValue(this.selectedData);
  }

  public remove() {
    if (!this.selectedSelectedData) {
      return;
    }

    this.selectedSelectedData.forEach(data => {
      this.availableData.push(data);
      this.selectedData = this.removeFromData(this.selectedData, data);
    });

    this.writeValue(this.selectedData);
  }

  private removeFromData(targetArray: IOption[], inputData: IOption): IOption[] {
    return targetArray.filter(element => element[this.idProperty] !== inputData[this.idProperty]);
  }
}
