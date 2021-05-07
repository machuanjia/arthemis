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
exports.GraphController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const graph_entity_1 = require("../dao/graph.entity");
const graph_service_1 = require("./graph.service");
let GraphController = class GraphController {
    constructor(graphService) {
        this.graphService = graphService;
    }
    async createGraph(req, dto) {
        return this.graphService.createGraph(dto);
    }
    async getGraphDetail(req, _id) {
        return this.graphService.getGraphDetail(_id);
    }
    async updateGraph(req, _id, dao) {
        return this.graphService.updateGraph(_id, dao);
    }
    async deleteGraph(req, _id) {
        return this.graphService.deleteGraph(_id);
    }
    async getGraphs(req, keyword, pi, ps) {
        return this.graphService.getGraphs(keyword, pi, ps);
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Req()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, graph_entity_1.Graph]),
    __metadata("design:returntype", Promise)
], GraphController.prototype, "createGraph", null);
__decorate([
    common_1.Get(':_id'),
    __param(0, common_1.Req()), __param(1, common_1.Param('_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], GraphController.prototype, "getGraphDetail", null);
__decorate([
    common_1.Put(':_id'),
    __param(0, common_1.Req()),
    __param(1, common_1.Param('_id')),
    __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, graph_entity_1.Graph]),
    __metadata("design:returntype", Promise)
], GraphController.prototype, "updateGraph", null);
__decorate([
    common_1.Delete(':_id'),
    __param(0, common_1.Req()), __param(1, common_1.Param('_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], GraphController.prototype, "deleteGraph", null);
__decorate([
    common_1.Get(),
    swagger_1.ApiQuery({
        name: 'keyword',
        type: String,
        required: false,
        description: '关键字',
    }),
    swagger_1.ApiQuery({
        name: 'pi',
        type: String,
        required: false,
        description: '第几页',
    }),
    swagger_1.ApiQuery({
        name: 'ps',
        type: String,
        required: false,
        description: '每页多少条',
    }),
    __param(0, common_1.Req()),
    __param(1, common_1.Query('keyword')),
    __param(2, common_1.Query('pi')),
    __param(3, common_1.Query('ps')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, Number, Number]),
    __metadata("design:returntype", Promise)
], GraphController.prototype, "getGraphs", null);
GraphController = __decorate([
    common_1.Controller('graphs'),
    swagger_1.ApiTags('Graph'),
    __metadata("design:paramtypes", [graph_service_1.GraphService])
], GraphController);
exports.GraphController = GraphController;
//# sourceMappingURL=graph.controller.js.map