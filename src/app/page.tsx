'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ShoppingBag } from 'lucide-react'

// Components
import Sidebar from '@/components/Navigation/Sidebar'
import HeroSection from '@/components/Hero/HeroSection'
import FeaturesSection from '@/components/Features/FeaturesSection'
import PromotionsSection from '@/components/Promotions/PromotionsSection'

// Hooks
import { useCustomCursor } from '@/hooks/useCustomCursor'
import { useLocalStorage } from '@/hooks/useLocalStorage'

// Types
import type { CartItem } from '@/types'

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>('cart', [])

  // Initialize custom cursor
  useCustomCursor()

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <div className="bg-smoke-900 min-h-screen">
      {/* Fixed Cart Button */}
      <motion.button
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
        <main className="flex-1 transition-all duration-300">
          <HeroSection />
          <FeaturesSection />
          <PromotionsSection />
        </main>
      </div>
    </div>
  )
}