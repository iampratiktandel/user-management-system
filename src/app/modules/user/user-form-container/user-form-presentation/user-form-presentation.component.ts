import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { User } from 'src/app/core/models/user.model';
import { UserFormPresenterService } from '../user-form-presenter/user-form-presenter.service';

@Component({
  selector: 'app-user-form-presentation',
  templateUrl: './user-form-presentation.component.html',
  styleUrls: ['./user-form-presentation.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  viewProviders: [UserFormPresenterService]
})
export class UserFormPresentationComponent implements OnInit, OnDestroy {

  private _user: User;
  subscription: Subscription = new Subscription;

  /* for switching add and edit button */
  public canEdit: boolean = false;

  /* getter and setter for user data */
  @Input() public set user(value: User) {
    if(value) {
      this._user = value;
      this.setUserDetails(value);
      this._userFormPresenterService.canEdit.next(true)
    }
  }

  public get user(): User {
    return this._user;
  }

  /* EventEmitter for add and edit data */
  @Output() userData: EventEmitter<User> = new EventEmitter<User>();
  @Output() userEditData: EventEmitter<User> = new EventEmitter<User>();

  public userForm: FormGroup = this._userFormPresenterService.bindUserForm();

  constructor(private _userFormPresenterService: UserFormPresenterService) {
    // this.userForm = this._userFormPresenterService.bindUserForm();
    this._user = new User();
  }

  ngOnInit(): void {
    var addSubscription$ = this._userFormPresenterService.userData$.subscribe(
      (userData: User) => {
        this.userData.emit(userData)
      }
    )

    var editSubscription$ = this._userFormPresenterService.userEditData$.subscribe(
      (userData: User) => {
        this.userEditData.emit(userData)
      }
    )

    this.subscription.add(addSubscription$)
    this.subscription.add(editSubscription$)

    this._userFormPresenterService.canEdit.subscribe(res => {
      this.canEdit = res;
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this._userFormPresenterService.canEdit.next(false);
  }

  /* get form controls for validation */
  get userFormControl(){
    return this.userForm.controls;
  }

  /* reset user form */
  public resetUserForm() {
    this.userForm.reset({
      'gender': 'Male',
      'department': 'Developer'
    });
  }

  public userFormSubmit() {
    this._userFormPresenterService.userFormDetails(this.userForm)
  }

  public editUserSubmit() {
    this._userFormPresenterService.userEditFormDetails(this.userForm)
  }

  public setUserDetails(user: User): void {
    this.userForm.reset(user);
  }

}
