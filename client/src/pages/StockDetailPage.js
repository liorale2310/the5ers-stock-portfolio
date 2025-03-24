import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import PageHeader from '../components/PageHeader';
import StockDetailInfo from '../components/StockDetailInfo';
import { getStockDetails } from '../services/stockService';

const StockDetailPage = () => {
  const { symbol } = useParams();
  const navigate = useNavigate();
  const [stock, setStock] = useState(null);

  const fetchStock = async () => {
    try {
      const res = await getStockDetails(symbol);
      setStock(res.data);
    } catch (error) {
      console.error('Error fetching stock details:', error);
    }
  };

  useEffect(() => {
    fetchStock();
  }, [symbol]);

  return (
    <>
      <PageHeader />
      <Button
        type="link"
        onClick={() => navigate('/')}
        style={{ margin: '20px 0 0 40px', fontSize: '16px' }}
      >
        ← Back to Portfolio
      </Button>

      {stock ? (
        <StockDetailInfo stock={stock} symbol={symbol} />
      ) : (
        <p style={{ padding: 40 }}>Loading stock data...</p>
      )}
    </>
  );
};

export default StockDetailPage;
