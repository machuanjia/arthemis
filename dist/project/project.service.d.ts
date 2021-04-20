import { ReturnModelType } from '@typegoose/typegoose';
import { ProjectSchema } from 'src/db/schema/project.schema';
import { Project } from './project.entity';
export declare class ProjectService {
    private readonly projectModel;
    private subPosition;
    constructor(projectModel: ReturnModelType<typeof ProjectSchema>);
    createProject(dao: Project): Promise<import("@typegoose/typegoose").DocumentType<ProjectSchema>>;
    updateProject(_id: string, dao: Project): Promise<void>;
}
