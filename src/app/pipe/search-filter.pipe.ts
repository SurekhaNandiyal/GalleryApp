import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter',
  pure: false
})
export class SearchFilterPipe implements PipeTransform {

  transform(value: any[], filterString: string, propName: string):any {
    if((value && value.length === 0) || filterString === '') return value;

    return value.filter(val => val[propName] === filterString);
  }
}
