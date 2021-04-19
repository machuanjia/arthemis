/*
 * @Author: D.Y
 * @Date: 2021-04-14 10:21:45
 * @LastEditTime: 2021-04-19 11:31:00
 * @LastEditors: D.Y
 * @FilePath: /arthemis/src/task/task.module.ts
 * @Description:
 */
import { Module } from '@nestjs/common';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';
import { TaskSummaryController } from './task.summary.controller';

@Module({
  controllers: [TaskController, TaskSummaryController],
  providers: [TaskService],
})
export class TaskModule {}
