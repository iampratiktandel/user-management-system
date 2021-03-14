import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByDepartment'
})
export class FilterByDepartmentPipe implements PipeTransform {

  transform(value: any, searchTerm: string): any {
    if(value.length === 0) {
      return value;
    }
    return value.filter((search: any) => {
      return search.department.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
    })
  }

}
