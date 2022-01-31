import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { IOption } from 'src/app/core/interfaces/IOption';

@Component({
  selector: 'multi-select',
  templateUrl: 'selectbox.component.html',
  styleUrls: ['./selectbox.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectboxComponent),
      multi: true
    }
  ]
})

export class SelectboxComponent implements ControlValueAccessor{
  private selectedValues: IOption[] = [];

  @Input()
  public options: IOption[] = [];

  @Input()
  public idProperty: string;

  @Input()
  public labelProperty: string;

  @Output()
  public selectedChange = new EventEmitter();

  @Input()
  get selected() {
    return this.selectedValues;
  }

  set selected(value: IOption[]) {
    this.selectedValues = value;
    this.selectedChange.emit(this.selectedValues);
  }

  public writeValue(value: IOption[]) {
    this.selected = value;
  }

  public registerOnChange(fn: (_: any) => void) {
  }

  public registerOnTouched(fn: any) {
  }

  public onSelect(e: Event) {
    const options = (e.target as HTMLSelectElement).options;
    const selectedValues = Array.from(options)
      .filter(option => option.selected)
      .map(option => ({
          [this.idProperty]: parseInt(option.value, 10),
          [this.labelProperty]: option.text
        })
      );

    this.writeValue(selectedValues);
  }
}
