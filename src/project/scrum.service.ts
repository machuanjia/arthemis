/*
 * @Author: D.Y
 * @Date: 2021-04-20 16:15:57
 * @LastEditTime: 2021-04-24 11:15:22
 * @LastEditors: D.Y
 * @FilePath: /arthemis/src/project/scrum.service.ts
 * @Description:
 */
import { Injectable } from '@nestjs/common';
import { mongoose, ReturnModelType } from '@typegoose/typegoose';
import { InjectModel } from 'nestjs-typegoose';
import { ScrumSchema } from 'src/db/schema/scrum.schema';
import { Scrum } from './scrum.entity';
import { map, find, concat } from 'lodash';

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
    if (dao.scoreList) {
      const scrum = await this.scrumModel.findById(_id);
      if (scrum && scrum.scoreList) {
        const scoreList = [];
        map(dao.scoreList, (ds) => {
          const es = find(scrum.scoreList, { _id: ds._id });
          if (es) {
            es.score = ds.score;
          } else {
            scoreList.push(ds);
          }
        });
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        dao.scoreList = [...scoreList, ...scrum.scoreList];
      }
    }
    await this.scrumModel.findByIdAndUpdate(_id, dao);
    return await this.scrumModel.findById(_id);
  }

  async deleteScrum(_id: string) {
    return await this.scrumModel.findByIdAndDelete(_id);
  }
}
