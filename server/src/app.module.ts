import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { PortfolioModule } from './portfolio/portfolio.module';
import { StockModule } from './stock/stock.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot('mongodb://localhost/stockdb'),
    PortfolioModule,
    StockModule,
  ],
})
export class AppModule {}
