import { Pipe, PipeTransform } from '@angular/core';
import { IUser } from './interfaces';

@Pipe({ name: 'searchFilter' })
export class FilterPipe implements PipeTransform {
  transform(items: IUser[], value: string): IUser[] {
    if (!items) {
      return [];
    }
    if (!value) {
      return items;
    }
    value = value.toLocaleLowerCase();

    return items.filter(element => {
      return element.name.toLocaleLowerCase().includes(value);
    });
  }
}
