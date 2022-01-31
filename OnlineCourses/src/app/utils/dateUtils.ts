import * as moment from 'moment';

export const dateUtils = {
  convertDateToString: (date: Date, format: string): string => {
    return moment(date).format(format);
  },
  convertStringToDate: (dateString: string, format: string): Date => {
    return moment(dateString, format).toDate();
  }
}
