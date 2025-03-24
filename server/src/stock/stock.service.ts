import { Injectable } from '@nestjs/common';
import axios from 'axios';
import * as dotenv from 'dotenv';
dotenv.config();

@Injectable()
export class StockService {
  async getStockQuote(symbol: string): Promise<any> {
    const apiKey = process.env.FMP_API_KEY;
    const url = `https://financialmodelingprep.com/api/v3/quote/${symbol}?apikey=${apiKey}`;
    const response = await axios.get(url);
    return response.data[0];
  }
}
