/*
 * @Author: D.Y
 * @Date: 2021-04-14 11:48:18
 * @LastEditTime: 2021-04-24 10:48:36
 * @LastEditors: D.Y
 * @FilePath: /arthemis/src/db/schema/scrum.schema.ts
 * @Description:
 */
import { prop, modelOptions, Ref } from '@typegoose/typegoose';
import { IsNumber, IsString } from 'class-validator';
import { Schema } from 'mongoose';
import { ProjectSchema } from './project.schema';
import { UserSchema } from './user.schema';

@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class ScrumSchema {
  @IsString()
  @prop({ required: true })
  name: string;

  @IsString()
  @prop()
  description: string;

  @IsNumber()
  @prop()
  state: number;

  @prop()
  groups: { _id: any; name: string; type: number }[];

  @prop({ ref: 'UserSchema' })
  user: Ref<UserSchema>;

  @prop({ ref: 'ProjectSchema', required: true })
  project: Ref<ProjectSchema>;

  @IsNumber()
  @prop()
  score: number;

  @prop()
  scoreList: Schema.Types.Mixed;

  @prop({ ref: 'UserSchema' })
  participants: Ref<UserSchema>[];

  @prop({ ref: 'UserSchema' })
  excellent: Ref<UserSchema>;

  @prop()
  start: number;

  @prop()
  end: number;

  @prop()
  timeline: Schema.Types.Mixed;

  @prop()
  check: Schema.Types.Mixed;

  @prop()
  act: Schema.Types.Mixed;

  //   @prop()
  //   accountId: string;

  //   @prop()
  //   staffId: string;
}
