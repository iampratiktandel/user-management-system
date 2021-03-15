import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
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

  constructor(
    private _userListPresenterService: UserListPresenterService,
    private _fb: FormBuilder
    ) {
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

  // addressForm = this._fb.group({
  //   deliveryAddress: this._fb.array([
  //     this._fb.group({
  //       address: [null]
  //     })
  //   ])
  // });

  // get deliveryAddress() {
  //   return this.addressForm.get('deliveryAddress') as FormArray;
  // }

  // onSubmit() {
  //   console.log(this.addressForm.value);
  // }

  // addAddress() {
  //   this.deliveryAddress.push(
  //     this._fb.group({
  //       address: [null],
  //     })
  //   );
  // }

  // deleteAddress(index: number) {
  //   this.deliveryAddress.removeAt(index);
  // }
}
