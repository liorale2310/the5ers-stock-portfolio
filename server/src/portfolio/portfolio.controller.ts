import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { PortfolioService } from './portfolio.service';

@Controller('portfolio')
export class PortfolioController {
  constructor(private readonly portfolioService: PortfolioService) {}

  @Get()
  async getAll() {
    return this.portfolioService.findAll();
  }

  @Post()
  async add(@Body('symbol') symbol: string) {
    return this.portfolioService.add(symbol);
  }

  @Delete(':symbol')
  async remove(@Param('symbol') symbol: string) {
    return this.portfolioService.remove(symbol);
  }
}
