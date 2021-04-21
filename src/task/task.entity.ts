/*
 * @Author: D.Y
 * @Date: 2021-04-14 10:33:09
 * @LastEditTime: 2021-04-21 10:36:30
 * @LastEditors: D.Y
 * @FilePath: /arthemis/src/task/task.entity.ts
 * @Description:
 */
export interface Task {
  _id?: string;

  name?: string;

  description?: string;

  type?: number;

  state?: number;

  important?: number;

  urgent?: number;

  tomato?: number;

  group?: string;

  position?: number;

  created_at?: number;

  accountId?: string;

  staffId?: string;

  user?: any;

  project?: any;

  scrum?: any;
}
