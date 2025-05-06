
import React from "react";
import { motion } from "framer-motion";
import { FileText, TrendingUp, AlertCircle } from "lucide-react";

function Research() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="news-card"
        >
          <div className="flex items-start space-x-4">
            <FileText className="h-6 w-6 text-primary" />
            <div>
              <h3 className="font-semibold mb-2">Latest Research Report</h3>
              <p className="text-sm text-muted-foreground">
                Q3 FY24 Market Analysis: Tech Sector Shows Promise
              </p>
              <p className="text-xs text-muted-foreground mt-2">2 hours ago</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="news-card"
        >
          <div className="flex items-start space-x-4">
            <TrendingUp className="h-6 w-6 text-success" />
            <div>
              <h3 className="font-semibold mb-2">Market Insight</h3>
              <p className="text-sm text-muted-foreground">
                Banking Sector: Growth Opportunities in 2024
              </p>
              <p className="text-xs text-muted-foreground mt-2">5 hours ago</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="news-card"
        >
          <div className="flex items-start space-x-4">
            <AlertCircle className="h-6 w-6 text-warning" />
            <div>
              <h3 className="font-semibold mb-2">Market Alert</h3>
              <p className="text-sm text-muted-foreground">
                Global Markets: Impact of Recent Policy Changes
              </p>
              <p className="text-xs text-muted-foreground mt-2">1 day ago</p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-card rounded-lg shadow-md p-6 border border-border"
        >
          <h2 className="text-xl font-bold mb-6">Latest Reports</h2>
          <div className="space-y-4">
            {[
              {
                title: "IT Sector Analysis",
                description: "Comprehensive analysis of IT sector performance and future outlook",
                date: "Feb 1, 2024"
              },
              {
                title: "Banking Sector Update",
                description: "Quarterly review of banking sector with key insights",
                date: "Jan 28, 2024"
              },
              {
                title: "Consumer Goods Report",
                description: "Market trends and consumer behavior analysis",
                date: "Jan 25, 2024"
              }
            ].map((report) => (
              <div
                key={report.title}
                className="p-4 bg-background rounded-lg hover:bg-accent/10 transition-colors cursor-pointer"
              >
                <h3 className="font-semibold">{report.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {report.description}
                </p>
                <p className="text-xs text-muted-foreground mt-2">{report.date}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-card rounded-lg shadow-md p-6 border border-border"
        >
          <h2 className="text-xl font-bold mb-6">Market News</h2>
          <div className="space-y-4">
            {[
              {
                title: "RBI Monetary Policy",
                description: "Key highlights from the latest monetary policy meeting",
                time: "2 hours ago"
              },
              {
                title: "Global Market Update",
                description: "Impact of international events on Indian markets",
                time: "4 hours ago"
              },
              {
                title: "Earnings Season Update",
                description: "Q3 earnings overview of major companies",
                time: "6 hours ago"
              }
            ].map((news) => (
              <div
                key={news.title}
                className="p-4 bg-background rounded-lg hover:bg-accent/10 transition-colors cursor-pointer"
              >
                <h3 className="font-semibold">{news.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {news.description}
                </p>
                <p className="text-xs text-muted-foreground mt-2">{news.time}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Research;
