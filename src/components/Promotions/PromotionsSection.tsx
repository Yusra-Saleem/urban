'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Gift, 
  Clock, 
  Percent, 
  Zap, 
  Crown, 
  Fire,
  ArrowRight,
  Timer,
  Star
} from 'lucide-react'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import Image from 'next/image'

const promotions = [
  {
    id: 1,
    title: 'Flash Sale',
    subtitle: '50% OFF Everything',
    description: 'Limited time offer on all spicy dishes',
    discount: 50,
    code: 'FLASH50',
    timeLeft: 3600, // seconds
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600',
    gradient: 'from-red-500 to-orange-500',
    icon: Fire,
    badge: 'HOT DEAL',
  },
  {
    id: 2,
    title: 'Premium Membership',
    subtitle: 'Free Delivery Forever',
    description: 'Join our VIP club and get exclusive perks',
    discount: 0,
    code: 'VIP2024',
    timeLeft: null,
    image: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=600',
    gradient: 'from-purple-500 to-pink-500',
    icon: Crown,
    badge: 'EXCLUSIVE',
  },
  {
    id: 3,
    title: 'Happy Hour',
    subtitle: '30% OFF Beverages',
    description: 'Every day 3-6 PM on all drinks',
    discount: 30,
    code: 'HAPPY30',
    timeLeft: 7200,
    image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=600',
    gradient: 'from-blue-500 to-cyan-500',
    icon: Clock,
    badge: 'DAILY',
  },
]

function CountdownTimer({ timeLeft }: { timeLeft: number }) {
  const [time, setTime] = useState(timeLeft)

  useEffect(() => {
    if (time <= 0) return

    const timer = setInterval(() => {
      setTime(prev => prev - 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [time])

  const hours = Math.floor(time / 3600)
  const minutes = Math.floor((time % 3600) / 60)
  const seconds = time % 60

  return (
    <div className="flex items-center space-x-2">
      <Timer size={16} className="text-white/80" />
      <div className="flex space-x-1">
        <div className="bg-black/30 px-2 py-1 rounded text-xs font-mono">
          {hours.toString().padStart(2, '0')}
        </div>
        <span className="text-white/60">:</span>
        <div className="bg-black/30 px-2 py-1 rounded text-xs font-mono">
          {minutes.toString().padStart(2, '0')}
        </div>
        <span className="text-white/60">:</span>
        <div className="bg-black/30 px-2 py-1 rounded text-xs font-mono">
          {seconds.toString().padStart(2, '0')}
        </div>
      </div>
    </div>
  )
}

export default function PromotionsSection() {
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
  })
  const [activePromo, setActivePromo] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActivePromo(prev => (prev + 1) % promotions.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="section-spacing bg-smoke-900 relative overflow-hidden" ref={elementRef}>
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-spice-orange-600/10 via-transparent to-purple-600/10"></div>
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-spice-orange-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto container-padding relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-responsive-3xl font-bold text-white mb-4 sm:mb-6">
            <span className="gradient-text">Exclusive Offers</span> & Deals
          </h2>
          <p className="text-responsive-lg text-white/80 max-w-3xl mx-auto">
            Don't miss out on our limited-time promotions and special discounts
            designed to make your dining experience even more delightful.
          </p>
        </motion.div>

        {/* Main Promotion Carousel */}
        <div className="relative mb-12">
          <div className="overflow-hidden rounded-3xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={activePromo}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="relative h-80 sm:h-96"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${promotions[activePromo].gradient}`}>
                  <Image
                    src={promotions[activePromo].image}
                    alt={promotions[activePromo].title}
                    fill
                    className="object-cover mix-blend-overlay opacity-30"
                    sizes="100vw"
                  />
                  <div className="absolute inset-0 bg-black/40"></div>
                </div>

                <div className="relative z-10 h-full flex items-center">
                  <div className="w-full max-w-4xl mx-auto container-padding">
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                      {/* Content */}
                      <div>
                        {/* Badge */}
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.2 }}
                          className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4"
                        >
                          <promotions[activePromo].icon size={16} className="text-white" />
                          <span className="text-white text-sm font-medium">
                            {promotions[activePromo].badge}
                          </span>
                        </motion.div>

                        <motion.h3
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                          className="text-3xl sm:text-5xl font-bold text-white mb-2"
                        >
                          {promotions[activePromo].title}
                        </motion.h3>

                        <motion.p
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 }}
                          className="text-xl sm:text-2xl text-white/90 mb-4"
                        >
                          {promotions[activePromo].subtitle}
                        </motion.p>

                        <motion.p
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 }}
                          className="text-white/80 mb-6"
                        >
                          {promotions[activePromo].description}
                        </motion.p>

                        {/* Timer */}
                        {promotions[activePromo].timeLeft && (
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="mb-6"
                          >
                            <CountdownTimer timeLeft={promotions[activePromo].timeLeft!} />
                          </motion.div>
                        )}

                        {/* CTA */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.7 }}
                          className="flex flex-col sm:flex-row gap-4"
                        >
                          <button className="bg-white text-black px-8 py-4 rounded-2xl font-semibold hover:bg-white/90 transition-colors flex items-center justify-center space-x-2">
                            <span>Claim Offer</span>
                            <ArrowRight size={20} />
                          </button>
                          <div className="flex items-center space-x-3 bg-black/30 backdrop-blur-sm px-6 py-4 rounded-2xl">
                            <span className="text-white/80 text-sm">Code:</span>
                            <span className="text-white font-mono font-bold">
                              {promotions[activePromo].code}
                            </span>
                          </div>
                        </motion.div>
                      </div>

                      {/* Visual Element */}
                      <div className="hidden lg:block">
                        <motion.div
                          animate={{ 
                            rotate: [0, 5, -5, 0],
                            scale: [1, 1.05, 1]
                          }}
                          transition={{ 
                            duration: 4,
                            repeat: Infinity,
                            ease: 'easeInOut'
                          }}
                          className="relative"
                        >
                          {promotions[activePromo].discount > 0 && (
                            <div className="text-8xl sm:text-9xl font-black text-white/20 text-center">
                              {promotions[activePromo].discount}%
                            </div>
                          )}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <promotions[activePromo].icon size={80} className="text-white/60" />
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center space-x-3 mt-6">
            {promotions.map((_, index) => (
              <button
                key={index}
                onClick={() => setActivePromo(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activePromo
                    ? 'bg-spice-orange-400 w-8'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Quick Offers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: Gift,
              title: 'First Order Free',
              description: 'Get your first delivery absolutely free',
              code: 'WELCOME',
              gradient: 'from-green-500 to-emerald-500',
            },
            {
              icon: Zap,
              title: 'Lightning Deals',
              description: 'Flash discounts updated every hour',
              code: 'FLASH',
              gradient: 'from-yellow-500 to-orange-500',
            },
            {
              icon: Percent,
              title: 'Student Discount',
              description: '20% off with valid student ID',
              code: 'STUDENT20',
              gradient: 'from-indigo-500 to-purple-500',
            },
          ].map((offer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card p-6 group hover:bg-white/15 transition-all duration-300"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${offer.gradient} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <offer.icon size={24} className="text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-spice-orange-400 transition-colors">
                {offer.title}
              </h3>
              
              <p className="text-white/80 text-sm mb-4">
                {offer.description}
              </p>
              
              <div className="flex items-center justify-between">
                <span className="text-spice-orange-400 font-mono text-sm font-bold">
                  {offer.code}
                </span>
                <button className="text-white/60 hover:text-white transition-colors">
                  <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}