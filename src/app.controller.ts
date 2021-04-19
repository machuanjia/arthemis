/*
 * @Author: D.Y
 * @Date: 2021-04-14 10:00:46
 * @LastEditTime: 2021-04-19 17:30:58
 * @LastEditors: D.Y
 * @FilePath: /arthemis/src/app.controller.ts
 * @Description:
 */
import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { join } from 'path';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Res() res: Response) {
    console.log('======================');
    res.sendFile(join(__dirname, '../public/', 'index.html'));
  }
}
