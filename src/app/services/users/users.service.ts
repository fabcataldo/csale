import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { users } from 'src/dummy_data/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  getUsers(): Observable<Array<User>> {
    return new Observable((subscriber)=>{
      subscriber.next(users);
    });
  }
}
