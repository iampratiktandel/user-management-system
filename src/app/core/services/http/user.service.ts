import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url: string = 'http://localhost:3000/users';

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.url}`);
  }

  public getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.url}/${id}`);
  }

  public addUser(userData: User): Observable<User> {
    return this.http.post<User>(`${this.url}`, userData)
  }

  public editUser(userData: User, id: string|null): Observable<User> {
    return this.http.put<User>(`${this.url}/${id}`, userData)
  }

  public removeUser(id: number): Observable<User> {
    return this.http.delete<User>(`${this.url}/${id}`)
  }

}
