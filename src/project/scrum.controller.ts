/*
 * @Author: D.Y
 * @Date: 2021-04-20 16:15:45
 * @LastEditTime: 2021-04-29 15:46:53
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
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { Scrum } from './scrum.entity';
import { ScrumService } from './scrum.service';

@Controller('scrums')
@ApiTags('Scrum')
export class ScrumController {
  constructor(private readonly scrumService: ScrumService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  async createScrum(@Req() req: Request, @Body() dao: Scrum) {
    return await this.scrumService.createScrum(dao);
  }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  async getScrumsByProjectId(@Query('projectId') projectId: string) {
    return await this.scrumService.getScrumsByProjectId(projectId);
  }

  @Put(':_id')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  async updateScrum(@Param() _id: string, @Body() dao: Scrum) {
    return await this.scrumService.updateScrum(_id, dao);
  }

  @Delete(':_id')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  async deleteScrum(@Param() _id: string) {
    return this.scrumService.deleteScrum(_id);
  }
}
