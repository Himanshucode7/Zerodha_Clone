
import React from "react";
import { motion } from "framer-motion";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";

const products = [
  {
    id: 1,
    name: "Wireless Earbuds",
    price: 99.99,
    description: "High-quality wireless earbuds with noise cancellation",
    image: "wireless-earbuds",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 199.99,
    description: "Feature-rich smartwatch with health tracking",
    image: "smart-watch",
  },
  {
    id: 3,
    name: "Laptop Backpack",
    price: 49.99,
    description: "Durable and spacious laptop backpack",
    image: "laptop-backpack",
  },
  {
    id: 4,
    name: "Coffee Maker",
    price: 79.99,
    description: "Programmable coffee maker with thermal carafe",
    image: "coffee-maker",
  },
  {
    id: 5,
    name: "Yoga Mat",
    price: 29.99,
    description: "Non-slip yoga mat with carrying strap",
    image: "yoga-mat",
  },
  {
    id: 6,
    name: "Desk Lamp",
    price: 39.99,
    description: "LED desk lamp with adjustable brightness",
    image: "desk-lamp",
  },
];

function Products() {
  const { addToCart } = useCart();

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Our Products</h1>
      <div className="product-grid">
        {products.map((product) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img 
              alt={product.name}
              className="w-full h-48 object-cover"
             src="https://images.unsplash.com/photo-1675023112817-52b789fd2ef0" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold">${product.price}</span>
                <Button
                  onClick={() => addToCart(product)}
                  className="bg-primary text-white"
                >
                  Add to Cart
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Products;
