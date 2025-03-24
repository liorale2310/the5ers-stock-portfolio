import { Controller, Get, Param } from '@nestjs/common';
import { StockService } from './stock.service';

@Controller('stock')
export class StockController {
  constructor(private readonly stockService: StockService) {}

  @Get(':symbol')
  async getQuote(@Param('symbol') symbol: string) {
    return this.stockService.getStockQuote(symbol);
  }
}
