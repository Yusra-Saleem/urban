'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  Users, 
  Clock, 
  Star, 
  MapPin, 
  TrendingUp, 
  Award,
  Heart,
  Zap
} from 'lucide-react'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

const stats = [
  {
    icon: Users,
    value: '50K+',
    label: 'Happy Customers',
    description: 'Satisfied food lovers worldwide',
    gradient: 'from-blue-500 to-cyan-500',
    delay: 0.1,
  },
  {
    icon: Clock,
    value: '15min',
    label: 'Average Delivery',
    description: 'Lightning fast service',
    gradient: 'from-green-500 to-emerald-500',
    delay: 0.2,
  },
  {
    icon: Star,
    value: '4.9',
    label: 'Customer Rating',
    description: 'Based on 10K+ reviews',
    gradient: 'from-yellow-500 to-orange-500',
    delay: 0.3,
  },
  {
    icon: MapPin,
    value: '100+',
    label: 'Cities Served',
    description: 'Expanding every month',
    gradient: 'from-purple-500 to-pink-500',
    delay: 0.4,
  },
]

const achievements = [
  {
    icon: Award,
    title: 'Best Food App 2024',
    subtitle: 'TechCrunch Awards',
    year: '2024',
  },
  {
    icon: TrendingUp,
    title: 'Fastest Growing',
    subtitle: 'Food Delivery Platform',
    year: '2023',
  },
  {
    icon: Heart,
    title: 'Most Loved Brand',
    subtitle: 'Customer Choice Awards',
    year: '2024',
  },
  {
    icon: Zap,
    title: 'Innovation Leader',
    subtitle: 'Food Tech Summit',
    year: '2023',
  },
]

function CountUpAnimation({ value, duration = 2000 }: { value: string; duration?: number }) {
  const numericValue = parseInt(value.replace(/\D/g, ''))
  const suffix = value.replace(/[\d.]/g, '')
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.span
          initial={{ textContent: '0' }}
          whileInView={{ textContent: numericValue }}
          viewport={{ once: true }}
          transition={{ duration: duration / 1000, ease: 'easeOut' }}
        />
        {suffix}
      </motion.span>
    </motion.div>
  )
}

export default function StatsSection() {
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
  })

  return (
    <section className="section-spacing bg-smoke-800 relative overflow-hidden" ref={elementRef}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
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
            Trusted by <span className="gradient-text">Thousands</span>
          </h2>
          <p className="text-responsive-lg text-white/80 max-w-3xl mx-auto">
            Our numbers speak for themselves. Join the growing community of food lovers
            who have made UrbanSpice their go-to choice for premium dining.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isIntersecting ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: stat.delay,
                type: 'spring',
                stiffness: 100
              }}
              className="glass-card p-6 text-center group hover:bg-white/15 transition-all duration-300"
            >
              {/* Icon */}
              <div className="relative mb-6">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${stat.gradient} rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon size={28} className="text-white" />
                </div>
                
                {/* Floating particles */}
                <motion.div
                  animate={{ 
                    rotate: 360,
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    duration: 8,
                    repeat: Infinity,
                    ease: 'linear'
                  }}
                  className="absolute -top-2 -right-2 w-4 h-4 bg-spice-orange-400/30 rounded-full"
                />
              </div>

              {/* Value */}
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2">
                <CountUpAnimation value={stat.value} />
              </div>

              {/* Label */}
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-spice-orange-400 transition-colors">
                {stat.label}
              </h3>

              {/* Description */}
              <p className="text-white/70 text-sm">
                {stat.description}
              </p>

              {/* Hover Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-spice-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                whileHover={{ scale: 1.02 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="glass-card p-8 sm:p-12"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Award-Winning <span className="gradient-text">Excellence</span>
            </h3>
            <p className="text-white/80 max-w-2xl mx-auto">
              Recognition from industry leaders and customers alike validates our commitment
              to delivering exceptional food experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-spice-orange-500 to-spice-orange-600 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <achievement.icon size={24} className="text-white" />
                </div>
                
                <h4 className="text-white font-semibold mb-1 group-hover:text-spice-orange-400 transition-colors">
                  {achievement.title}
                </h4>
                
                <p className="text-white/70 text-sm mb-2">
                  {achievement.subtitle}
                </p>
                
                <span className="text-spice-orange-400 text-xs font-bold">
                  {achievement.year}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-spice-orange-500 to-spice-orange-600 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-shadow"
          >
            Join Our Success Story
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}