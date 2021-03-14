import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/models/user.model';
import { UserService } from 'src/app/core/services/http/user.service';

@Component({
  selector: 'app-user-list-container',
  templateUrl: './user-list-container.component.html',
  styleUrls: ['./user-list-container.component.css']
})
export class UserListContainerComponent implements OnInit {

  /* observable to store list of users fetched from server */
  public userList$: Observable<User[]>

  constructor(private _userService: UserService) {
    this.userList$ = this._userService.getUsers();
  }

  ngOnInit(): void {
  }

  public deleteUserDetails(userId: number){
    if (confirm('Are you sure?')) {
      this._userService.removeUser(userId).subscribe(
        userData => console.log('Delete Request is successful ', userData),
        error => console.log('Error', error)
      )
    }
  }

}
