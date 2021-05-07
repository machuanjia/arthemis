import { ReturnModelType } from '@typegoose/typegoose';
import { GraphSchema } from '../db/schema/graph.schema';
import { Graph } from '../dao/graph.entity';
export declare class GraphService {
    private readonly graphModel;
    constructor(graphModel: ReturnModelType<typeof GraphSchema>);
    createGraph(dao: Graph): Promise<Graph>;
    getGraphDetail(_id: string): Promise<import("@typegoose/typegoose").DocumentType<GraphSchema>>;
    updateGraph(_id: string, dao: Graph): Promise<import("@typegoose/typegoose").DocumentType<GraphSchema>>;
    deleteGraph(_id: string): Promise<boolean>;
    getGraphs(keyword: any, pi: any, ps: any): Promise<{
        page: number;
        total: number;
        data: import("@typegoose/typegoose").DocumentType<GraphSchema>[];
    }>;
}
