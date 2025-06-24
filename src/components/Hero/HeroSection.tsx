'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Play, MapPin, Clock, Star } from 'lucide-react'
import DishCarousel from './DishCarousel'
import CategoryRotator from './CategoryRotator'

export default function HeroSection() {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-smoke-900 via-smoke-800 to-smoke-900">
        <div className="absolute inset-0 bg-smoke-texture opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-radial from-spice-orange-600/20 via-transparent to-transparent"></div>

        {/* Animated particles */}
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-spice-orange-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 4,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto container-padding">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            {/* Glass Text Overlay */}
            <div className="glass-card p-6 sm:p-8 mb-6 sm:mb-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="mb-6"
              >
                <h1 className="text-responsive-3xl font-bold leading-tight mb-4">
                  <span className="text-white">Taste the</span>
                  <br />
                  <span className="gradient-text">Urban Heat</span>
                </h1>
                <p className="text-responsive-lg text-white/80 max-w-lg mx-auto lg:mx-0">
                  Premium spice-infused cuisine delivered to your doorstep.
                  Experience flavors that ignite your senses.
                </p>
              </motion.div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6 sm:mb-8">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-spice-orange-400">
                    4.9
                  </div>
                  <div className="text-xs sm:text-sm text-white/60 flex items-center justify-center">
                    <Star size={12} className="mr-1 fill-current" />
                    Rating
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-spice-orange-400">
                    25
                  </div>
                  <div className="text-xs sm:text-sm text-white/60 flex items-center justify-center">
                    <Clock size={12} className="mr-1" />
                    Minutes
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-spice-orange-400">
                    2.1k
                  </div>
                  <div className="text-xs sm:text-sm text-white/60 flex items-center justify-center">
                    <MapPin size={12} className="mr-1" />
                    Nearby
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="magnetic-btn bg-gradient-to-r from-spice-orange-500 to-spice-orange-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-semibold flex items-center justify-center space-x-2 shadow-2xl text-sm sm:text-base"
                >
                  <span>Order Now</span>
                  <ArrowRight size={20} />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="magnetic-btn glass-morphism text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-semibold flex items-center justify-center space-x-2 text-sm sm:text-base"
                >
                  <Play size={20} />
                  <span>Watch Story</span>
                </motion.button>
              </div>
            </div>

            {/* Floating Social Proof */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="glass-card p-4 inline-flex items-center space-x-3"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-spice-orange-400 to-spice-orange-600 border-2 border-white/20"
                  />
                ))}
              </div>
              <div className="text-xs sm:text-sm text-white/80">
                <span className="font-semibold text-spice-orange-400">2,847</span>{' '}
                people ordered today
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <div className="relative order-1 lg:order-2">
            <DishCarousel />
            <div className="absolute -bottom-4 sm:-bottom-8 left-1/2 transform -translate-x-1/2">
              <CategoryRotator />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 hidden sm:block"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-spice-orange-400 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  )
}