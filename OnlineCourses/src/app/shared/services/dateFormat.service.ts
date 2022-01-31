import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DateFormatService {

  private dateSource = new BehaviorSubject('');

  get currentDate() {
    return this.dateSource.asObservable();
  }

  public changeDate(date: string) {
    this.dateSource.next(date)
  }
}
