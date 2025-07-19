'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  ArrowRight,
  Apple,
} from 'lucide-react'

const footerLinks = {
  company: [
    { name: 'About Us', href: '#' },
    { name: 'Our Story', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Press', href: '#' },
  ],
  support: [
    { name: 'Help Center', href: '#' },
    { name: 'Contact Us', href: '#' },
    { name: 'Track Order', href: '#' },
    { name: 'Returns', href: '#' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Cookie Policy', href: '#' },
    { name: 'Accessibility', href: '#' },
  ],
}

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Youtube, href: '#', label: 'YouTube' },
]

export default function Footer() {
  return (
    <footer className="bg-smoke-900 border-t border-white/10">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Newsletter Section */}
        <div className="py-12 border-b border-white/10">
          <div className="text-center mb-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Stay Updated with <span className="gradient-text">Urban Spice</span>
            </h3>
            <p className="text-white/80 max-w-2xl mx-auto">
              Get the latest updates on new dishes, exclusive offers, and special events
              delivered straight to your inbox.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-spice-orange-400"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-spice-orange-500 to-spice-orange-600 text-white px-8 py-4 rounded-2xl font-semibold flex items-center justify-center space-x-2 shadow-lg"
            >
              <span>Subscribe</span>
              <ArrowRight size={20} />
            </motion.button>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold gradient-text mb-4">Yusra Saleem</h2>
            <p className="text-white/80 mb-6 leading-relaxed">
              Bringing you the finest spice-infused cuisine with premium ingredients
              and authentic flavors from around the world.
            </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-white/80">
                  <MapPin size={16} className="text-spice-orange-400" />
                  <span className="text-sm">123 Spice Street, Seattle, WA 98101</span>
                </div>
                <div className="flex items-center space-x-3 text-white/80">
                  <Phone size={16} className="text-spice-orange-400" />
                  <span className="text-sm">(555) 123-SPICE</span>
                </div>
                <div className="flex items-center space-x-3 text-white/80">
                  <Mail size={16} className="text-spice-orange-400" />
                  <span className="text-sm">hello@urbanspice.com</span>
                </div>
                <div className="flex items-center space-x-3 text-white/80">
                  <Clock size={16} className="text-spice-orange-400" />
                  <span className="text-sm">Daily: 11:00 AM - 11:00 PM</span>
                </div>
              </div>
            </div>

            {/* Links Sections */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                <div>
                  <h4 className="text-white font-semibold mb-4">Company</h4>
                  <ul className="space-y-3">
                    {footerLinks.company.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          className="text-white/70 hover:text-spice-orange-400 transition-colors text-sm"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-white font-semibold mb-4">Support</h4>
                  <ul className="space-y-3">
                    {footerLinks.support.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          className="text-white/70 hover:text-spice-orange-400 transition-colors text-sm"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-white font-semibold mb-4">Legal</h4>
                  <ul className="space-y-3">
                    {footerLinks.legal.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          className="text-white/70 hover:text-spice-orange-400 transition-colors text-sm"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="lg:col-span-1">
              <h4 className="text-white font-semibold mb-4">Follow Us</h4>
              <p className="text-white/70 text-sm mb-6">
                Stay connected for the latest updates and behind-the-scenes content.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-white/10 hover:bg-spice-orange-500 rounded-xl transition-colors group"
                    aria-label={social.label}
                  >
                    <social.icon
                      size={20}
                      className="text-white/70 group-hover:text-white transition-colors"
                    />
                  </motion.a>
                ))}
              </div>

              {/* App Download */}
              <div className="mt-8">
                <h5 className="text-white font-medium mb-4">Download Our App</h5>
                <div className="space-y-3">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full glass-morphism p-3 rounded-xl hover:bg-white/20 transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <Apple size={20} className="text-black" />
                      </div>
                      <div className="text-left">
                        <div className="text-white text-xs">Download on the</div>
                        <div className="text-white font-semibold text-sm">App Store</div>
                      </div>
                    </div>
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full glass-morphism p-3 rounded-xl hover:bg-white/20 transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 text-black"
                  >
                    <path d="M3 2.5v19l15-9.5L3 2.5z" />
                  </svg>
                      </div>
                      <div className="text-left">
                        <div className="text-white text-xs">Get it on</div>
                        <div className="text-white font-semibold text-sm">Google Play</div>
                      </div>
                    </div>
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/10">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
            <p className="text-white/60 text-sm">
              © 2024 Yusra Saleem. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <span className="text-white/60 text-sm">Made with ❤️ by Yusra Saleem </span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 text-sm font-medium">All systems operational</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
