import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users: any = [];

  findAll() {
    return this.users;
  }

  create(user: any) {
    this.users.push(user);
    return user;
  }

  update(id: number, data: any) {
  const user = this.users[id];

  if (!user) {
    return { message: 'User not found' };
  }

  this.users[id] = {
    ...user,
    ...data,
  };

  return this.users[id];
}

  delete(id: number) {
    this.users.splice(id, 1);
    return { message: 'Deleted' };
  }
}