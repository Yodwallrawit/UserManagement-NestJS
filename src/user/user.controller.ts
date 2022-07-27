import { Controller, Get } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Get()
  getAllUsers(): any[] {
    return [
      { id: '1', name: 'ICEPAJINGKO', age: 18, position: 'backend' },
      { id: '1', name: 'Lucky13', age: 25, position: 'frontend' },
      { id: '1', name: 'init_0', age: 30, position: 'devops' },
    ];
  }
}
