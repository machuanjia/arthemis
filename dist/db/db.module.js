"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbModule = void 0;
const common_1 = require("@nestjs/common");
const nestjs_typegoose_1 = require("nestjs-typegoose");
const graph_schema_1 = require("./schema/graph.schema");
const project_schema_1 = require("./schema/project.schema");
const scrum_schema_1 = require("./schema/scrum.schema");
const task_schema_1 = require("./schema/task.schema");
const tomato_summary_schema_1 = require("./schema/tomato.summary.schema");
const user_schema_1 = require("./schema/user.schema");
const models = nestjs_typegoose_1.TypegooseModule.forFeature([
    task_schema_1.TaskSchema,
    tomato_summary_schema_1.TomatoSummarySchema,
    user_schema_1.UserSchema,
    project_schema_1.ProjectSchema,
    scrum_schema_1.ScrumSchema,
    graph_schema_1.GraphSchema,
]);
let DbModule = class DbModule {
};
DbModule = __decorate([
    common_1.Global(),
    common_1.Module({
        imports: [
            nestjs_typegoose_1.TypegooseModule.forRootAsync({
                useFactory() {
                    return {
                        uri: 'mongodb://127.0.0.1:27017/arthemis',
                        useNewUrlParser: true,
                        useUnifiedTopology: true,
                        useCreateIndex: true,
                        useFindAndModify: false,
                    };
                },
            }),
            models,
        ],
        exports: [models],
    })
], DbModule);
exports.DbModule = DbModule;
//# sourceMappingURL=db.module.js.map