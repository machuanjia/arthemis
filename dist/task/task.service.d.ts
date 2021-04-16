import { ReturnModelType } from '@typegoose/typegoose';
import { TaskSchema } from '../db/schema/task.schema';
import { Task } from './task.entity';
export declare class TaskService {
    private readonly taskModel;
    private subPosition;
    constructor(taskModel: ReturnModelType<typeof TaskSchema>);
    createTask(dao: Task): Promise<Task>;
    getTaskDetail(_id: string): Promise<Task>;
    sortTask(_id: string, info: {
        fromId: any;
        toId: any;
        oldIndex: any;
        newIndex: any;
    }): Promise<boolean>;
    updateTask(_id: string, dto: Task): Promise<Task>;
    deleteTask(_id: string): Promise<boolean>;
    getTasks(start: number, end: number, important: number, urgent: number, state: number): Promise<Task[]>;
}
