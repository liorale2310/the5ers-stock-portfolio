import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PortfolioDocument = Portfolio & Document;

@Schema()
export class Portfolio {
  @Prop({ required: true })
  symbol!: string;

  @Prop({ default: Date.now })
  addedAt!: Date;
}

export const PortfolioSchema = SchemaFactory.createForClass(Portfolio);
