
import React from "react";
import { motion } from "framer-motion";
import { useStock } from "@/contexts/StockContext";
import { Button } from "@/components/ui/button";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useTheme } from "@/contexts/ThemeContext";

function Dashboard() {
  const { stocks, addToPortfolio } = useStock();
  const { theme } = useTheme();

  const marketData = [
    { time: "9:15", value: 17500 },
    { time: "10:30", value: 17550 },
    { time: "11:45", value: 17480 },
    { time: "13:00", value: 17600 },
    { time: "14:15", value: 17580 },
    { time: "15:30", value: 17620 },
  ];

  const lineStrokeColor = theme === 'dark' ? "#60a5fa" : "#2563eb"; /* blue-400 for dark, primary for light */
  const gridStrokeColor = theme === 'dark' ? "hsl(var(--border))" : "#e5e7eb"; /* gray-200 for light */
  const axisTickColor = theme === 'dark' ? "hsl(var(--muted-foreground))" : "#6b7280"; /* gray-500 for light */


  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 text-foreground">Market Overview</h1>
      
      <div className="stats-container">
        <div className="stat-card">
          <h3 className="text-sm text-muted-foreground">Nifty 50</h3>
          <p className="text-xl font-semibold text-foreground">17,620.00</p>
          <span className="text-sm profit">+0.45%</span>
        </div>
        <div className="stat-card">
          <h3 className="text-sm text-muted-foreground">Sensex</h3>
          <p className="text-xl font-semibold text-foreground">59,840.00</p>
          <span className="text-sm profit">+0.32%</span>
        </div>
        <div className="stat-card">
          <h3 className="text-sm text-muted-foreground">Bank Nifty</h3>
          <p className="text-xl font-semibold text-foreground">41,520.00</p>
          <span className="text-sm loss">-0.18%</span>
        </div>
        <div className="stat-card">
          <h3 className="text-sm text-muted-foreground">India VIX</h3>
          <p className="text-xl font-semibold text-foreground">14.25</p>
          <span className="text-sm loss">-2.15%</span>
        </div>
      </div>

      <div className="chart-container mb-8">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={marketData}>
            <CartesianGrid strokeDasharray="3 3" stroke={gridStrokeColor}/>
            <XAxis dataKey="time" tick={{ fill: axisTickColor }} />
            <YAxis tick={{ fill: axisTickColor }}/>
            <Tooltip 
              contentStyle={{ 
                backgroundColor: theme === 'dark' ? 'hsl(var(--popover))' : 'white',
                borderColor: theme === 'dark' ? 'hsl(var(--border))' : '#ccc' 
              }}
              labelStyle={{ color: theme === 'dark' ? 'hsl(var(--popover-foreground))' : 'black' }}
              itemStyle={{ color: theme === 'dark' ? 'hsl(var(--popover-foreground))' : 'black' }}
            />
            <Line type="monotone" dataKey="value" stroke={lineStrokeColor} strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <h2 className="text-xl font-semibold mb-4 text-foreground">Top Stocks</h2>
      <div className="stock-grid">
        {stocks.map((stock) => (
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
                variant="outline"
                size="sm"
                onClick={() => addToPortfolio(stock)}
              >
                Add
              </Button>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-lg text-foreground">₹{stock.price.toFixed(2)}</span>
              <span className={stock.change > 0 ? "profit" : "loss"}>
                {stock.change > 0 ? "+" : ""}{stock.change.toFixed(2)}%
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
