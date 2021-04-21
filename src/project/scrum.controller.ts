/*
 * @Author: D.Y
 * @Date: 2021-04-20 16:15:45
 * @LastEditTime: 2021-04-20 19:22:48
 * @LastEditors: D.Y
 * @FilePath: /arthemis/src/project/scrum.controller.ts
 * @Description:
 */
import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  Query,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { Request } from 'express';
import { Scrum } from './scrum.entity';
import { ScrumService } from './scrum.service';

@Controller('scrums')
export class ScrumController {
  constructor(private readonly scrumService: ScrumService) {}

  @Post()
  async createScrum(@Req() req: Request, @Body() dao: Scrum) {
    return await this.scrumService.createScrum(dao);
  }

  @Get()
  async getScrumsByProjectId(@Query('projectId') projectId: string) {
    return await this.scrumService.getScrumsByProjectId(projectId);
  }

  @Put(':_id')
  async updateScrum(@Param() _id: string, @Body() dao: Scrum) {
    return await this.scrumService.updateScrum(_id, dao);
  }

  @Delete(':_id')
  async deleteScrum(@Param() _id: string) {
    return this.scrumService.deleteScrum(_id);
  }
}
