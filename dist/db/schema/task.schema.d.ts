import { Ref } from '@typegoose/typegoose';
import { UserSchema } from './user.schema';
export declare class TaskSchema {
    name: string;
    state: number;
    important: number;
    urgent: number;
    tomato: number;
    position: number;
    group: string;
    user: Ref<UserSchema>;
}
