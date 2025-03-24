
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PortfolioPage from './pages/PortfolioPage';
import StockDetailPage from './pages/StockDetailPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PortfolioPage />} />
        <Route path="/stocks/:symbol" element={<StockDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
