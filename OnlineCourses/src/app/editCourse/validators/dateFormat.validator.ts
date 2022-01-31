import { AbstractControl } from '@angular/forms';

import { regexDateFormat } from '../../core/constants';

export function dateFormatValidator(control: AbstractControl) {
  const isValid = regexDateFormat.test(control.value);

  return !isValid ? {invalidFormat: { value: control.value }} : null
}
