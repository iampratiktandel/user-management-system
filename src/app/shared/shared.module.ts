import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './directives/highlight.directive';
import { FilterByNamePipe } from './pipes/filter-by-name/filter-by-name.pipe';
import { FilterByDepartmentPipe } from './pipes/filter-by-department/filter-by-department.pipe';
import { FilterByCityPipe } from './pipes/filter-by-city/filter-by-city.pipe';
import { PaginationComponent } from './components/pagination/pagination.component';

@NgModule({
  declarations: [HighlightDirective, FilterByNamePipe, FilterByDepartmentPipe, FilterByCityPipe, PaginationComponent],
  imports: [
    CommonModule
  ],
  exports: [
    HighlightDirective,
    FilterByNamePipe,
    FilterByDepartmentPipe,
    FilterByCityPipe,
    PaginationComponent
  ]
})
export class SharedModule { }
