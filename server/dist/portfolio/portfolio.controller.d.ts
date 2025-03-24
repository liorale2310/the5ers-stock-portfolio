import { PortfolioService } from './portfolio.service';
export declare class PortfolioController {
    private readonly portfolioService;
    constructor(portfolioService: PortfolioService);
    getAll(): Promise<import("./portfolio.schema").Portfolio[]>;
    add(symbol: string): Promise<import("./portfolio.schema").Portfolio>;
    remove(symbol: string): Promise<any>;
}
