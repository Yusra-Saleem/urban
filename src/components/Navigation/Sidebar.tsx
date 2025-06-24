'use client'

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Home,
  UtensilsCrossed,
  ShoppingBag,
  Calendar,
  User,
  Heart,
  Settings,
  X,
  Menu,
} from 'lucide-react'

interface SidebarProps {
  isOpen: boolean
  onToggle: () => void
}

const menuItems = [
  { icon: Home, label: 'Home', href: '#home' },
  { icon: UtensilsCrossed, label: 'Menu', href: '#menu' },
  { icon: ShoppingBag, label: 'Orders', href: '#orders' },
  { icon: Calendar, label: 'Reservations', href: '#reservations' },
  { icon: Heart, label: 'Favorites', href: '#favorites' },
  { icon: User, label: 'Profile', href: '#profile' },
  { icon: Settings, label: 'Settings', href: '#settings' },
]

export default function Sidebar({ isOpen, onToggle }: SidebarProps) {
  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={onToggle}
        className="fixed top-4 left-4 z-50 lg:hidden magnetic-btn glass-morphism p-3 rounded-xl"
        aria-label="Toggle navigation menu"
      >
        {isOpen ? (
          <X size={24} className="text-white" />
        ) : (
          <Menu size={24} className="text-white" />
        )}
      </button>

      {/* Sidebar */}
      <AnimatePresence>
        <motion.aside
          initial={{ x: -280 }}
          animate={{ x: isOpen ? 0 : -280 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed left-0 top-0 z-40 h-full w-72 glass-morphism border-r border-white/10 lg:translate-x-0 lg:static lg:z-auto"
        >
          <div className="flex flex-col h-full p-6">
            {/* Logo */}
            <div className="mb-12 mt-4">
              <h1 className="text-2xl font-bold gradient-text">UrbanSpice</h1>
              <p className="text-white/60 text-sm mt-1">Premium Food Delivery</p>
            </div>

            {/* Navigation */}
            <nav className="flex-1">
              <ul className="space-y-2">
                {menuItems.map((item, index) => (
                  <motion.li
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <a
                      href={item.href}
                      className="flex items-center space-x-4 p-3 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300 group"
                      onClick={() => window.innerWidth < 1024 && onToggle()}
                    >
                      <item.icon
                        size={20}
                        className="group-hover:text-spice-orange-400 transition-colors duration-300"
                      />
                      <span className="font-medium">{item.label}</span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>

            {/* User Profile */}
            <div className="border-t border-white/10 pt-6">
              <div className="flex items-center space-x-3 p-3 rounded-xl bg-white/5">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-spice-orange-400 to-spice-orange-600 flex items-center justify-center">
                  <User size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-white font-medium text-sm">John Doe</p>
                  <p className="text-white/60 text-xs">Premium Member</p>
                </div>
              </div>
            </div>
          </div>
        </motion.aside>
      </AnimatePresence>

      {/* Overlay for mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onToggle}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 lg:hidden"
          />
        )}
      </AnimatePresence>
    </>
  )
}