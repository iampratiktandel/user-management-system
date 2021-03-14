import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserFormContainerComponent } from './user-form-container/user-form-container.component';
import { UserListContainerComponent } from './user-list-container/user-list-container.component';
import { UserListPresentationComponent } from './user-list-container/user-list-presentation/user-list-presentation.component';
import { UserComponent } from './user.component';

const routes: Routes = [
  { 
    path: '', 
    component: UserComponent,
    children: [
      {
        path: '',
        component: UserListContainerComponent
      },
      {
        path: 'add',
        component: UserFormContainerComponent
      },
      {
        path: 'edit/:id',
        component: UserFormContainerComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
