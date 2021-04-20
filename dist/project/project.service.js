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
exports.ProjectService = void 0;
const common_1 = require("@nestjs/common");
const nestjs_typegoose_1 = require("nestjs-typegoose");
const project_schema_1 = require("../db/schema/project.schema");
let ProjectService = class ProjectService {
    constructor(projectModel) {
        this.projectModel = projectModel;
        this.subPosition = Math.pow(2, 10);
    }
    async createProject(dao) {
        return await this.projectModel.create(dao);
    }
    async updateProject(_id, dao) {
        await this.projectModel.findByIdAndUpdate(_id, dao);
    }
};
ProjectService = __decorate([
    common_1.Injectable(),
    __param(0, nestjs_typegoose_1.InjectModel(project_schema_1.ProjectSchema)),
    __metadata("design:paramtypes", [Object])
], ProjectService);
exports.ProjectService = ProjectService;
//# sourceMappingURL=project.service.js.map