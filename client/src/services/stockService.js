import axios from 'axios';

const API_KEY = process.env.REACT_APP_FMP_API_KEY;
const API_BASE = process.env.REACT_APP_API_URL;

export const fetchPortfolio = async () => {
  return axios.get(`${API_BASE}/portfolio`);
};

export const addStockToPortfolio = async (symbol) => {
  return axios.post(`${API_BASE}/portfolio`, { symbol });
};

export const removeStockFromPortfolio = async (symbol) => {
  return axios.delete(`${API_BASE}/portfolio/${symbol}`);
};

export const searchStocks = async (query) => {
  return axios.get(
      `https://financialmodelingprep.com/api/v3/search?query=${query}&limit=10&apikey=${API_KEY}`
  );
};

export const getStockDetails = async (symbol) => {
  return axios.get(`${API_BASE}/stock/${symbol}`);
};
