
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/Navbar";
import Dashboard from "@/pages/Dashboard";
import Portfolio from "@/pages/Portfolio";
import { StockProvider } from "@/contexts/StockContext";
import { useTheme } from "@/contexts/ThemeContext";

function App() {
  const { theme } = useTheme();
  return (
    <Router>
      <StockProvider>
        <div className={`min-h-screen ${theme === 'dark' ? 'dark bg-background' : 'bg-gray-50'}`}>
          <Navbar />
          <main className="container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/portfolio" element={<Portfolio />} />
            </Routes>
          </main>
          <Toaster />
        </div>
      </StockProvider>
    </Router>
  );
}

export default App;
