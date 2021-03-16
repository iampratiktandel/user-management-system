import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { User } from 'src/app/core/models/user.model';

@Injectable()
export class UserFormPresenterService {

  public userData: Subject<User> = new Subject<User>()
  public userData$: Observable<User>

  public userEditData: Subject<User> = new Subject<User>()
  public userEditData$: Observable<User>

  canEdit = new BehaviorSubject(false); // for switching add and edit button

  constructor() { 
    this.userData$ = this.userData.asObservable();
    this.userEditData$ = this.userEditData.asObservable();
  }

  public bindUserForm(): FormGroup {
    return new FormGroup({
      name: new FormControl('', [ Validators.required, Validators.pattern(/^[a-zA-Z ]*$/) ]),
      email: new FormControl('', [ Validators.required, Validators.pattern(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/) ]),
      mobile: new FormControl('', [ Validators.required, Validators.pattern(/^[6-9]\d{9}$/ ) ]),
      city: new FormControl('', [ Validators.required, Validators.pattern(/^[a-zA-Z ]*$/) ]),
      gender: new FormControl('Male'),
      department: new FormControl('Developer'),
      hireDate: new FormControl(''),
      permanent: new FormControl(false)
    });
  }

  public userFormDetails(userForm: FormGroup) {
    if(userForm.valid) {
      // alert('User Added');
      this.userData.next(userForm.value);
    }
  }

  public userEditFormDetails(userForm: FormGroup) {
    if(userForm.valid) {
      this.userEditData.next(userForm.value);
    }
  }
}
