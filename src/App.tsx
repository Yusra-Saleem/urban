import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';

// Components
import Sidebar from './components/Navigation/Sidebar';
import HeroSection from './components/Hero/HeroSection';
import MenuSection from './components/Menu/MenuSection';
import TestimonialGrid from './components/Testimonials/TestimonialGrid';
import ReservationModal from './components/Reservation/ReservationModal';
import CartSidebar from './components/Cart/CartSidebar';
import Footer from './components/Footer/Footer';

// Hooks
import { useCustomCursor } from './hooks/useCustomCursor';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  spiceLevel: number;
}

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [reservationModalOpen, setReservationModalOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: 'Spice Fusion Bowl',
      price: 24.99,
      quantity: 2,
      image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=150',
      spiceLevel: 4
    },
    {
      id: 2,
      name: 'Dragon Fire Curry',
      price: 22.50,
      quantity: 1,
      image: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=150',
      spiceLevel: 5
    }
  ]);

  // Initialize custom cursor
  useCustomCursor();

  const handleUpdateQuantity = (id: number, quantity: number) => {
    if (quantity === 0) {
      setCartItems(items => items.filter(item => item.id !== id));
    } else {
      setCartItems(items => 
        items.map(item => 
          item.id === id ? { ...item, quantity } : item
        )
      );
    }
  };

  const handleRemoveItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="bg-smoke-900 min-h-screen">
      {/* Fixed Cart Button */}
      <motion.button
        onClick={() => setCartOpen(true)}
        className="fixed top-6 right-6 z-30 magnetic-btn glass-morphism p-4 rounded-2xl shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <div className="relative">
          <ShoppingBag size={24} className="text-white" />
          {totalItems > 0 && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -top-2 -right-2 bg-spice-orange-500 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center font-bold"
            >
              {totalItems}
            </motion.div>
          )}
        </div>
      </motion.button>

      {/* Fixed Reservation Button */}
      <motion.button
        onClick={() => setReservationModalOpen(true)}
        className="fixed bottom-6 right-6 z-30 magnetic-btn bg-gradient-to-r from-spice-orange-500 to-spice-orange-600 text-white px-6 py-3 rounded-2xl font-semibold shadow-lg"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        Reserve Table
      </motion.button>

      {/* Layout */}
      <div className="flex">
        {/* Sidebar */}
        <Sidebar 
          isOpen={sidebarOpen} 
          onToggle={() => setSidebarOpen(!sidebarOpen)} 
        />

        {/* Main Content */}
        <main className={`flex-1 transition-all duration-300 ${sidebarOpen ? 'lg:ml-0' : ''}`}>
          <HeroSection />
          <MenuSection />
          <TestimonialGrid />
          <Footer />
        </main>
      </div>

      {/* Modals & Sidebars */}
      <ReservationModal 
        isOpen={reservationModalOpen}
        onClose={() => setReservationModalOpen(false)}
      />

      <CartSidebar
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />
    </div>
  );
}

export default App;