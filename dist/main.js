"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const res_interceptor_1 = require("./core/res.interceptor");
const path_1 = require("path");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useStaticAssets(path_1.join(__dirname, '../public'));
    app.enableCors();
    app.setGlobalPrefix('api/arthemis');
    app.useGlobalInterceptors(app.get(res_interceptor_1.ResponseInterceptor));
    await app.listen(3600);
}
bootstrap();
//# sourceMappingURL=main.js.map