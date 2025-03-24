"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PortfolioModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const portfolio_schema_1 = require("./portfolio.schema");
const portfolio_service_1 = require("./portfolio.service");
const portfolio_controller_1 = require("./portfolio.controller");
let PortfolioModule = class PortfolioModule {
};
exports.PortfolioModule = PortfolioModule;
exports.PortfolioModule = PortfolioModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: portfolio_schema_1.Portfolio.name, schema: portfolio_schema_1.PortfolioSchema }])],
        providers: [portfolio_service_1.PortfolioService],
        controllers: [portfolio_controller_1.PortfolioController],
    })
], PortfolioModule);
//# sourceMappingURL=portfolio.module.js.map