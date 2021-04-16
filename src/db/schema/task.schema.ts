/*
 * @Author: D.Y
 * @Date: 2021-04-14 11:48:18
 * @LastEditTime: 2021-04-15 10:49:39
 * @LastEditors: D.Y
 * @FilePath: /arthemis/src/db/schema/task.schema.ts
 * @Description:
 */
import { prop, modelOptions } from '@typegoose/typegoose';
import { IsNumber, IsString } from 'class-validator';

@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class TaskSchema {
  @IsString()
  @prop({ required: true })
  name: string;

  @IsNumber()
  @prop()
  state: number;

  @IsNumber()
  @prop()
  important: number;

  @IsNumber()
  @prop()
  urgent: number;

  @IsNumber()
  @prop()
  tomato: number;

  @IsNumber()
  @prop({ required: true })
  position: number;

  @IsString()
  @prop({ required: true })
  group: string;

  //   @prop()
  //   accountId: string;

  //   @prop()
  //   staffId: string;
}
