'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Pizza, Coffee, IceCream, Fish, Cake, Soup } from 'lucide-react'

const categories = [
  { icon: Pizza, label: 'Spicy Mains', color: 'from-red-500 to-spice-orange-500' },
  { icon: Coffee, label: 'Hot Beverages', color: 'from-amber-600 to-yellow-500' },
  { icon: IceCream, label: 'Cool Treats', color: 'from-blue-400 to-cyan-400' },
  { icon: Fish, label: 'Seafood', color: 'from-teal-500 to-blue-500' },
  { icon: Cake, label: 'Desserts', color: 'from-pink-500 to-purple-500' },
  { icon: Soup, label: 'Soups', color: 'from-green-500 to-emerald-500' },
]

export default function CategoryRotator() {
  const [currentCategory, setCurrentCategory] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentCategory((prev) => (prev + 1) % categories.length)
    }, 2500)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex justify-center">
      <motion.div
        className="glass-card p-3 sm:p-4 rounded-2xl"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex items-center space-x-2 sm:space-x-4">
          {categories.map((category, index) => {
            const Icon = category.icon
            const isActive = index === currentCategory

            return (
              <motion.div
                key={index}
                className={`relative p-2 sm:p-3 rounded-xl cursor-pointer transition-all duration-500 ${
                  isActive
                    ? `bg-gradient-to-r ${category.color}`
                    : 'bg-white/10 hover:bg-white/20'
                }`}
                animate={{
                  scale: isActive ? 1.2 : 1,
                  rotate: isActive ? 360 : 0,
                }}
                transition={{ duration: 0.5 }}
                onClick={() => setCurrentCategory(index)}
              >
                <Icon
                  size={20}
                  className={`transition-colors duration-300 ${
                    isActive ? 'text-white' : 'text-white/70'
                  }`}
                />

                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute -bottom-10 sm:-bottom-12 left-1/2 transform -translate-x-1/2 whitespace-nowrap"
                  >
                    <div className="bg-black/80 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-lg">
                      {category.label}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </div>
  )
}