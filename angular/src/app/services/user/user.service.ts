import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../../models/User/user.model";
import {of} from "rxjs";

// @ts-ignore
import data from '../../../assets/json/users.json';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(protected http: HttpClient) {
  }

  getUsers(): Observable<User[]> {
    return of(data.users)
  }
  getUserById(userId: User): Observable<User | null> {
    const user = data.users.find(user => user === userId);
    console.log(user)
    return user ? of(user) : of(null);
  }

}