import { Pipe, PipeTransform } from '@angular/core';
import { IFilterable } from 'src/app/core/interfaces/IFilterable';

@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {
  transform<T extends IFilterable>(searchArray: T[], searchText: string): T[] {
    if (!searchArray) return [];
    if (!searchText) return searchArray;

    searchText = searchText.toLowerCase();

    return searchArray.filter(item => {
      return item.title.toLowerCase().includes(searchText);
    });
  }
}
