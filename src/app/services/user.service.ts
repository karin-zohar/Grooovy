import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  getLoggedInUser(): User {
    return {
      name: "Guest",
      moves: []
    }
  }
}
