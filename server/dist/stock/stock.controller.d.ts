import { StockService } from './stock.service';
export declare class StockController {
    private readonly stockService;
    constructor(stockService: StockService);
    getQuote(symbol: string): Promise<any>;
}
