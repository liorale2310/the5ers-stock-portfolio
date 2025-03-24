import React from 'react';
import { Card, Descriptions, Typography } from 'antd';
import './StockDetailInfo.css';

const { Title } = Typography;

const StockDetailInfo = ({ stock, symbol }) => {
  return (
    <div className="stock-detail-container">
      <Title level={2}>Stock Details: {symbol}</Title>
      <Card bordered style={{ maxWidth: 600 }}>
        <Descriptions column={1}>
          <Descriptions.Item label="Symbol">{stock.symbol}</Descriptions.Item>
          <Descriptions.Item label="Name">{stock.name}</Descriptions.Item>
          <Descriptions.Item label="Exchange">{stock.exchange}</Descriptions.Item>
          <Descriptions.Item label="Last Quote">{stock.price}$</Descriptions.Item>
          <Descriptions.Item label="Today's Change">{stock.changesPercentage}%</Descriptions.Item>
        </Descriptions>
      </Card>
    </div>
  );
};

export default StockDetailInfo;
