import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/core/models/user.model';
import { UserListPresenterService } from '../user-list-presenter/user-list-presenter.service';

@Component({
  selector: 'app-user-list-presentation',
  templateUrl: './user-list-presentation.component.html',
  styleUrls: ['./user-list-presentation.component.css'],
  viewProviders: [UserListPresenterService]
})
export class UserListPresentationComponent implements OnInit {

  private _userList: User[] = [];

  public searchName: string = '';
  public searchDepartment: string = '';
  public searchCity: string = '';

  sortingName!: string;
  isDesc!: boolean;

  /* getter and setter for list of users */
  @Input() public set userList(usersData: User[] | null) {
    if(usersData) {
      this._userList = usersData;
    }
  }

  public get userList(): User[] | null {
    return this._userList;
  }

  /* emit id of user to be deleted*/
  @Output() deleteId: EventEmitter<number> = new EventEmitter<number>();

  constructor(private _userListPresenterService: UserListPresenterService) {
    this.userList = []
  }

  ngOnInit(): void {
    this._userListPresenterService.userId$.subscribe((userId) => {
      this.deleteId.emit(userId);
    })
  }

  public userDeleteId(id: number){
    this._userListPresenterService.sendUserDeleteId(id);
  }
}
