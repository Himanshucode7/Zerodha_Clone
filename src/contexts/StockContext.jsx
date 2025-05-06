
import React, { createContext, useContext, useState, useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";

const StockContext = createContext();

const mockStocks = [
  { symbol: "RELIANCE", name: "Reliance Industries", price: 2500.45, change: 15.30 },
  { symbol: "TCS", name: "Tata Consultancy Services", price: 3456.70, change: -12.50 },
  { symbol: "HDFC", name: "HDFC Bank", price: 1678.90, change: 8.45 },
  { symbol: "INFY", name: "Infosys", price: 1890.30, change: -5.60 },
  { symbol: "WIPRO", name: "Wipro Limited", price: 456.75, change: 3.20 },
];

export function StockProvider({ children }) {
  const [stocks, setStocks] = useState(mockStocks);
  const [portfolio, setPortfolio] = useState([]);
  const { toast } = useToast();

  useEffect(() => {
    // Simulate real-time updates
    const interval = setInterval(() => {
      setStocks(prevStocks =>
        prevStocks.map(stock => ({
          ...stock,
          price: stock.price + (Math.random() - 0.5) * 10,
          change: (Math.random() - 0.5) * 20
        }))
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const addToPortfolio = (stock) => {
    setPortfolio(prev => [...prev, { ...stock, quantity: 1 }]);
    toast({
      title: "Stock added to portfolio",
      description: `${stock.symbol} has been added to your portfolio.`,
    });
  };

  const removeFromPortfolio = (symbol) => {
    setPortfolio(prev => prev.filter(item => item.symbol !== symbol));
    toast({
      title: "Stock removed",
      description: `${symbol} has been removed from your portfolio.`,
      variant: "destructive",
    });
  };

  return (
    <StockContext.Provider
      value={{
        stocks,
        portfolio,
        addToPortfolio,
        removeFromPortfolio
      }}
    >
      {children}
    </StockContext.Provider>
  );
}

export function useStock() {
  return useContext(StockContext);
}
