'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
  Utensils,
  Truck,
  Shield,
  Award,
  Clock,
  MapPin,
  Star,
  Zap,
} from 'lucide-react'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

const features = [
  {
    icon: Utensils,
    title: 'Premium Quality',
    description: 'Fresh ingredients sourced daily from local farms and premium suppliers',
    color: 'from-spice-orange-500 to-red-500',
    stats: '100% Fresh',
  },
  {
    icon: Truck,
    title: 'Lightning Fast',
    description: '30-minute delivery guarantee or your meal is free',
    color: 'from-blue-500 to-cyan-500',
    stats: '< 30 min',
  },
  {
    icon: Shield,
    title: 'Safe & Secure',
    description: 'Contactless delivery with real-time tracking and secure payments',
    color: 'from-green-500 to-emerald-500',
    stats: '100% Safe',
  },
  {
    icon: Award,
    title: 'Award Winning',
    description: 'Best spice cuisine 2024 - Seattle Food Awards',
    color: 'from-yellow-500 to-orange-500',
    stats: '#1 Rated',
  },
  {
    icon: Clock,
    title: '24/7 Service',
    description: 'Round-the-clock availability for your cravings',
    color: 'from-purple-500 to-pink-500',
    stats: 'Always Open',
  },
  {
    icon: MapPin,
    title: 'Wide Coverage',
    description: 'Serving 50+ neighborhoods across the greater Seattle area',
    color: 'from-teal-500 to-blue-500',
    stats: '50+ Areas',
  },
  {
    icon: Star,
    title: 'Top Rated',
    description: '4.9/5 stars from over 10,000 satisfied customers',
    color: 'from-amber-500 to-yellow-500',
    stats: '4.9★ Rating',
  },
  {
    icon: Zap,
    title: 'Smart Ordering',
    description: 'AI-powered recommendations based on your preferences',
    color: 'from-indigo-500 to-purple-500',
    stats: 'AI Powered',
  },
]

export default function FeaturesSection() {
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
  })

  return (
    <section className="section-spacing bg-smoke-800" ref={elementRef}>
      <div className="max-w-7xl mx-auto container-padding">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-responsive-3xl font-bold text-white mb-4 sm:mb-6">
            Why Choose <span className="gradient-text">UrbanSpice</span>
          </h2>
          <p className="text-responsive-lg text-white/80 max-w-3xl mx-auto">
            Experience the difference with our commitment to quality, speed, and
            exceptional service that sets us apart from the rest.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              animate={
                isIntersecting
                  ? {
                      opacity: 1,
                      y: 0,
                      rotateX: 0,
                    }
                  : {}
              }
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                type: 'spring',
                stiffness: 100,
              }}
              className="glass-card p-6 text-center group hover:bg-white/15 transition-all duration-300"
            >
              {/* Icon */}
              <div className="relative mb-6">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon size={28} className="text-white" />
                </div>
                {/* Floating badge */}
                <div className="absolute -top-2 -right-2 bg-spice-orange-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                  {feature.stats}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-spice-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                whileHover={{ scale: 1.02 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12 sm:mt-16"
        >
          <div className="glass-card p-6 sm:p-8 max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
              Ready to Experience Excellence?
            </h3>
            <p className="text-white/80 mb-6 text-sm sm:text-base">
              Join thousands of satisfied customers who have made UrbanSpice their
              go-to choice for premium cuisine.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-spice-orange-500 to-spice-orange-600 text-white px-6 sm:px-8 py-3 rounded-2xl font-semibold shadow-lg text-sm sm:text-base"
            >
              Start Your Journey
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}