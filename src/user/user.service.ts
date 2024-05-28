import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  execute() {
    return {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
    };
  }
}
