import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Address } from 'src/app/core/models/address.model';
import { User } from 'src/app/core/models/user.model';
import { UserListPresenterService } from '../user-list-presenter/user-list-presenter.service';

@Component({
  selector: 'app-user-list-presentation',
  templateUrl: './user-list-presentation.component.html',
  styleUrls: ['./user-list-presentation.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  viewProviders: [UserListPresenterService]
})
export class UserListPresentationComponent implements OnInit {

  private _userList: User[] = [];

  /* for filtering data */
  public searchName: string = '';
  public searchDepartment: string = '';
  public searchCity: string = '';

  /* for addressForm */
  addressForm: FormGroup;
  newAddress: string = '';
  addresses: Address[] = [];


  /* getter and setter for list of users */
  @Input() public set userList(usersData: User[] ) {
    if(usersData) {
      this._userList = usersData;
    }
  }

  public get userList(): User[] {
    return this._userList;
  }

  /* emit id of user to be deleted*/
  @Output() deleteId: EventEmitter<number> = new EventEmitter<number>();

  constructor(private _userListPresenterService: UserListPresenterService) {
    this.userList = [];
    this.addressForm = this._userListPresenterService.bindAddressForm();
  }

  ngOnInit(): void {
    this._userListPresenterService.userId$.subscribe((userId) => {
      this.deleteId.emit(userId);
    })
  }

  /* for delete */
  public userDeleteId(id: number){
    this._userListPresenterService.sendUserDeleteId(id);
  }

  /* for adding address */
  addAddress() {
    this.addresses.push(this.addressForm.value);
    this.addressForm.reset();
  }

  trackByUserName(index: number, user: any): string {
    return user.name;
  }

  /* for opening overlay */
  viewUserDetails(user: User) {
    this._userListPresenterService.openUserOverlay(user)
  }
}
