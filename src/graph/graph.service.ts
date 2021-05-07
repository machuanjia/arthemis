/*
 * @Author: D.Y
 * @Date: 2021-05-06 16:23:31
 * @LastEditTime: 2021-05-06 16:32:34
 * @LastEditors: D.Y
 * @FilePath: /arthemis/src/graph/graph.service.ts
 * @Description:
 */
import { Injectable } from '@nestjs/common';
import { ReturnModelType } from '@typegoose/typegoose';
import { InjectModel } from 'nestjs-typegoose';
import { PAGINATION } from '../constant';
import { GraphSchema } from '../db/schema/graph.schema';
import { Graph } from '../dao/graph.entity';

@Injectable()
export class GraphService {
  constructor(
    @InjectModel(GraphSchema)
    private readonly graphModel: ReturnModelType<typeof GraphSchema>,
  ) {}

  async createGraph(dao: Graph): Promise<Graph> {
    return await this.graphModel.create(dao);
  }

  async getGraphDetail(_id: string) {
    return await this.graphModel.findById(_id);
  }

  async updateGraph(_id: string, dao: Graph) {
    await this.graphModel.findByIdAndUpdate(_id, dao);
    return await this.graphModel.findById(_id);
  }

  async deleteGraph(_id: string) {
    await this.graphModel.findByIdAndDelete(_id);
    return true;
  }

  async getGraphs(keyword, pi, ps) {
    const findOptions = {};
    let regexp = '';
    const pageIndex = parseInt(pi || 0);
    const pageSize = parseInt(ps || PAGINATION.SIZE);

    if (keyword) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      regexp = new RegExp(keyword, 'i');
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      findOptions.$and = [{ graphname: { $regex: regexp } }];
    }

    const total = await this.graphModel
      .find(findOptions)
      .skip(pageIndex * pageSize)
      .limit(pageSize)
      .count();

    const graphs = await this.graphModel
      .find(findOptions)
      .skip(pageIndex * pageSize)
      .limit(pageSize)
      .sort({ _id: -1 });
    return {
      page: pageIndex,
      total: total,
      data: graphs,
    };
  }
}
