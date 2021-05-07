/*
 * @Author: D.Y
 * @Date: 2021-05-06 16:23:31
 * @LastEditTime: 2021-05-07 14:09:53
 * @LastEditors: D.Y
 * @FilePath: /arthemis/src/db/schema/graph.schema.ts
 * @Description:
 */
import { prop, modelOptions } from '@typegoose/typegoose';
import { IsNumber, IsString } from 'class-validator';
import { hashSync } from 'bcryptjs';
import { ApiProperty } from '@nestjs/swagger';
import { Schema } from 'mongoose';

@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class GraphSchema {
  @IsString()
  @prop({ required: true })
  @ApiProperty({ description: '名称', example: 'name1' })
  name: string;

  @prop()
  @ApiProperty({ description: '内容', example: '' })
  content: Schema.Types.Mixed;

  @IsString()
  @prop()
  @ApiProperty({ description: '描述', example: '' })
  description: string;
}
