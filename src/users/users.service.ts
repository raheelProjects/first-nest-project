import { Injectable } from '@nestjs/common';
import { User } from './interface/user.interface';

@Injectable()
export class UsersService {
  private readonly users: User[] = [];

  addUser(user: User) {
    this.users.push(user);
  }

  getAllUsers(): User[] {
    return this.users;
  }

  getOneUser(id: number | String): User {
    return this.users[parseInt(id.toString())];
  }
}
