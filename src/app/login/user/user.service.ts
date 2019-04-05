import { Injectable } from '@angular/core';

import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  public getUser(): User[] {
    return [
      {
        id: 1,
        firstname: '1name',
        lastname: 'lastname1'
      },
      {
        id: 2,
        firstname: '2name',
        lastname: 'lastname2'
      },
      {
        id: 3,
        firstname: '3name',
        lastname: 'lastname3'
      }
    ];
  }
}


