import { Document } from 'mongoose';
export type PortfolioDocument = Portfolio & Document;
export declare class Portfolio {
    symbol: string;
    addedAt: Date;
}
export declare const PortfolioSchema: any;
