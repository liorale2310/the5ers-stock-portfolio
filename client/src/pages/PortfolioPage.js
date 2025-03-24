import React, { useEffect, useState } from 'react';
import { message, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import SearchBar from '../components/SearchBar';
import StockList from '../components/StockList';
import {
  fetchPortfolio,
  addStockToPortfolio,
  removeStockFromPortfolio,
  searchStocks
} from '../services/stockService';

const { Title } = Typography;

const PortfolioPage = () => {
  const [stocks, setStocks] = useState([]);
  const [options, setOptions] = useState([]);
  const [selectedSymbol, setSelectedSymbol] = useState(null);
  const [searchText, setSearchText] = useState('');
  const navigate = useNavigate();

  const loadPortfolio = async () => {
    try {
      const res = await fetchPortfolio();
      setStocks(res.data);
    } catch (err) {
      message.error('Failed to load portfolio.');
    }
  };

  const onSearch = async (value) => {
    setSearchText(value);
    if (!value) {
      setOptions([]);
      return;
    }

    try {
      const res = await searchStocks(value);
      const formatted = res.data.map((item) => ({
        value: item.symbol,
        label: `${item.symbol} - ${item.name}`,
      }));
      setOptions(formatted);
    } catch (error) {
      console.error('Error fetching autocomplete options:', error);
    }
  };

  const addStock = async () => {
    if (!selectedSymbol) return;
    try {
      await addStockToPortfolio(selectedSymbol);
      message.success(`${selectedSymbol} added to portfolio`);
      setSelectedSymbol(null);
      setSearchText('');
      setOptions([]);
      loadPortfolio();
    } catch (error) {
      console.error('Add stock error:', error.response || error);
      message.error(`Failed to add stock: ${error.response?.data?.message || 'Unknown error'}`);
    }
  };

  const removeStock = async (symbol) => {
    await removeStockFromPortfolio(symbol);
    loadPortfolio();
  };

  useEffect(() => {
    loadPortfolio();
  }, []);

  return (
    <>
      <PageHeader />
      <div style={{ padding: '40px 24px', maxWidth: 800 }}>
        <Title level={3}>Your Portfolio</Title>

        <SearchBar
          options={options}
          searchText={searchText}
          onSearch={onSearch}
          onChange={(val) => {
            setSearchText(val);
            setSelectedSymbol(null);
          }}
          onSelect={setSelectedSymbol}
          onAdd={addStock}
          selectedSymbol={selectedSymbol}
        />

        <StockList
          stocks={stocks}
          onRemove={removeStock}
          onView={(symbol) => navigate(`/stocks/${symbol}`)}
        />
      </div>
    </>
  );
};

export default PortfolioPage;
