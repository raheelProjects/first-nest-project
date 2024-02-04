import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
  Req,
} from '@nestjs/common';
import { Request } from 'express';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get()
  async getUsers(@Req() request: Request) {
    const { id } = request.query;

    if (id) {
      try {
        return this.usersService.getOneUser(id.toString());
      } catch (error: unknown) {
        console.log(error);
        throw new HttpException(
          'id should be a number',
          HttpStatus.BAD_REQUEST,
        );
      }
    }
    return this.usersService.getAllUsers();
  }
  @Post()
  addUsers(@Req() request: Request): String {
    const { name, fatherName, age } = request.body;
    const data = { name, fatherName, age };
    this.usersService.addUser(data);
    return 'User added';
  }
}
