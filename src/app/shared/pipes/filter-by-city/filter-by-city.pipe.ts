import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByCity'
})
export class FilterByCityPipe implements PipeTransform {

  transform(value: any, searchTerm: string): any {
    if(value.length === 0) {
      return value;
    }
    return value.filter((search: any) => {
      return search.city.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
    })
  }

}
