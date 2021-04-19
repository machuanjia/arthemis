/*
 * @Author: D.Y
 * @Date: 2021-04-14 11:48:18
 * @LastEditTime: 2021-04-19 13:53:16
 * @LastEditors: D.Y
 * @FilePath: /arthemis/src/db/schema/tomato.summary.schema.ts
 * @Description:
 */
import { prop, modelOptions } from '@typegoose/typegoose';
import { IsNumber, IsString } from 'class-validator';

@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class TomatoSummarySchema {
  @IsString()
  @prop({ required: true })
  content: string;

  @prop({ required: true })
  dateNumber: number;
}
