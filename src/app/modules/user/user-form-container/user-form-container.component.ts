import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/models/user.model';
import { UserService } from 'src/app/core/services/http/user.service';

@Component({
  selector: 'app-user-form-container',
  templateUrl: './user-form-container.component.html',
  styleUrls: ['./user-form-container.component.css']
})
export class UserFormContainerComponent implements OnInit {

  public user$!: Observable<User>;
  public userId: string|null;

  constructor(
    private _userService: UserService, 
    private _router: Router,
    private _route: ActivatedRoute
    ) {
      const id = _route.snapshot.paramMap.get('id');
      this.userId = id;
      if(id) {
        this.getUserDetails(+id);
      }
    }

  ngOnInit(): void {
    // this.canEdit = this._userService.canEdit.next(true)
  }

  public getUserDetails(id: number) {
    this.user$ = this._userService.getUserById(id);
  }

  public postUserDetails(userData: User) {
    this._userService.addUser(userData).subscribe(
      userData => console.log('POST Request is successful ', userData),
      error => console.log('Error', error),
    );
    this._router.navigate(['user']);
  }

  public putUserDetails(userData: User) {
    this._userService.editUser(userData, this.userId).subscribe(
      userData => console.log('Edit Request is successful ', userData),
      error => console.log('Error', error),
    );
    this._router.navigate(['user']);
  }
}
