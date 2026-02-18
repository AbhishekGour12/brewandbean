'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { GiCoffeeBeans, GiHamburgerMenu, GiCoffeeCup, GiCakeSlice } from 'react-icons/gi'
import { IoClose } from 'react-icons/io5'
import { BsTelephone, BsClock, BsImages, BsHouseDoor } from 'react-icons/bs'
import Link from 'next/link'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: 'Home', path: '/', icon: <BsHouseDoor /> },
    { name: 'Menu', path: '/menu', icon: <GiCoffeeCup /> },
    { name: 'About', path: '/about', icon: <GiCakeSlice /> },
    { name: 'Gallery', path: '/gallery', icon: <BsImages /> },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white/30 backdrop-blur-xl shadow-lg border-b border-white/20">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="relative"
            >
              <GiCoffeeBeans className="text-4xl text-coffee-900 drop-shadow-md group-hover:text-gold-600 transition" />
              <div className="absolute inset-0 bg-gold-400/40 blur-lg opacity-0 group-hover:opacity-80 rounded-full"></div>
            </motion.div>
            <div>
              <h1 className="text-2xl font-bold font-playfair text-coffee-900 tracking-wide">
                BarleyHub
              </h1>
              <p className="text-xs text-coffee-600 -mt-1">The Art of Finest Coffee</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <motion.div 
                key={item.name}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.92 }}
                className="relative group"
              >
                <Link href={item.path} className="flex items-center gap-2 text-coffee-800 hover:text-gold-600 transition font-medium">
                  <span className="text-lg">{item.icon}</span>
                  {item.name}
                </Link>

                {/* Elegant Hover Underline */}
                <span className="absolute -bottom-1 left-0 w-0 h-[3px] bg-gradient-to-r from-gold-500 to-coffee-600 rounded-full group-hover:w-full transition-all duration-300"></span>
              </motion.div>
            ))}

            {/* Right Quick Info & CTA */}
            <div className="flex items-center space-x-5">
              <div className="flex items-center gap-2 text-coffee-700">
                <BsClock className="text-gold-600" />
                <span className="text-sm font-medium">7 AM – 10 PM</span>
              </div>
<motion.button
  whileHover={{ scale: 1.08, backgroundColor: "#f5d68a15" }}
  whileTap={{ scale: 0.95 }}
  className="px-5 py-2 border-2 border-gold-500 text-gold-600 font-semibold rounded-lg
             backdrop-blur-xl transition-all shadow-sm hover:shadow-md"
>
  <BsTelephone className="inline mr-2" />
  Reserve
</motion.button>



            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-3xl text-coffee-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <IoClose /> : <GiHamburgerMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/30 backdrop-blur-xl border-t border-white/20"
          >
            <div className="container mx-auto px-4 py-5">
              <div className="flex flex-col space-y-4">
                
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.path}
                    className="flex items-center gap-3 text-lg text-coffee-800 py-2 border-b border-coffee-200/40 hover:text-gold-600 transition"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="text-xl">{item.icon}</span>
                    {item.name}
                  </Link>
                ))}

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4 w-full py-3 bg-gold-600 text-white rounded-lg font-semibold shadow-md"
                >
                  <BsTelephone className="inline mr-2" />
                  Reserve Table
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header
