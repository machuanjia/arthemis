/*
 * @Author: D.Y
 * @Date: 2021-04-14 10:22:57
 * @LastEditTime: 2021-04-15 16:44:20
 * @LastEditors: D.Y
 * @FilePath: /arthemis/src/task/task.controller.ts
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

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  async createTask(@Req() req: Request, @Body() dto: Task): Promise<Task> {
    return this.taskService.createTask({
      ...dto,
      tomato: 0,
    });
  }

  @Get(':_id')
  async getTaskDetail(
    @Req() req: Request,
    @Param('_id') _id: string,
  ): Promise<Task> {
    return this.taskService.getTaskDetail(_id);
  }

  @Post(':_id/sort')
  async sortTask(
    @Req() req: Request,
    @Param('_id') _id: string,
    @Body()
    info: { fromId: string; toId: string; oldIndex: number; newIndex: number },
  ): Promise<boolean> {
    return this.taskService.sortTask(_id, info);
  }

  @Put(':_id')
  async updateTask(
    @Req() req: Request,
    @Param('_id') _id: string,
    @Body() dto: Task,
  ): Promise<Task> {
    return this.taskService.updateTask(_id, dto);
  }

  @Delete(':_id')
  async deleteTask(
    @Req() req: Request,
    @Param('_id') _id: string,
  ): Promise<boolean> {
    return this.taskService.deleteTask(_id);
  }

  @Get()
  async getTasks(
    @Req() req: Request,
    @Query('start') start: number,
    @Query('end') end: number,
    @Query('important') important: number,
    @Query('urgent') urgent: number,
    @Query('state') state: number,
  ): Promise<Task[]> {
    return this.taskService.getTasks(start, end, important, urgent, state);
  }
}
