/*
 * @Author: D.Y
 * @Date: 2021-04-14 10:33:09
 * @LastEditTime: 2021-04-19 19:11:37
 * @LastEditors: D.Y
 * @FilePath: /arthemis/src/task/task.entity.ts
 * @Description:
 */
export interface Task {
  _id?: string;

  name?: string;

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
}
