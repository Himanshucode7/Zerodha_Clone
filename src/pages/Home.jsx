
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

function Home() {
  return (
    <div>
      <section className="hero-section flex items-center justify-center">
        <div className="text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold mb-4"
          >
            Welcome to EcoShop
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl mb-8"
          >
            Discover our amazing products
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link to="/products">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                Shop Now
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-lg shadow-lg p-6 text-center"
            >
              <img  alt="Electronics category" className="w-full h-48 object-cover rounded-lg mb-4" src="https://images.unsplash.com/photo-1468495244123-6c6c332eeece" />
              <h3 className="text-xl font-semibold mb-2">Electronics</h3>
              <p className="text-gray-600">Latest gadgets and accessories</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-lg shadow-lg p-6 text-center"
            >
              <img  alt="Fashion category" className="w-full h-48 object-cover rounded-lg mb-4" src="https://images.unsplash.com/photo-1569312218039-5154f5afb6e9" />
              <h3 className="text-xl font-semibold mb-2">Fashion</h3>
              <p className="text-gray-600">Trendy clothing and accessories</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-lg shadow-lg p-6 text-center"
            >
              <img  alt="Home & Living category" className="w-full h-48 object-cover rounded-lg mb-4" src="https://images.unsplash.com/photo-1702308223460-6457164e6553" />
              <h3 className="text-xl font-semibold mb-2">Home & Living</h3>
              <p className="text-gray-600">Beautiful home decorations</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
