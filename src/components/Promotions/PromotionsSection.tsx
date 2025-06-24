'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  Gift,
  Clock,
  Percent,
  Zap,
  ArrowRight,
  Copy,
  Check,
} from 'lucide-react'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import Image from 'next/image'

const promotions = [
  {
    id: 1,
    title: 'First Order Special',
    description: 'Get 30% off your first order with free delivery',
    discount: 30,
    code: 'WELCOME30',
    validUntil: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days from now
    image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=400',
    color: 'from-spice-orange-500 to-red-500',
    icon: Gift,
    isActive: true,
  },
  {
    id: 2,
    title: 'Weekend Warrior',
    description: 'Free delivery on all weekend orders above $25',
    discount: 0,
    code: 'WEEKEND',
    validUntil: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), // 3 days from now
    image: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=400',
    color: 'from-blue-500 to-purple-500',
    icon: Zap,
    isActive: true,
  },
  {
    id: 3,
    title: 'Spice Lover Deal',
    description: 'Buy 2 spicy dishes, get 1 free dessert',
    discount: 0,
    code: 'SPICY2GET1',
    validUntil: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000), // 5 days from now
    image: 'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=400',
    color: 'from-green-500 to-teal-500',
    icon: Percent,
    isActive: true,
  },
]

export default function PromotionsSection() {
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
  })
  const [copiedCode, setCopiedCode] = useState<string | null>(null)
  const [timeLeft, setTimeLeft] = useState<{ [key: number]: string }>({})

  // Calculate time remaining for each promotion
  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft: { [key: number]: string } = {}
      
      promotions.forEach((promo) => {
        const now = new Date().getTime()
        const distance = promo.validUntil.getTime() - now
        
        if (distance > 0) {
          const days = Math.floor(distance / (1000 * 60 * 60 * 24))
          const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
          const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
          
          newTimeLeft[promo.id] = `${days}d ${hours}h ${minutes}m`
        } else {
          newTimeLeft[promo.id] = 'Expired'
        }
      })
      
      setTimeLeft(newTimeLeft)
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const copyCode = async (code: string) => {
    try {
      await navigator.clipboard.writeText(code)
      setCopiedCode(code)
      setTimeout(() => setCopiedCode(null), 2000)
    } catch (err) {
      console.error('Failed to copy code:', err)
    }
  }

  return (
    <section className="section-spacing bg-smoke-900" ref={elementRef}>
      <div className="max-w-7xl mx-auto container-padding">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-responsive-3xl font-bold text-white mb-4 sm:mb-6">
            <span className="gradient-text">Hot Deals</span> & Promotions
          </h2>
          <p className="text-responsive-lg text-white/80 max-w-3xl mx-auto">
            Don't miss out on these limited-time offers! Save big on your favorite
            spicy dishes and discover new flavors.
          </p>
        </motion.div>

        {/* Promotions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {promotions.map((promo, index) => (
            <motion.div
              key={promo.id}
              initial={{ opacity: 0, y: 50, rotateY: -15 }}
              animate={
                isIntersecting
                  ? {
                      opacity: 1,
                      y: 0,
                      rotateY: 0,
                    }
                  : {}
              }
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                type: 'spring',
                stiffness: 100,
              }}
              className="glass-card overflow-hidden group hover:bg-white/15 transition-all duration-300"
            >
              {/* Image Header */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={promo.image}
                  alt={promo.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Discount Badge */}
                {promo.discount > 0 && (
                  <div className="absolute top-4 right-4 bg-spice-orange-500 text-white px-3 py-1 rounded-full font-bold text-sm">
                    {promo.discount}% OFF
                  </div>
                )}

                {/* Icon */}
                <div className="absolute top-4 left-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${promo.color}`}>
                    <promo.icon size={24} className="text-white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {promo.title}
                </h3>
                <p className="text-white/80 text-sm mb-4">
                  {promo.description}
                </p>

                {/* Timer */}
                <div className="flex items-center space-x-2 mb-4">
                  <Clock size={16} className="text-spice-orange-400" />
                  <span className="text-spice-orange-400 font-medium text-sm">
                    {timeLeft[promo.id] || 'Loading...'}
                  </span>
                </div>

                {/* Code Section */}
                <div className="bg-white/10 rounded-xl p-4 mb-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white/60 text-xs mb-1">Promo Code</p>
                      <p className="text-white font-mono font-bold">
                        {promo.code}
                      </p>
                    </div>
                    <button
                      onClick={() => copyCode(promo.code)}
                      className="p-2 bg-spice-orange-500 hover:bg-spice-orange-600 rounded-lg transition-colors"
                    >
                      {copiedCode === promo.code ? (
                        <Check size={16} className="text-white" />
                      ) : (
                        <Copy size={16} className="text-white" />
                      )}
                    </button>
                  </div>
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-spice-orange-500 to-spice-orange-600 text-white py-3 rounded-xl font-semibold flex items-center justify-center space-x-2 shadow-lg"
                >
                  <span>Claim Offer</span>
                  <ArrowRight size={16} />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12 sm:mt-16"
        >
          <div className="glass-card p-6 sm:p-8 max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
              Never Miss a Deal!
            </h3>
            <p className="text-white/80 mb-6 text-sm sm:text-base">
              Subscribe to get exclusive offers and be the first to know about new
              promotions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-spice-orange-400"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-spice-orange-500 to-spice-orange-600 text-white px-6 py-3 rounded-xl font-medium whitespace-nowrap"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}