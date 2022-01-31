
import { regexDateInProcess } from '../core/constants';

export const stringUtils = {
    removeLastLetter : (inputValue: string): string => {
    let properValue = inputValue;

    if (!regexDateInProcess.test(inputValue)) {
      properValue = properValue.slice(0, -1);
    }

    return properValue;
  }
}
