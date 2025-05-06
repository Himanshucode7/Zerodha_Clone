
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Users, TrendingUp, Shield, Award, ChevronRight } from "lucide-react";

function ZerodhaCase() {
  const stats = [
    { number: "10M+", label: "Users" },
    { number: "15%", label: "Market Share" },
    { number: "₹0", label: "Account Opening" },
    { number: "₹20", label: "Per Trade" },
  ];

  const features = [
    {
      title: "User-Friendly Interface",
      description: "Clean and intuitive platform that makes trading accessible to everyone",
      icon: Users,
    },
    {
      title: "Advanced Trading Tools",
      description: "Professional-grade charts, analysis tools, and real-time data",
      icon: TrendingUp,
    },
    {
      title: "Bank-Grade Security",
      description: "Multi-level authentication and encryption to protect your investments",
      icon: Shield,
    },
  ];

  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "Active Trader",
      content: "Zerodha's platform has transformed how I trade. The interface is intuitive and the costs are transparent.",
    },
    {
      name: "Priya Patel",
      role: "New Investor",
      content: "As a beginner, Zerodha's educational resources and simple interface helped me start my investment journey.",
    },
    {
      name: "Amit Kumar",
      role: "Long-term Investor",
      content: "The seamless experience and low brokerage costs make Zerodha perfect for my long-term investment strategy.",
    },
  ];

  return (
    <div>
      <section className="zerodha-hero flex items-center justify-center text-white">
        <div className="text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-6xl font-bold mb-6"
          >
            Trading Simplified
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl sm:text-2xl mb-8 max-w-2xl mx-auto"
          >
            India's largest stock broker offering the lowest brokerage rates and innovative trading technology
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button size="lg" className="bg-white text-[#00d09c] hover:bg-gray-100">
              Open Free Account <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="stat-card"
              >
                <h3 className="text-3xl sm:text-4xl font-bold text-[#00d09c] mb-2">{stat.number}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl font-bold text-center mb-16 gradient-text"
          >
            Why Choose Zerodha?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="feature-card"
              >
                <feature.icon className="h-12 w-12 text-[#00d09c] mb-4" />
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl font-bold text-center mb-16 gradient-text"
          >
            User Experiences
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="testimonial-card"
              >
                <Award className="h-8 w-8 text-[#00d09c] mb-4" />
                <p className="text-gray-600 mb-4">{testimonial.content}</p>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#00d09c] text-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl font-bold mb-8"
          >
            Ready to Start Trading?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl mb-8"
          >
            Join millions of Indians who trust Zerodha for their investments
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Button size="lg" className="bg-white text-[#00d09c] hover:bg-gray-100">
              Open Free Account
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default ZerodhaCase;
