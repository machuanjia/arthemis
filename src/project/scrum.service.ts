/*
 * @Author: D.Y
 * @Date: 2021-04-20 16:15:57
 * @LastEditTime: 2021-04-21 09:15:04
 * @LastEditors: D.Y
 * @FilePath: /arthemis/src/project/scrum.service.ts
 * @Description:
 */
import { Injectable } from '@nestjs/common';
import { mongoose, ReturnModelType } from '@typegoose/typegoose';
import { InjectModel } from 'nestjs-typegoose';
import { ScrumSchema } from 'src/db/schema/scrum.schema';
import { Scrum } from './scrum.entity';

@Injectable()
export class ScrumService {
  constructor(
    @InjectModel(ScrumSchema)
    private readonly scrumModel: ReturnModelType<typeof ScrumSchema>,
  ) {}

  async createScrum(dao: Scrum) {
    dao.groups = [
      {
        _id: mongoose.Types.ObjectId(),
        name: '需求',
        type: 0,
      },
      {
        _id: mongoose.Types.ObjectId(),
        name: '规划',
        type: 1,
      },
      {
        _id: mongoose.Types.ObjectId(),
        name: '设计',
        type: 2,
      },
      {
        _id: mongoose.Types.ObjectId(),
        name: '研发',
        type: 3,
      },
      {
        _id: mongoose.Types.ObjectId(),
        name: '测试',
        type: 4,
      },
      {
        _id: mongoose.Types.ObjectId(),
        name: '总结',
        type: 5,
      },
      {
        _id: mongoose.Types.ObjectId(),
        name: '改进',
        type: 6,
      },
    ];
    return this.scrumModel.create(dao);
  }

  async getScrumsByProjectId(projectId: string) {
    return await this.scrumModel.find({
      project: projectId,
    });
  }

  async getScrumDetail(_id: string) {
    return await this.scrumModel.findById(_id);
  }

  async updateScrum(_id: string, dao: Scrum) {
    await this.scrumModel.findByIdAndUpdate(_id, dao);
    return await this.scrumModel.findById(_id);
  }

  async deleteScrum(_id: string) {
    return await this.scrumModel.findByIdAndDelete(_id);
  }
}
