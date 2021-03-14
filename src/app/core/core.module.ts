import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderContainerComponent } from './component/header-container/header-container.component';
import { HeaderPresentationComponent } from './component/header-container/header-presentation/header-presentation.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [HeaderContainerComponent, HeaderPresentationComponent, PageNotFoundComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    HttpClientModule
  ],
  exports: [
    HeaderContainerComponent
  ]
})
export class CoreModule { }
