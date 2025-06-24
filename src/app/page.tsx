'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ShoppingBag } from 'lucide-react'

// Components
import Sidebar from '@/components/Navigation/Sidebar'
import HeroSection from '@/components/Hero/HeroSection'
import FeaturesSection from '@/components/Features/FeaturesSection'
import PromotionsSection from '@/components/Promotions/PromotionsSection'
import MenuSection from '@/components/Menu/MenuSection'
import TestimonialGrid from '@/components/Testimonials/TestimonialGrid'
import ReservationModal from '@/components/Reservation/ReservationModal'
import CartSidebar from '@/components/Cart/CartSidebar'
import Footer from '@/components/Footer/Footer'

// Hooks
import { useCustomCursor } from '@/hooks/useCustomCursor'
import { useLocalStorage } from '@/hooks/useLocalStorage'

// Types
import type { CartItem } from '@/types'

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [reservationModalOpen, setReservationModalOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>('cart', [
    {
      id: 1,
      name: 'Spice Fusion Bowl',
      category: 'Spicy Mains',
      price: 24.99,
      rating: 4.9,
      reviews: 234,
      image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=150',
      description: 'Fiery noodles with premium vegetables',
      spiceLevel: 4,
      cookTime: '15-20 min',
      isVegetarian: true,
      isSpicy: true,
      badges: ['Popular'],
      quantity: 2,
    },
    {
      id: 2,
      name: 'Dragon Fire Curry',
      category: 'Spicy Mains',
      price: 22.50,
      rating: 4.8,
      reviews: 189,
      image: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=150',
      description: 'Rich coconut curry with exotic spices',
      spiceLevel: 5,
      cookTime: '20-25 min',
      isVegetarian: false,
      isSpicy: true,
      badges: ['Chef Special'],
      quantity: 1,
    }
  ])

  // Initialize custom cursor
  useCustomCursor()

  const handleUpdateQuantity = (id: number, quantity: number) => {
    if (quantity === 0) {
      setCartItems(items => items.filter(item => item.id !== id))
    } else {
      setCartItems(items => 
        items.map(item => 
          item.id === id ? { ...item, quantity } : item
        )
      )
    }
  }

  const handleRemoveItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id))
  }

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <div className="bg-smoke-900 min-h-screen">
      {/* Fixed Cart Button */}
      <motion.button
        onClick={() => setCartOpen(true)}
        className="fixed top-4 right-4 z-30 magnetic-btn glass-morphism p-3 sm:p-4 rounded-2xl shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Open shopping cart"
      >
        <div className="relative">
          <ShoppingBag size={24} className="text-white" />
          {totalItems > 0 && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -top-2 -right-2 bg-spice-orange-500 text-white text-xs w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center font-bold"
            >
              {totalItems}
            </motion.div>
          )}
        </div>
      </motion.button>

      {/* Fixed Reservation Button */}
      <motion.button
        onClick={() => setReservationModalOpen(true)}
        className="fixed bottom-4 right-4 z-30 magnetic-btn bg-gradient-to-r from-spice-orange-500 to-spice-orange-600 text-white px-4 sm:px-6 py-3 rounded-2xl font-semibold shadow-lg text-sm sm:text-base"
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
        <main className={`flex-1 transition-all duration-300 ${
          sidebarOpen ? 'lg:ml-72' : 'lg:ml-0'
        }`}>
          <HeroSection />
          <FeaturesSection />
          <PromotionsSection />
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
  )
}