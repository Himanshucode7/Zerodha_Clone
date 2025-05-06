
import React from "react";
import { motion } from "framer-motion";
import { useStock } from "@/contexts/StockContext";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useTheme } from "@/contexts/ThemeContext";

function Portfolio() {
  const { portfolio, removeFromPortfolio } = useStock();
  const { theme } = useTheme();

  const portfolioValue = portfolio.reduce(
    (total, stock) => total + stock.price * stock.quantity,
    0
  );

  const portfolioData = [
    { date: "Mon", value: 100000 },
    { date: "Tue", value: 102000 },
    { date: "Wed", value: 101500 },
    { date: "Thu", value: 103000 },
    { date: "Fri", value: 104500 },
  ];
  
  const lineStrokeColor = theme === 'dark' ? "#60a5fa" : "#2563eb";
  const gridStrokeColor = theme === 'dark' ? "hsl(var(--border))" : "#e5e7eb";
  const axisTickColor = theme === 'dark' ? "hsl(var(--muted-foreground))" : "#6b7280";

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-foreground">Your Portfolio</h1>
        <div className="text-right">
          <p className="text-sm text-muted-foreground">Total Value</p>
          <p className="text-2xl font-bold text-foreground">₹{portfolioValue.toFixed(2)}</p>
        </div>
      </div>

      <div className="chart-container mb-8">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={portfolioData}>
            <CartesianGrid strokeDasharray="3 3" stroke={gridStrokeColor}/>
            <XAxis dataKey="date" tick={{ fill: axisTickColor }}/>
            <YAxis tick={{ fill: axisTickColor }}/>
            <Tooltip
              contentStyle={{ 
                backgroundColor: theme === 'dark' ? 'hsl(var(--popover))' : 'white',
                borderColor: theme === 'dark' ? 'hsl(var(--border))' : '#ccc' 
              }}
              labelStyle={{ color: theme === 'dark' ? 'hsl(var(--popover-foreground))' : 'black' }}
              itemStyle={{ color: theme === 'dark' ? 'hsl(var(--popover-foreground))' : 'black' }}
            />
            <Line type="monotone" dataKey="value" stroke={lineStrokeColor} strokeWidth={2} dot={false}/>
          </LineChart>
        </ResponsiveContainer>
      </div>

      {portfolio.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground">Your portfolio is empty. Add some stocks to get started!</p>
        </div>
      ) : (
        <div className="stock-grid">
          {portfolio.map((stock) => (
            <motion.div
              key={stock.symbol}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="stock-card"
            >
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-semibold text-foreground">{stock.symbol}</h3>
                  <p className="text-sm text-muted-foreground">{stock.name}</p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => removeFromPortfolio(stock.symbol)}
                  className="text-muted-foreground hover:text-destructive"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-lg text-foreground">₹{stock.price.toFixed(2)}</span>
                <span className={stock.change > 0 ? "profit" : "loss"}>
                  {stock.change > 0 ? "+" : ""}{stock.change.toFixed(2)}%
                </span>
              </div>
              <div className="mt-2 text-sm text-muted-foreground">
                Quantity: {stock.quantity}
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Portfolio;
