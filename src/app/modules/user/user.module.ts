import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserListContainerComponent } from './user-list-container/user-list-container.component';
import { UserFormContainerComponent } from './user-form-container/user-form-container.component';
import { UserFormPresentationComponent } from './user-form-container/user-form-presentation/user-form-presentation.component';
import { UserListPresentationComponent } from './user-list-container/user-list-presentation/user-list-presentation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserDetailsComponent } from './user-list-container/user-list-presentation/user-details/user-details.component';
import { OverlayModule } from '@angular/cdk/overlay';


@NgModule({
  declarations: [
    UserComponent, 
    UserListContainerComponent, 
    UserFormContainerComponent, 
    UserFormPresentationComponent, 
    UserListPresentationComponent, 
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    OverlayModule,
    SharedModule
  ],
  entryComponents: [
    UserDetailsComponent
  ]
})
export class UserModule { }
