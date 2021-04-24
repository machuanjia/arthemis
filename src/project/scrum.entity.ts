import { Strategy } from 'passport-local';

/*
 * @Author: D.Y
 * @Date: 2021-04-20 14:12:49
 * @LastEditTime: 2021-04-24 10:49:42
 * @LastEditors: D.Y
 * @FilePath: /arthemis/src/project/scrum.entity.ts
 * @Description:
 */
export interface Scrum {
  _id?: string;

  name?: string;

  description?: string;

  state?: number;

  position?: number;

  groups?: any;

  created_at?: number;

  user?: any;

  project?: any;

  score?: number;

  scoreList?: any;

  participants?: any;

  excellent?: any;

  start?: number;

  end?: number;

  timeline?: any;

  check?: any;

  act?: any;
}
