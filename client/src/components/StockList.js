import React from 'react';
import { List, Button } from 'antd';
import './StockList.css';

const StockList = ({ stocks, onRemove, onView }) => {
  return (
    <div className="stock-list">
      <List
        bordered
        dataSource={stocks}
        renderItem={(item) => (
          <List.Item
            actions={[
              <Button onClick={() => onView(item.symbol)}>View</Button>,
              <Button onClick={() => onRemove(item.symbol)} danger>
                Remove
              </Button>,
            ]}
          >
            {item.symbol}
          </List.Item>
        )}
      />
    </div>
  );
};

export default StockList;
