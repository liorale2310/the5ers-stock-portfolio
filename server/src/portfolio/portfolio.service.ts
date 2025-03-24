import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Portfolio, PortfolioDocument } from './portfolio.schema';

@Injectable()
export class PortfolioService {
  constructor(
    @InjectModel(Portfolio.name) private portfolioModel: Model<PortfolioDocument>,
  ) {}

  async findAll(): Promise<Portfolio[]> {
    return this.portfolioModel.find().exec();
  }

  async add(symbol: string): Promise<Portfolio> {
    const existing = await this.portfolioModel.findOne({ symbol });
    if (!existing) {
      const created = new this.portfolioModel({ symbol });
      return created.save();
    }
    return existing;
  }

  async remove(symbol: string): Promise<any> {
    return this.portfolioModel.deleteOne({ symbol }).exec();
  }
}
