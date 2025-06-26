'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  Smartphone, 
  ChefHat, 
  Truck, 
  Home,
  ArrowRight,
  Clock,
  CheckCircle,
  Star
} from 'lucide-react'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

const steps = [
  {
    id: 1,
    icon: Smartphone,
    title: 'Browse & Order',
    description: 'Explore our curated menu and place your order with just a few taps',
    details: ['Browse 200+ dishes', 'Real-time availability', 'Secure payment'],
    color: 'from-blue-500 to-cyan-500',
    time: '2 min',
  },
  {
    id: 2,
    icon: ChefHat,
    title: 'Chef Preparation',
    description: 'Our expert chefs prepare your meal with premium ingredients',
    details: ['Fresh ingredients', 'Expert preparation', 'Quality control'],
    color: 'from-orange-500 to-red-500',
    time: '15 min',
  },
  {
    id: 3,
    icon: Truck,
    title: 'Fast Delivery',
    description: 'Your order is carefully packed and delivered by our trusted drivers',
    details: ['Eco-friendly packaging', 'Real-time tracking', 'Temperature controlled'],
    color: 'from-green-500 to-emerald-500',
    time: '10 min',
  },
  {
    id: 4,
    icon: Home,
    title: 'Enjoy at Home',
    description: 'Savor restaurant-quality food in the comfort of your home',
    details: ['Hot & fresh delivery', 'Perfect presentation', 'Satisfaction guaranteed'],
    color: 'from-purple-500 to-pink-500',
    time: '∞',
  },
]

const features = [
  {
    icon: Clock,
    title: 'Lightning Fast',
    description: 'Average delivery time under 30 minutes',
  },
  {
    icon: CheckCircle,
    title: 'Quality Assured',
    description: '100% satisfaction guarantee on every order',
  },
  {
    icon: Star,
    title: 'Premium Experience',
    description: 'Restaurant-quality food delivered to your door',
  },
]

export default function ProcessSection() {
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
  })

  return (
    <section className="section-spacing bg-smoke-900 relative overflow-hidden" ref={elementRef}>
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-spice-orange-600/5 via-transparent to-purple-600/5"></div>
        
        {/* Animated background elements */}
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: 'linear'
          }}
          className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-spice-orange-500/10 to-transparent rounded-full blur-xl"
        />
        
        <motion.div
          animate={{ 
            rotate: -360,
            scale: [1.2, 1, 1.2]
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: 'linear'
          }}
          className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-r from-purple-500/10 to-transparent rounded-full blur-xl"
        />
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
            How <span className="gradient-text">UrbanSpice</span> Works
          </h2>
          <p className="text-responsive-lg text-white/80 max-w-3xl mx-auto">
            From order to delivery, we've streamlined every step to ensure you get
            the best food experience with minimal effort.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative mb-16">
          {/* Connection Lines - Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-spice-orange-400/30 to-transparent transform -translate-y-1/2"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                {/* Step Card */}
                <div className="glass-card p-6 text-center group hover:bg-white/15 transition-all duration-300 relative z-10">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-spice-orange-500 to-spice-orange-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {step.id}
                  </div>

                  {/* Icon */}
                  <div className="relative mb-6 mt-4">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <step.icon size={28} className="text-white" />
                    </div>
                    
                    {/* Time Badge */}
                    <div className="absolute -bottom-2 -right-2 bg-black/80 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full font-medium">
                      {step.time}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-spice-orange-400 transition-colors">
                    {step.title}
                  </h3>
                  
                  <p className="text-white/80 text-sm mb-4 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Details */}
                  <ul className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="text-white/60 text-xs flex items-center justify-center space-x-2">
                        <div className="w-1 h-1 bg-spice-orange-400 rounded-full"></div>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Hover Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-spice-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                    whileHover={{ scale: 1.02 }}
                  />
                </div>

                {/* Arrow - Desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-2 transform -translate-y-1/2 z-20">
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-8 h-8 bg-spice-orange-500 rounded-full flex items-center justify-center"
                    >
                      <ArrowRight size={16} className="text-white" />
                    </motion.div>
                  </div>
                )}

                {/* Arrow - Mobile */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-4">
                    <motion.div
                      animate={{ y: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-8 h-8 bg-spice-orange-500 rounded-full flex items-center justify-center rotate-90"
                    >
                      <ArrowRight size={16} className="text-white" />
                    </motion.div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="glass-card p-8 sm:p-12"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Why Choose <span className="gradient-text">Our Process</span>
            </h3>
            <p className="text-white/80 max-w-2xl mx-auto">
              Every step is optimized for speed, quality, and your satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-spice-orange-500 to-spice-orange-600 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon size={24} className="text-white" />
                </div>
                
                <h4 className="text-white font-semibold mb-2 group-hover:text-spice-orange-400 transition-colors">
                  {feature.title}
                </h4>
                
                <p className="text-white/70 text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-spice-orange-500 to-spice-orange-600 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-shadow flex items-center space-x-2 mx-auto"
          >
            <span>Start Your Order</span>
            <ArrowRight size={20} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}