'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Filter, Heart, Plus, Star, Flame } from 'lucide-react'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import Image from 'next/image'

const categories = ['All', 'Spicy Mains', 'Appetizers', 'Desserts', 'Beverages']

const menuItems = [
  {
    id: 1,
    name: 'Dragon Fire Noodles',
    category: 'Spicy Mains',
    price: 24.99,
    rating: 4.9,
    reviews: 234,
    image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Fiery Szechuan noodles with premium vegetables and secret spice blend',
    spiceLevel: 5,
    cookTime: '15-20 min',
    isVegetarian: true,
    badges: ['Popular', 'Spicy'],
  },
  {
    id: 2,
    name: 'Blazing Curry Bowl',
    category: 'Spicy Mains',
    price: 22.50,
    rating: 4.8,
    reviews: 189,
    image: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Rich coconut curry with tender chicken and aromatic spices',
    spiceLevel: 4,
    cookTime: '20-25 min',
    isVegetarian: false,
    badges: ['Chef Special'],
  },
  {
    id: 3,
    name: 'Spiced Tandoori Platter',
    category: 'Spicy Mains',
    price: 28.99,
    rating: 4.9,
    reviews: 156,
    image: 'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Clay oven grilled meats with traditional Indian spices',
    spiceLevel: 4,
    cookTime: '25-30 min',
    isVegetarian: false,
    badges: ['Signature'],
  },
  {
    id: 4,
    name: 'Fire Wings Combo',
    category: 'Appetizers',
    price: 16.99,
    rating: 4.7,
    reviews: 298,
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Crispy wings tossed in our signature hot sauce',
    spiceLevel: 5,
    cookTime: '12-15 min',
    isVegetarian: false,
    badges: ['Popular'],
  },
  {
    id: 5,
    name: 'Molten Chocolate Lava',
    category: 'Desserts',
    price: 12.99,
    rating: 4.8,
    reviews: 167,
    image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Warm chocolate cake with molten center and vanilla ice cream',
    spiceLevel: 0,
    cookTime: '8-10 min',
    isVegetarian: true,
    badges: ['Sweet'],
  },
  {
    id: 6,
    name: 'Spiced Chai Latte',
    category: 'Beverages',
    price: 6.99,
    rating: 4.6,
    reviews: 89,
    image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Traditional chai blend with steamed milk and aromatic spices',
    spiceLevel: 1,
    cookTime: '5 min',
    isVegetarian: true,
    badges: ['Warming'],
  },
]

export default function MenuSection() {
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
  })
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')
  const [favorites, setFavorites] = useState<number[]>([])

  const filteredItems = menuItems.filter(item => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(fav => fav !== id)
        : [...prev, id]
    )
  }

  return (
    <section className="section-spacing bg-smoke-800" ref={elementRef} id="menu">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-responsive-3xl font-bold text-white mb-4 sm:mb-6">
            Our <span className="gradient-text">Signature Menu</span>
          </h2>
          <p className="text-responsive-lg text-white/80 max-w-3xl mx-auto">
            Discover our carefully crafted dishes, each bursting with authentic flavors
            and premium ingredients sourced from around the world.
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 sm:mb-12"
        >
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            {/* Search Bar */}
            <div className="relative flex-1">
              <Search size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/60" />
              <input
                type="text"
                placeholder="Search dishes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white/10 border border-white/20 rounded-2xl pl-12 pr-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-spice-orange-400 focus:border-transparent"
              />
            </div>

            {/* Filter Button */}
            <button className="glass-morphism px-6 py-3 rounded-2xl text-white flex items-center space-x-2 hover:bg-white/20 transition-colors">
              <Filter size={20} />
              <span>Filters</span>
            </button>
          </div>

          {/* Category Tabs */}
          <div className="flex space-x-2 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-2xl font-medium whitespace-nowrap transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-spice-orange-500 to-spice-orange-600 text-white'
                    : 'glass-morphism text-white/80 hover:text-white hover:bg-white/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card overflow-hidden group hover:bg-white/15 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  {item.badges.map((badge) => (
                    <span
                      key={badge}
                      className="bg-spice-orange-500 text-white text-xs px-2 py-1 rounded-full font-medium"
                    >
                      {badge}
                    </span>
                  ))}
                </div>

                {/* Favorite Button */}
                <button
                  onClick={() => toggleFavorite(item.id)}
                  className="absolute top-4 right-4 p-2 bg-black/50 backdrop-blur-sm rounded-full hover:bg-black/70 transition-colors"
                >
                  <Heart
                    size={16}
                    className={`transition-colors ${
                      favorites.includes(item.id)
                        ? 'text-spice-orange-400 fill-current'
                        : 'text-white'
                    }`}
                  />
                </button>

                {/* Cook Time */}
                <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">
                  {item.cookTime}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-spice-orange-400 transition-colors">
                    {item.name}
                  </h3>
                  <div className="flex items-center space-x-1">
                    {[...Array(item.spiceLevel)].map((_, i) => (
                      <Flame
                        key={i}
                        size={12}
                        className="text-spice-orange-400 fill-current"
                      />
                    ))}
                  </div>
                </div>

                <p className="text-white/80 text-sm mb-4 line-clamp-2">
                  {item.description}
                </p>

                {/* Rating and Reviews */}
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center space-x-1">
                    <Star size={14} className="text-yellow-400 fill-current" />
                    <span className="text-white font-medium text-sm">{item.rating}</span>
                  </div>
                  <span className="text-white/60 text-sm">({item.reviews} reviews)</span>
                  {item.isVegetarian && (
                    <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                      Veg
                    </span>
                  )}
                </div>

                {/* Price and Add Button */}
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-spice-orange-400">
                    ${item.price}
                  </span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-spice-orange-500 to-spice-orange-600 text-white p-3 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <Plus size={20} />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="glass-morphism text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white/20 transition-colors"
          >
            Load More Dishes
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}