'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  ChefHat, 
  Award, 
  Star, 
  MapPin, 
  Clock,
  Quote,
  Play,
  Users
} from 'lucide-react'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import Image from 'next/image'

const chefs = [
  {
    id: 1,
    name: 'Marco Rodriguez',
    title: 'Executive Chef',
    specialty: 'Fusion Cuisine',
    experience: '15+ Years',
    image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400',
    quote: 'Every dish tells a story. My passion is creating unforgettable flavor experiences that transport you around the world.',
    achievements: ['Michelin Star Winner', 'James Beard Nominee', 'Top Chef Finalist'],
    signature: 'Dragon Fire Noodles',
    rating: 4.9,
    dishes: 47,
  },
  {
    id: 2,
    name: 'Priya Sharma',
    title: 'Spice Master',
    specialty: 'Indian Cuisine',
    experience: '12+ Years',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
    quote: 'Spices are the soul of cooking. I blend traditional techniques with modern innovation to create magic on every plate.',
    achievements: ['Culinary Institute Graduate', 'Spice Expert Certified', 'Food Network Featured'],
    signature: 'Blazing Curry Bowl',
    rating: 4.8,
    dishes: 32,
  },
  {
    id: 3,
    name: 'David Kim',
    title: 'Pastry Chef',
    specialty: 'Desserts & Sweets',
    experience: '10+ Years',
    image: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=400',
    quote: 'Desserts are the perfect ending to any meal. I create sweet masterpieces that leave lasting memories.',
    achievements: ['Pastry World Cup Winner', 'Sugar Art Champion', 'Dessert Innovation Award'],
    signature: 'Molten Chocolate Lava',
    rating: 4.9,
    dishes: 28,
  },
]

const kitchenStats = [
  { label: 'Daily Orders', value: '2,500+', icon: Clock },
  { label: 'Master Chefs', value: '25+', icon: ChefHat },
  { label: 'Signature Dishes', value: '150+', icon: Award },
  { label: 'Customer Rating', value: '4.9★', icon: Star },
]

export default function ChefSection() {
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
  })
  const [activeChef, setActiveChef] = useState(0)
  const [showVideo, setShowVideo] = useState(false)

  return (
    <section className="section-spacing bg-smoke-800 relative overflow-hidden" ref={elementRef}>
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-spice-orange-600/10 via-transparent to-yellow-600/10"></div>
        
        {/* Kitchen smoke effect */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-white/5 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, -200],
              opacity: [0, 0.6, 0],
              scale: [1, 1.5, 2],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 8,
              ease: 'easeOut',
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
            Meet Our <span className="gradient-text">Master Chefs</span>
          </h2>
          <p className="text-responsive-lg text-white/80 max-w-3xl mx-auto">
            Behind every exceptional dish is a passionate chef. Meet the culinary artists
            who bring authentic flavors and innovative techniques to your table.
          </p>
        </motion.div>

        {/* Kitchen Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
        >
          {kitchenStats.map((stat, index) => (
            <div key={index} className="glass-card p-4 text-center">
              <stat.icon size={24} className="text-spice-orange-400 mx-auto mb-2" />
              <div className="text-xl font-bold text-white">{stat.value}</div>
              <div className="text-white/60 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Main Chef Showcase */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Chef Image & Video */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="relative h-96 sm:h-[500px] rounded-3xl overflow-hidden glass-card">
              <Image
                src={chefs[activeChef].image}
                alt={chefs[activeChef].name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              
              {/* Play Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setShowVideo(true)}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                  <Play size={32} className="text-white ml-1" />
                </div>
              </motion.button>

              {/* Chef Info Overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-2xl font-bold text-white mb-1">
                  {chefs[activeChef].name}
                </h3>
                <p className="text-spice-orange-400 font-medium mb-2">
                  {chefs[activeChef].title}
                </p>
                <div className="flex items-center space-x-4 text-white/80 text-sm">
                  <div className="flex items-center space-x-1">
                    <MapPin size={14} />
                    <span>{chefs[activeChef].specialty}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock size={14} />
                    <span>{chefs[activeChef].experience}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Stats */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 glass-card p-4 text-center"
            >
              <Star size={20} className="text-yellow-400 mx-auto mb-1" />
              <div className="text-white font-bold">{chefs[activeChef].rating}</div>
              <div className="text-white/60 text-xs">Rating</div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              className="absolute -bottom-4 -left-4 glass-card p-4 text-center"
            >
              <Users size={20} className="text-spice-orange-400 mx-auto mb-1" />
              <div className="text-white font-bold">{chefs[activeChef].dishes}</div>
              <div className="text-white/60 text-xs">Dishes</div>
            </motion.div>
          </motion.div>

          {/* Chef Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="glass-card p-8">
              {/* Quote */}
              <div className="mb-6">
                <Quote size={32} className="text-spice-orange-400 opacity-60 mb-4" />
                <p className="text-white/90 text-lg leading-relaxed italic">
                  "{chefs[activeChef].quote}"
                </p>
              </div>

              {/* Achievements */}
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3 flex items-center space-x-2">
                  <Award size={20} className="text-spice-orange-400" />
                  <span>Achievements</span>
                </h4>
                <ul className="space-y-2">
                  {chefs[activeChef].achievements.map((achievement, index) => (
                    <li key={index} className="text-white/80 text-sm flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-spice-orange-400 rounded-full"></div>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Signature Dish */}
              <div className="border-t border-white/10 pt-6">
                <h4 className="text-white font-semibold mb-2">Signature Dish</h4>
                <p className="text-spice-orange-400 font-medium">
                  {chefs[activeChef].signature}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Chef Selection */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex justify-center space-x-4 mb-12"
        >
          {chefs.map((chef, index) => (
            <button
              key={chef.id}
              onClick={() => setActiveChef(index)}
              className={`relative w-16 h-16 rounded-full overflow-hidden transition-all duration-300 ${
                index === activeChef
                  ? 'ring-4 ring-spice-orange-400 scale-110'
                  : 'ring-2 ring-white/20 hover:ring-white/40'
              }`}
            >
              <Image
                src={chef.image}
                alt={chef.name}
                fill
                className="object-cover"
                sizes="64px"
              />
            </button>
          ))}
        </motion.div>

        {/* Kitchen Behind the Scenes */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="glass-card p-8 sm:p-12 text-center"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">
            Experience Our <span className="gradient-text">Open Kitchen</span>
          </h3>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Watch our chefs in action through our live kitchen cam. Transparency and
            quality are at the heart of everything we do.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { title: 'Live Kitchen Cam', desc: 'Watch your food being prepared' },
              { title: 'Quality Control', desc: 'Every dish inspected before delivery' },
              { title: 'Fresh Ingredients', desc: 'Sourced daily from local suppliers' },
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-spice-orange-500 to-spice-orange-600 rounded-xl mx-auto mb-3 flex items-center justify-center">
                  <ChefHat size={24} className="text-white" />
                </div>
                <h4 className="text-white font-semibold mb-2">{feature.title}</h4>
                <p className="text-white/70 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {showVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowVideo(false)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute inset-0 flex items-center justify-center text-white">
                <div className="text-center">
                  <Play size={64} className="mx-auto mb-4 opacity-60" />
                  <p className="text-xl">Chef Video Coming Soon</p>
                </div>
              </div>
              <button
                onClick={() => setShowVideo(false)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}