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
Object.defineProperty(exports, "__esModule", { value: true });
exports.GraphSchema = void 0;
const typegoose_1 = require("@typegoose/typegoose");
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const mongoose_1 = require("mongoose");
let GraphSchema = class GraphSchema {
};
__decorate([
    class_validator_1.IsString(),
    typegoose_1.prop({ required: true }),
    swagger_1.ApiProperty({ description: '名称', example: 'name1' }),
    __metadata("design:type", String)
], GraphSchema.prototype, "name", void 0);
__decorate([
    typegoose_1.prop(),
    swagger_1.ApiProperty({ description: '内容', example: '' }),
    __metadata("design:type", mongoose_1.Schema.Types.Mixed)
], GraphSchema.prototype, "content", void 0);
__decorate([
    class_validator_1.IsString(),
    typegoose_1.prop(),
    swagger_1.ApiProperty({ description: '描述', example: '' }),
    __metadata("design:type", String)
], GraphSchema.prototype, "description", void 0);
GraphSchema = __decorate([
    typegoose_1.modelOptions({
        schemaOptions: {
            timestamps: true,
        },
    })
], GraphSchema);
exports.GraphSchema = GraphSchema;
//# sourceMappingURL=graph.schema.js.map