import { Request } from 'express';
import { Graph } from '../dao/graph.entity';
import { GraphService } from './graph.service';
export declare class GraphController {
    private readonly graphService;
    constructor(graphService: GraphService);
    createGraph(req: Request, dto: Graph): Promise<Graph>;
    getGraphDetail(req: Request, _id: string): Promise<import("@typegoose/typegoose").DocumentType<import("../db/schema/graph.schema").GraphSchema>>;
    updateGraph(req: Request, _id: string, dao: Graph): Promise<import("@typegoose/typegoose").DocumentType<import("../db/schema/graph.schema").GraphSchema>>;
    deleteGraph(req: Request, _id: string): Promise<boolean>;
    getGraphs(req: Request, keyword: string, pi: number, ps: number): Promise<{
        page: number;
        total: number;
        data: import("@typegoose/typegoose").DocumentType<import("../db/schema/graph.schema").GraphSchema>[];
    }>;
}
