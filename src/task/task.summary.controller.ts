/*
 * @Author: D.Y
 * @Date: 2021-04-14 10:22:57
 * @LastEditTime: 2021-04-19 14:10:06
 * @LastEditors: D.Y
 * @FilePath: /arthemis/src/task/task.summary.controller.ts
 * @Description:
 */
import {
  Controller,
  Get,
  Post,
  Req,
  Body,
  Param,
  Put,
  Delete,
  Query,
} from '@nestjs/common';
import { Task } from './task.entity';
import { TaskService } from './task.service';
import { Request } from 'express';

@Controller('task-summary')
export class TaskSummaryController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  async tomatoSummaryTask(
    @Req() req: Request,
    @Body()
    summary: {
      content: string;
      dateNumber: number;
    },
  ): Promise<boolean> {
    return await this.taskService.updateTaskSummary(summary);
  }

  @Get()
  async getTomatoSummary(@Query('dateNumber') dateNumber: string) {
    return await this.taskService.getTaskSummary(Number(dateNumber));
  }
}
