import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})

export class DurationPipe implements PipeTransform {
  public transform(value: number, args?: any): string {
    let result: string = '';

    const hours: number = Math.floor(value / 60);
    const minutes: number = value % 60;

    if(hours){
      result = `${hours} hour`;
    }
    if(minutes){
      result += ` ${minutes} min`;
    }
    return result;
  }
}
