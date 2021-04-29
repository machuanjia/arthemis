/*
 * @Author: D.Y
 * @Date: 2021-04-14 10:22:57
 * @LastEditTime: 2021-04-29 15:47:27
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
  UseGuards,
} from '@nestjs/common';
import { Task } from '../dao/task.entity';
import { TaskService } from './task.service';
import { Request } from 'express';
import { CurrentUser } from 'src/auth/current-user.decorator';
import { AuthGuard } from '@nestjs/passport';
import { TASK_TYPES } from 'src/constant';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@Controller('tasks')
@ApiTags('任务')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  async createTask(
    @Req() req: Request,
    @Body() dto: Task,
    @CurrentUser() user,
  ): Promise<Task> {
    dto.user = user._id;
    dto.type = TASK_TYPES.tomato;
    return this.taskService.createTask({
      ...dto,
      tomato: 0,
    });
  }

  @Get(':_id')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  async getTaskDetail(
    @Req() req: Request,
    @Param('_id') _id: string,
  ): Promise<Task> {
    return this.taskService.getTaskDetail(_id);
  }
  @Post(':_id/sort')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  async sortTask(
    @Req() req: Request,
    @Param('_id') _id: string,
    @Body()
    info: { fromId: string; toId: string; oldIndex: number; newIndex: number },
  ): Promise<boolean> {
    return this.taskService.sortTask(_id, info);
  }

  @Put(':_id')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  async updateTask(
    @Req() req: Request,
    @Param('_id') _id: string,
    @Body() dto: Task,
  ): Promise<Task> {
    return this.taskService.updateTask(_id, dto);
  }

  @Delete(':_id')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  async deleteTask(
    @Req() req: Request,
    @Param('_id') _id: string,
  ): Promise<boolean> {
    return this.taskService.deleteTask(_id);
  }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  async getTasks(
    @Req() req: Request,
    @Query('start') start: number,
    @Query('end') end: number,
    @Query('important') important: number,
    @Query('urgent') urgent: number,
    @Query('state') state: number,
    @Query('scrum') scrum: string,
  ): Promise<Task[]> {
    return this.taskService.getTasks(
      start,
      end,
      important,
      urgent,
      state,
      scrum,
    );
  }
}
