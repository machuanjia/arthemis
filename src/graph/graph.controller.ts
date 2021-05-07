import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  Req,
} from '@nestjs/common';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { Graph } from '../dao/graph.entity';
import { GraphService } from './graph.service';

@Controller('graphs')
@ApiTags('Graph')
export class GraphController {
  constructor(private readonly graphService: GraphService) {}

  @Post()
  async createGraph(@Req() req: Request, @Body() dto: Graph) {
    return this.graphService.createGraph(dto);
  }

  @Get(':_id')
  async getGraphDetail(@Req() req: Request, @Param('_id') _id: string) {
    return this.graphService.getGraphDetail(_id);
  }

  @Put(':_id')
  async updateGraph(
    @Req() req: Request,
    @Param('_id') _id: string,
    @Body() dao: Graph,
  ) {
    return this.graphService.updateGraph(_id, dao);
  }

  @Delete(':_id')
  async deleteGraph(@Req() req: Request, @Param('_id') _id: string) {
    return this.graphService.deleteGraph(_id);
  }

  @Get()
  @ApiQuery({
    name: 'keyword',
    type: String,
    required: false,
    description: '关键字',
  })
  @ApiQuery({
    name: 'pi',
    type: String,
    required: false,
    description: '第几页',
  })
  @ApiQuery({
    name: 'ps',
    type: String,
    required: false,
    description: '每页多少条',
  })
  async getGraphs(
    @Req() req: Request,
    @Query('keyword') keyword: string,
    @Query('pi') pi: number,
    @Query('ps') ps: number,
  ) {
    return this.graphService.getGraphs(keyword, pi, ps);
  }
}
