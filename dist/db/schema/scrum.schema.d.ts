import { Ref } from '@typegoose/typegoose';
import { ProjectSchema } from './project.schema';
import { UserSchema } from './user.schema';
export declare class ScrumSchema {
    name: string;
    description: string;
    state: number;
    groups: {
        _id: any;
        name: string;
        type: number;
    }[];
    user: Ref<UserSchema>;
    project: Ref<ProjectSchema>;
}
