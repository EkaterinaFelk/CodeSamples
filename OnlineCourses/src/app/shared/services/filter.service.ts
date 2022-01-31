import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class FilterService {

  private searchStringSource = new BehaviorSubject('');

  public get currentSearchString() {
    return this.searchStringSource.asObservable();
  }

  public changeSearchString(searchString: string) {
    this.searchStringSource.next(searchString)
  }
}
