# 📊 Stock Viewer

A fullstack stock portfolio management web app built with React (Ant Design, MobX) and NestJS + MongoDB.

Users can:
- 🔍 Search for stocks across all exchanges
- ➕ Add selected stocks to their personal portfolio
- ❌ Remove stocks
- 📈 View live stock quotes and daily performance
- 🗂️ See details including name, price, exchange, and more

---

## 🛠 Tech Stack

### Frontend
- React
- MobX (state management)
- Ant Design (UI components)
- Axios

### Backend
- NestJS (Node.js framework)
- MongoDB (via Mongoose)
- REST API
- Financial Modeling Prep API

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/stock-viewer.git
cd stock-viewer
```

---

### 2. Setup the Backend

```bash
cd server
npm install
```

#### Create a `.env` file inside `server/`:

```env
FMP_API_KEY=your_fmp_api_key_here
```

#### Run MongoDB locally (with Docker):

```bash
docker run -d -p 27017:27017 --name mongo mongo
```

#### Start the NestJS server:

```bash
npm run start:dev
```

By default, the server will run at [http://localhost:4000](http://localhost:4000)

---

### 3. Setup the Frontend

```bash
cd client
npm install
```

#### Create a `.env` file inside `client/`:

```env
REACT_APP_API_URL=http://localhost:4000
REACT_APP_FMP_API_KEY=your_fmp_api_key_here
```

#### Start the React app:

```bash
npm start
```

This will open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 Folder Structure

```
client/
  ├── src/
  │   ├── components/        # Reusable UI components (SearchBar, StockList, Header)
  │   ├── pages/             # Main screens (PortfolioPage, StockDetailPage)
  │   ├── services/          # API service layer
  │   └── App.js
server/
  ├── src/
  │   ├── portfolio/         # Portfolio controller, service, schema
  │   ├── stock/             # Stock quote fetch logic
  │   └── main.ts
```

---

## 🧪 Features

- ✅ Live symbol search across **all exchanges**
- ✅ Add/remove stocks to your portfolio (stored in MongoDB)
- ✅ View real-time stock data including name, price, exchange, and % change
- ✅ Clean UI with Ant Design
- ✅ Error handling, feedback messages
- ✅ Responsive design and clean structure
- ✅ Modular and maintainable code (service layer, reusable components)

---

## 📈 API Reference

Using [Financial Modeling Prep API](https://site.financialmodelingprep.com/developer/docs/)  
Create a free account to get your API key.  
This app uses:
- `/search` for stock symbol autocomplete
- `/quote/{symbol}` to fetch stock details

---

## 🙌 Credits

Developed as a home assignment for The5ers.  
Built by Liora L.

