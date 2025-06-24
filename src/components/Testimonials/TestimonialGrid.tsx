'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Star, Quote, Verified } from 'lucide-react'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import Image from 'next/image'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 5,
    review: 'Absolutely incredible! The Dragon Fire Noodles had the perfect balance of heat and flavor. Best food delivery experience I\'ve ever had.',
    dish: 'Dragon Fire Noodles',
    location: 'Seattle, WA',
    verified: true,
  },
  {
    id: 2,
    name: 'Michael Chen',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 5,
    review: 'The Blazing Curry Bowl exceeded all expectations. Authentic flavors, fresh ingredients, and lightning-fast delivery!',
    dish: 'Blazing Curry Bowl',
    location: 'Portland, OR',
    verified: true,
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 5,
    review: 'UrbanSpice has become my go-to for spicy food cravings. The quality is consistently outstanding and the packaging is eco-friendly.',
    dish: 'Spiced Tandoori Platter',
    location: 'San Francisco, CA',
    verified: true,
  },
  {
    id: 4,
    name: 'David Kim',
    avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 4,
    review: 'Great variety of spice levels to choose from. The Fire Wings were perfectly crispy and the sauce was addictive!',
    dish: 'Fire Wings Combo',
    location: 'Vancouver, BC',
    verified: false,
  },
  {
    id: 5,
    name: 'Lisa Thompson',
    avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 5,
    review: 'The attention to detail is remarkable. Every dish arrives hot, fresh, and beautifully presented. Customer service is top-notch too!',
    dish: 'Urban Fusion Curry',
    location: 'Los Angeles, CA',
    verified: true,
  },
  {
    id: 6,
    name: 'James Wilson',
    avatar: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 5,
    review: 'Finally found a place that understands real spice! The heat levels are authentic and the flavors are complex and satisfying.',
    dish: 'Dragon Fire Noodles',
    location: 'Denver, CO',
    verified: true,
  },
]

export default function TestimonialGrid() {
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
  })

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
            What Our <span className="gradient-text">Customers Say</span>
          </h2>
          <p className="text-responsive-lg text-white/80 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers
            have to say about their UrbanSpice experience.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
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
              className="glass-card p-6 group hover:bg-white/15 transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="mb-4">
                <Quote size={24} className="text-spice-orange-400 opacity-60" />
              </div>

              {/* Review Text */}
              <p className="text-white/90 mb-6 leading-relaxed text-sm sm:text-base">
                "{testimonial.review}"
              </p>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={`${
                      i < testimonial.rating
                        ? 'text-yellow-400 fill-current'
                        : 'text-white/30'
                    }`}
                  />
                ))}
              </div>

              {/* Customer Info */}
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  {testimonial.verified && (
                    <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-1">
                      <Verified size={12} className="text-white" />
                    </div>
                  )}
                </div>
                <div className="flex-1">
                  <h4 className="text-white font-semibold text-sm">
                    {testimonial.name}
                  </h4>
                  <p className="text-white/60 text-xs">{testimonial.location}</p>
                </div>
              </div>

              {/* Dish Ordered */}
              <div className="mt-4 pt-4 border-t border-white/10">
                <p className="text-spice-orange-400 text-xs font-medium">
                  Ordered: {testimonial.dish}
                </p>
              </div>

              {/* Hover Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-spice-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                whileHover={{ scale: 1.02 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12 sm:mt-16"
        >
          <div className="glass-card p-6 sm:p-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-spice-orange-400 mb-2">
                  4.9
                </div>
                <div className="text-white/80 text-sm">Average Rating</div>
                <div className="flex justify-center mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="text-yellow-400 fill-current"
                    />
                  ))}
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-spice-orange-400 mb-2">
                  10k+
                </div>
                <div className="text-white/80 text-sm">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-spice-orange-400 mb-2">
                  50k+
                </div>
                <div className="text-white/80 text-sm">Orders Delivered</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}