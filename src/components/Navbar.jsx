
import React from "react";
import { Link } from "react-router-dom";
import { LineChart, LayoutDashboard, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";

function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="bg-card shadow-sm text-card-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-semibold text-primary">
              Zerodha Tracker
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/">
              <Button variant="ghost" className="flex items-center gap-2 text-card-foreground hover:bg-accent hover:text-accent-foreground">
                <LayoutDashboard className="h-5 w-5" />
                Dashboard
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button variant="ghost" className="flex items-center gap-2 text-card-foreground hover:bg-accent hover:text-accent-foreground">
                <LineChart className="h-5 w-5" />
                Portfolio
              </Button>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="text-card-foreground hover:bg-accent hover:text-accent-foreground"
            >
              {theme === "light" ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
