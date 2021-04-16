/*
 * @Author: D.Y
 * @Date: 2021-04-14 10:21:45
 * @LastEditTime: 2021-04-14 10:30:29
 * @LastEditors: D.Y
 * @FilePath: /arthemis/src/task/task.module.ts
 * @Description:
 */
import { Module } from '@nestjs/common';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';

@Module({
  controllers: [TaskController],
  providers: [TaskService],
})
export class TaskModule {}
