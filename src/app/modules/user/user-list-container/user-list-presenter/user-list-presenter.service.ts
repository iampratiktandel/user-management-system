import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class UserListPresenterService {

  public userId: Subject<number> = new Subject<number>();
  public userId$: Observable<number>

  constructor() { 
    this.userId$ = this.userId.asObservable();
  }

  public sendUserDeleteId(id: number) {
    this.userId.next(id);
  }
}
