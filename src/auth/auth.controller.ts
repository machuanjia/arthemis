/*
 * @Author: D.Y
 * @Date: 2021-04-17 11:22:56
 * @LastEditTime: 2021-04-17 11:53:05
 * @LastEditors: D.Y
 * @FilePath: /arthemis/src/auth/auth.controller.ts
 * @Description:
 */
import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { JwtService } from '@nestjs/jwt';
import { CurrentUser } from './current-user.decorator';
import { InjectModel } from 'nestjs-typegoose';
import { UserSchema } from '../db/schema/user.schema';
import { ReturnModelType } from '@typegoose/typegoose';

@Controller('auth')
export class AuthController {
  constructor(
    private jwtService: JwtService,
    @InjectModel(UserSchema)
    private userModel: ReturnModelType<typeof UserSchema>,
  ) {}

  @Post('login')
  @UseGuards(AuthGuard('local'))
  async login(@Body() dto, @CurrentUser() user) {
    return {
      token: this.jwtService.sign(String(user._id)),
    };
  }

  @Get('info')
  @UseGuards(AuthGuard('jwt'))
  async user(@CurrentUser() user) {
    return user;
  }
}
