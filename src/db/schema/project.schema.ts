/*
 * @Author: D.Y
 * @Date: 2021-04-14 11:48:18
 * @LastEditTime: 2021-04-20 14:07:30
 * @LastEditors: D.Y
 * @FilePath: /arthemis/src/db/schema/project.schema.ts
 * @Description:
 */
import { prop, modelOptions, Ref } from '@typegoose/typegoose';
import { IsNumber, IsString } from 'class-validator';
import { UserSchema } from './user.schema';

@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class ProjectSchema {
  @IsString()
  @prop({ required: true })
  name: string;

  @IsString()
  @prop()
  description: string;

  @IsNumber()
  @prop()
  state: number;

  @IsNumber()
  @prop({ required: true })
  position: number;

  @prop({ ref: 'UserSchema' })
  user: Ref<UserSchema>;

  //   @prop()
  //   accountId: string;

  //   @prop()
  //   staffId: string;
}
