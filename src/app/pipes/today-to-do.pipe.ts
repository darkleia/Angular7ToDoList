import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'todayToDo'
})
export class TodayToDoPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.filter(i => i.dateCreated.toDateString() === new Date().toDateString());
  }
}
