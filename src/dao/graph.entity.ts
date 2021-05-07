/*
 * @Author: D.Y
 * @Date: 2021-05-06 16:23:31
 * @LastEditTime: 2021-05-07 14:10:12
 * @LastEditors: D.Y
 * @FilePath: /arthemis/src/dao/graph.entity.ts
 * @Description:
 */
import { ApiProperty } from '@nestjs/swagger';

export class Graph {
  _id?: string;

  @ApiProperty()
  name?: string;

  @ApiProperty()
  content?: any;

  @ApiProperty()
  description?: string;
}
