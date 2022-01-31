import { ICourse } from '../interfaces/ICourse';
import { dateUtils } from '../../utils';
import { defaultDateFormat } from '../constants';
import { IFilterable } from '../interfaces/IFilterable';

export class Course implements ICourse, IFilterable {
  public id: number;
  public title: string;
  public duration: number;
  public date: Date;
  public description: string;
  public authorsId: number[] = [];

  constructor(course?: ICourse){
    if (course){
      Object.assign(this, course);
      this.date = dateUtils.convertStringToDate(course.date.toString(), defaultDateFormat);
    }
  }
}
