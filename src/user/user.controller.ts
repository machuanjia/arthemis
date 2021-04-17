/*
 * @Author: D.Y
 * @Date: 2021-04-16 19:18:46
 * @LastEditTime: 2021-04-17 09:23:42
 * @LastEditors: D.Y
 * @FilePath: /arthemis/src/user/user.controller.ts
 * @Description:
 */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
} from '@nestjs/common';
import { Request } from 'express';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Req() req: Request, @Body() dto: User) {
    return this.userService.createUser(dto);
  }

  @Get(':_id')
  async getUserDetail(@Req() req: Request, @Param('_id') _id: string) {
    return this.userService.getUserDetail(_id);
  }

  @Put(':_id')
  async updateUser(
    @Req() req: Request,
    @Param('_id') _id: string,
    @Body() dao: User,
  ) {
    return this.userService.updateUser(_id, dao);
  }

  @Delete(':_id')
  async deleteUser(@Req() req: Request, @Param('_id') _id: string) {
    return this.userService.deleteUser(_id);
  }

  @Get()
  async getUsers(@Req() req: Request) {
    return this.userService.getUsers();
  }
}
