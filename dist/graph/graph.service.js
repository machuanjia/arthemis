"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GraphService = void 0;
const common_1 = require("@nestjs/common");
const nestjs_typegoose_1 = require("nestjs-typegoose");
const constant_1 = require("../constant");
const graph_schema_1 = require("../db/schema/graph.schema");
let GraphService = class GraphService {
    constructor(graphModel) {
        this.graphModel = graphModel;
    }
    async createGraph(dao) {
        return await this.graphModel.create(dao);
    }
    async getGraphDetail(_id) {
        return await this.graphModel.findById(_id);
    }
    async updateGraph(_id, dao) {
        await this.graphModel.findByIdAndUpdate(_id, dao);
        return await this.graphModel.findById(_id);
    }
    async deleteGraph(_id) {
        await this.graphModel.findByIdAndDelete(_id);
        return true;
    }
    async getGraphs(keyword, pi, ps) {
        const findOptions = {};
        let regexp = '';
        const pageIndex = parseInt(pi || 0);
        const pageSize = parseInt(ps || constant_1.PAGINATION.SIZE);
        if (keyword) {
            regexp = new RegExp(keyword, 'i');
            findOptions.$and = [{ graphname: { $regex: regexp } }];
        }
        const total = await this.graphModel
            .find(findOptions)
            .skip(pageIndex * pageSize)
            .limit(pageSize)
            .count();
        const graphs = await this.graphModel
            .find(findOptions)
            .skip(pageIndex * pageSize)
            .limit(pageSize)
            .sort({ _id: -1 });
        return {
            page: pageIndex,
            total: total,
            data: graphs,
        };
    }
};
GraphService = __decorate([
    common_1.Injectable(),
    __param(0, nestjs_typegoose_1.InjectModel(graph_schema_1.GraphSchema)),
    __metadata("design:paramtypes", [Object])
], GraphService);
exports.GraphService = GraphService;
//# sourceMappingURL=graph.service.js.map