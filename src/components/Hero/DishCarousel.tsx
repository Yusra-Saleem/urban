'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChefHat, Flame, Heart } from 'lucide-react'
import Image from 'next/image'

const dishes = [
  {
    id: 1,
    name: 'Spicy Dragon Bowl',
    image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: '$24.99',
    rating: 4.9,
    spiceLevel: 5,
    description: 'Fiery noodles with premium vegetables',
  },
  {
    id: 2,
    name: 'Urban Fusion Curry',
    image: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: '$22.50',
    rating: 4.8,
    spiceLevel: 4,
    description: 'Rich coconut curry with exotic spices',
  },
  {
    id: 3,
    name: 'Blazing Tandoori',
    image: 'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: '$26.75',
    rating: 4.9,
    spiceLevel: 5,
    description: 'Clay oven perfection with signature marinade',
  },
  {
    id: 4,
    name: 'Metropolitan Mix',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: '$19.99',
    rating: 4.7,
    spiceLevel: 3,
    description: 'Street food inspired fusion delight',
  },
]

export default function DishCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % dishes.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative w-full max-w-sm sm:max-w-md mx-auto">
      {/* Main Dish Display */}
      <div className="relative h-80 sm:h-96 rounded-3xl overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            exit={{ opacity: 0, scale: 0.8, rotateY: -90 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <div className="relative h-full glass-card overflow-hidden">
              <Image
                src={dishes[currentIndex].image}
                alt={dishes[currentIndex].name}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                priority={currentIndex === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Dish Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    {dishes[currentIndex].name}
                  </h3>
                  <button className="text-white/80 hover:text-spice-orange-400 transition-colors">
                    <Heart size={20} />
                  </button>
                </div>

                <p className="text-white/80 text-sm mb-3">
                  {dishes[currentIndex].description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="text-xl sm:text-2xl font-bold text-spice-orange-400">
                      {dishes[currentIndex].price}
                    </span>
                    <div className="flex items-center space-x-1">
                      <ChefHat size={16} className="text-white/60" />
                      <span className="text-white/60 text-sm">
                        {dishes[currentIndex].rating}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-1">
                    {[...Array(dishes[currentIndex].spiceLevel)].map((_, i) => (
                      <Flame
                        key={i}
                        size={14}
                        className="text-spice-orange-400 fill-current"
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute top-4 right-4 w-8 h-8 bg-spice-orange-400/20 rounded-full flex items-center justify-center"
              >
                <Flame size={16} className="text-spice-orange-400" />
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Carousel Indicators */}
      <div className="flex justify-center space-x-2 mt-4 sm:mt-6">
        {dishes.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-spice-orange-400 w-8'
                : 'bg-white/30 hover:bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Side Dishes Preview - Hidden on mobile */}
      <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 space-y-4 hidden xl:block">
        {dishes.map((dish, index) => (
          <motion.div
            key={dish.id}
            initial={{ opacity: 0, x: -50 }}
            animate={{
              opacity: index === currentIndex ? 0.3 : 0.7,
              x: 0,
              scale: index === currentIndex ? 0.8 : 0.6,
            }}
            transition={{ duration: 0.4 }}
            className="w-16 h-16 rounded-xl overflow-hidden glass-card cursor-pointer"
            onClick={() => setCurrentIndex(index)}
          >
            <Image
              src={dish.image}
              alt={dish.name}
              width={64}
              height={64}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </div>
    </div>
  )
}