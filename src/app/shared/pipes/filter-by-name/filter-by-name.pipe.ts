import { Pipe, PipeTransform } from '@angular/core';
import { User } from 'src/app/core/models/user.model';

@Pipe({
  name: 'filterByName'
})
export class FilterByNamePipe implements PipeTransform {

  transform(value: any, searchTerm: string): any {
    if(value.length === 0) {
      return value;
    }
    return value.filter((search: any) => {
      return search.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
    })
  }

}
