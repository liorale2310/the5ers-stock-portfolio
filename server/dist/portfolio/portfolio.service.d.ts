import { Model } from 'mongoose';
import { Portfolio, PortfolioDocument } from './portfolio.schema';
export declare class PortfolioService {
    private portfolioModel;
    constructor(portfolioModel: Model<PortfolioDocument>);
    findAll(): Promise<Portfolio[]>;
    add(symbol: string): Promise<Portfolio>;
    remove(symbol: string): Promise<any>;
}
