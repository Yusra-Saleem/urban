'use client'

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react'
import Image from 'next/image'
import type { CartItem } from '@/types'

interface CartSidebarProps {
  isOpen: boolean
  onClose: () => void
  items: CartItem[]
  onUpdateQuantity: (id: number, quantity: number) => void
  onRemoveItem: (id: number) => void
}

export default function CartSidebar({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
}: CartSidebarProps) {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const deliveryFee = 4.99
  const tax = subtotal * 0.08
  const total = subtotal + deliveryFee + tax

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed right-0 top-0 h-full w-full max-w-md glass-morphism border-l border-white/10 z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <div className="flex items-center space-x-3">
                <ShoppingBag size={24} className="text-spice-orange-400" />
                <h2 className="text-xl font-bold text-white">Your Order</h2>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-white/10 rounded-xl transition-colors"
              >
                <X size={24} className="text-white" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="text-center py-12">
                  <ShoppingBag size={48} className="text-white/30 mx-auto mb-4" />
                  <p className="text-white/60">Your cart is empty</p>
                  <p className="text-white/40 text-sm mt-2">
                    Add some delicious items to get started!
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="glass-card p-4"
                    >
                      <div className="flex items-start space-x-4">
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={60}
                          height={60}
                          className="w-15 h-15 rounded-xl object-cover"
                        />
                        <div className="flex-1">
                          <h3 className="text-white font-semibold text-sm mb-1">
                            {item.name}
                          </h3>
                          <p className="text-spice-orange-400 font-bold">
                            ${item.price.toFixed(2)}
                          </p>
                        </div>
                        <button
                          onClick={() => onRemoveItem(item.id)}
                          className="p-1 hover:bg-white/10 rounded-lg transition-colors"
                        >
                          <Trash2 size={16} className="text-white/60" />
                        </button>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center space-x-3">
                          <button
                            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                            className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                          >
                            <Minus size={16} className="text-white" />
                          </button>
                          <span className="text-white font-medium w-8 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                            className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                          >
                            <Plus size={16} className="text-white" />
                          </button>
                        </div>
                        <span className="text-white font-bold">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-white/10 p-6">
                {/* Order Summary */}
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-white/80">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-white/80">
                    <span>Delivery Fee</span>
                    <span>${deliveryFee.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-white/80">
                    <span>Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="border-t border-white/10 pt-3">
                    <div className="flex justify-between text-white font-bold text-lg">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                {/* Checkout Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-spice-orange-500 to-spice-orange-600 text-white py-4 rounded-2xl font-semibold shadow-lg"
                >
                  Proceed to Checkout
                </motion.button>

                <p className="text-white/60 text-xs text-center mt-3">
                  Estimated delivery: 25-35 minutes
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}