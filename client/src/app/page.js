'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { 
  GiCoffeeCup, GiCoffeeBeans, GiCupcake, GiCoffeePot, 
  GiPouringChalice, GiHotSpices, GiTeapot, GiCakeSlice 
} from 'react-icons/gi'
import { 
  BsArrowRight, BsClock, BsStarFill, BsStar, 
  BsInstagram, BsFacebook, BsTwitter, BsChevronDown 
} from 'react-icons/bs'
import { 
  FaStar, FaLeaf, FaSeedling, FaHeart, FaRegSmileBeam,
  FaMugHot, FaAward, FaUsers, FaMapMarkerAlt
} from 'react-icons/fa'
import { IoIosFlash } from 'react-icons/io'
import { TbCoffee } from 'react-icons/tb'
import { FiCoffee } from 'react-icons/fi'
import Image from 'next/image'

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [currentHour, setCurrentHour] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    setCurrentHour(new Date().getHours())
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isOpen = currentHour >= 7 && currentHour < 22

  const features = [
    {
      icon: GiCoffeeBeans,
      title: 'Premium Single Origin Beans',
      description: 'Ethically sourced from sustainable farms worldwide',
      color: 'from-coffee-600 to-coffee-800',
      delay: 0.1
    },
    {
      icon: GiPouringChalice,
      title: 'Expert Brewing',
      description: 'Each cup crafted by certified baristas',
      color: 'from-amber-600 to-orange-600',
      delay: 0.2
    },
    {
      icon: FaLeaf,
      title: 'Eco-Conscious',
      description: '100% biodegradable packaging & zero waste',
      color: 'from-emerald-500 to-green-600',
      delay: 0.3
    },
    {
      icon: GiCakeSlice,
      title: 'Artisan Pastries',
      description: 'Freshly baked daily by our pastry chef',
      color: 'from-rose-500 to-pink-600',
      delay: 0.4
    },
  ]
const popularItems = [
  { 
    name: 'Ethiopian Yirgacheffe', 
    price: '$6.50', 
    rating: 4.9,
    description: 'Floral & citrus notes',
    popular: true,
    img: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=80'
  },
  { 
    name: 'Caramel Macchiato', 
    price: '$6.25', 
    rating: 4.8,
    description: 'Velvety smooth with caramel',
    popular: true,
    img: 'https://images.unsplash.com/photo-1526401485004-2aa7c3a32590?w=800&q=80'
  },
  { 
    name: 'Cold Brew Float', 
    price: '$7.50', 
    rating: 4.9,
    description: 'With vanilla ice cream',
    popular: true,
    img: 'https://images.unsplash.com/photo-1561882468-9110e03e0f78?w=800&q=80'
  },
  { 
    name: 'Matcha Ceremonial', 
    price: '$7.25', 
    rating: 4.7,
    description: 'Premium ceremonial grade',
    popular: false,
    img: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800&q=80'
  },
  { 
    name: 'Turkish Coffee', 
    price: '$5.75', 
    rating: 4.6,
    description: 'Traditional preparation',
    popular: true,
    img: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800&q=80'
  },
  { 
    name: 'Hazelnut Mocha', 
    price: '$6.95', 
    rating: 4.8,
    description: 'Rich chocolate & hazelnut',
    popular: false,
    img: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80'
  },
]


  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Coffee Blogger',
      text: 'Best coffee experience in the city! The attention to detail is incredible.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Michael Chen',
      role: 'Regular Customer',
      text: 'The atmosphere and coffee quality keep me coming back every morning.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Emma Rodriguez',
      role: 'Food Critic',
      text: 'Artisan approach to coffee that sets a new standard in the industry.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
    },
  ]

  const stats = [
    { value: '200+', label: 'Coffee Varieties', icon: GiCoffeeBeans },
    { value: '10K+', label: 'Happy Customers', icon: FaRegSmileBeam },
    { value: '50+', label: 'Awards Won', icon: FaAward },
    { value: '24/7', label: 'Fresh Roasting', icon: IoIosFlash },
  ]

  const processes = [
    { step: 1, title: 'Bean Selection', description: 'Hand-picked from sustainable farms', icon: FaSeedling },
    { step: 2, title: 'Artisan Roasting', description: 'Small batch roasting for consistency', icon: GiCoffeePot },
    { step: 3, title: 'Expert Brewing', description: 'Precision brewing by trained baristas', icon: GiPouringChalice },
    { step: 4, title: 'Perfect Serving', description: 'Served at optimal temperature', icon: GiCoffeeCup },
  ]

  return (
    <div className="overflow-hidden">
      {/* Hero Section with Parallax */}
     {/* ================== HERO SECTION ================== */}
<section className="relative min-h-screen flex items-center justify-center overflow-hidden">

  {/* Animated Background */}
  <motion.div 
    className="absolute inset-0 bg-gradient-to-br from-coffee-900 via-coffee-800 to-amber-900"
    initial={{ scale: 1.2 }}
    animate={{ scale: 1 }}
    transition={{ duration: 1.5 }}
  />

  {/* Floating Coffee Beans */}
  {[...Array(8)].map((_, i) => (
    <motion.div
      key={i}
      className="absolute"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      }}
      animate={{
        y: [0, -30, 0],
        rotate: [0, 360],
      }}
      transition={{
        duration: 3 + Math.random() * 2,
        repeat: Infinity,
        delay: Math.random() * 2,
      }}
    >
      <GiCoffeeBeans className="text-coffee-300/20 text-3xl" />
    </motion.div>
  ))}

  {/* Main Content */}
  <div className="container mx-auto px-4 relative z-10">
    <div className="grid lg:grid-cols-2 gap-12 items-center">

      {/* =================== LEFT CONTENT =================== */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        {/* NOW SERVING TAG */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r 
                     from-gold-400/20 to-amber-500/20 backdrop-blur-sm border 
                     border-gold-400/30 mb-6"
        >
          <IoIosFlash className="text-gold-400 mr-2 animate-pulse" />
          <span className="text-gold-400 font-semibold">NOW SERVING</span>

          <div className="ml-2 flex items-center">
            <div className={`w-2 h-2 rounded-full ${isOpen ? 'bg-green-400 animate-ping' : 'bg-red-400'} mr-2`} />
            <span className="text-white text-sm">
              {isOpen ? 'OPEN NOW' : 'CLOSED'}
            </span>
          </div>
        </motion.div>

        {/* HEADLINE */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-6xl md:text-8xl font-bold font-playfair mb-6 leading-tight"
        >
          <span className="bg-gradient-to-r from-cream-100 via-gold-300 to-cream-100 
                           bg-clip-text text-transparent">
            Artisan
          </span>
          <span className="block text-cream-100 mt-2">Coffee</span>
          <span className="block text-gold-400 text-5xl md:text-6xl mt-4">Experience</span>
        </motion.h1>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-xl text-coffee-200 mb-8 max-w-2xl leading-relaxed"
        >
          Where every cup tells a story, and every sip creates a memory. 
          Experience the perfect harmony of premium beans, expert craftsmanship, 
          and cozy ambiance.
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap gap-4"
        >
          {/* Primary Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary flex items-center group relative overflow-hidden"
          >
            <span className="relative z-10">Explore Menu</span>
            <BsArrowRight className="ml-2 relative z-10 group-hover:translate-x-1 transition-transform" />
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-gold-500 to-gold-600"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>

          {/* Secondary Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-secondary group relative overflow-hidden"
          >
            <span className="relative z-10">Book a Table</span>
            <motion.div
              className="absolute inset-0 bg-coffee-800"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </motion.div>

        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 flex items-center space-x-8"
        >
          <div className="flex -space-x-3">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-10 h-10 rounded-full border-2 border-coffee-800 overflow-hidden">
                <div className="w-full h-full bg-coffee-700" />
              </div>
            ))}
          </div>

          <div>
            <div className="flex items-center text-gold-400">
              {[...Array(5)].map((_, i) => (
                <BsStarFill key={i} className="mr-1" />
              ))}
            </div>
            <p className="text-coffee-200 text-sm">4.9/5 from 1,200+ reviews</p>
          </div>
        </motion.div>
      </motion.div>

      {/* =================== RIGHT SIDE IMAGE =================== */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="relative"
      >
        <div className="relative w-full h-[600px] rounded-3xl overflow-hidden shadow-2xl shadow-coffee-900/50">

          {/* REAL HIGH-QUALITY CAFE IMAGE */}
          <img 
            src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1600&q=80"
            alt="Coffee Shop"
            className="w-full h-full object-cover"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-transparent" />

          {/* Floating Coffee Cup */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute top-1/4 left-1/4"
          >
            <GiCoffeeCup className="text-cream-100 text-8xl opacity-40" />
          </motion.div>

          {/* Rotating Beans */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="absolute top-1/2 right-1/4"
          >
            <GiCoffeeBeans className="text-gold-400 text-6xl opacity-40" />
          </motion.div>
        </div>

        {/* Floating Stats Card */}
        <motion.div
          whileHover={{ scale: 1.1, rotate: 2 }}
          className="absolute -bottom-6 -right-6 bg-cream-100 p-6 rounded-2xl shadow-2xl shadow-coffee-900/50"
        >
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-coffee-800 to-amber-700 bg-clip-text text-transparent">
              13+
            </div>
            <div className="text-coffee-800 font-semibold">Years of Excellence</div>
            <div className="flex justify-center mt-2">
              <FaAward className="text-gold-500" />
            </div>
          </div>
        </motion.div>

        {/* Floating Hours Card */}
        <motion.div
          whileHover={{ scale: 1.05, y: -5 }}
          className="absolute -top-6 left-6 bg-coffee-800 p-4 rounded-2xl shadow-2xl border border-gold-400/30"
        >
          <div className="flex items-center space-x-3">
            <BsClock className="text-gold-400 text-xl" />
            <div>
              <div className="text-cream-100 font-semibold">7AM - 10PM</div>
              <div className="text-coffee-300 text-sm">Daily</div>
            </div>
          </div>
        </motion.div>
      </motion.div>

    </div>
  </div>

  {/* Scroll Indicator */}
  <motion.div
    animate={{ y: [0, 10, 0] }}
    transition={{ duration: 2, repeat: Infinity }}
    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
  >
    <BsChevronDown className="text-cream-100/50 text-2xl" />
  </motion.div>

</section>


      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-b from-coffee-900 to-coffee-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center">
                    <stat.icon className="text-2xl text-coffee-900" />
                  </div>
                </div>
                <div className="text-4xl font-bold text-cream-100 mb-2">{stat.value}</div>
                <div className="text-coffee-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section with 3D Effect */}
      <section className="py-20 bg-gradient-to-b from-coffee-800 to-coffee-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-gold-400/10 text-gold-400 font-semibold mb-4">
              OUR PROMISE
            </span>
            <h2 className="text-5xl font-bold font-playfair mb-6 text-coffee-900">
              Why We're Different
            </h2>
            <p className="text-xl text-coffee-600 max-w-3xl mx-auto">
              We don't just serve coffee, we craft experiences that awaken your senses
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50, rotateX: 90 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ delay: feature.delay, duration: 0.6 }}
                whileHover={{ y: -15, scale: 1.03 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-coffee-200 to-cream-100 rounded-3xl transform group-hover:rotate-3 transition-transform duration-300" />
                <div className="relative bg-cream-100 p-8 rounded-3xl shadow-2xl border border-coffee-200/50 h-full">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 mx-auto`}
                  >
                    <feature.icon className="text-3xl text-cream-100" />
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-3 text-center text-coffee-900">
                    {feature.title}
                  </h3>
                  <p className="text-coffee-600 text-center leading-relaxed">
                    {feature.description}
                  </p>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '40%' }}
                    transition={{ delay: 0.5 }}
                    className="h-1 bg-gradient-to-r from-gold-400 to-amber-500 mx-auto mt-6 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-coffee-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold font-playfair mb-6 text-coffee-900">
              Our Coffee Journey
            </h2>
            <p className="text-xl text-coffee-600 max-w-3xl mx-auto">
              From bean to cup, every step is crafted with passion
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-gold-400 to-amber-500 hidden lg:block" />
            
            <div className="space-y-12 lg:space-y-0">
              {processes.map((process, index) => (
                <motion.div
                  key={process.step}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className={`flex flex-col lg:flex-row items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                >
                  <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="bg-cream-100 p-8 rounded-3xl shadow-xl border border-coffee-200/50"
                    >
                      <div className="flex items-center mb-6">
                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-coffee-800 to-coffee-900 flex items-center justify-center mr-6">
                          <span className="text-2xl font-bold text-cream-100">{process.step}</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-coffee-900">{process.title}</h3>
                          <p className="text-coffee-600 mt-2">{process.description}</p>
                        </div>
                        <process.icon className="text-3xl text-gold-500 ml-4" />
                      </div>
                    </motion.div>
                  </div>
                  <div className="lg:w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Popular Items - Enhanced */}
      <section className="py-20 bg-gradient-to-b from-coffee-50 to-cream-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-gold-400/10 to-amber-500/10 mb-6">
              <FaMugHot className="text-gold-500 mr-3" />
              <span className="text-gold-600 font-semibold text-lg">MOST POPULAR</span>
            </div>
            <h2 className="text-5xl font-bold font-playfair mb-6 text-coffee-900">
              Customer Favorites
            </h2>
            <p className="text-xl text-coffee-600 max-w-2xl mx-auto">
              Discover our most-loved creations, crafted with perfection
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -15 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-coffee-800 to-amber-900 rounded-3xl transform group-hover:-rotate-2 transition-transform duration-300" />
                <div className="relative bg-cream-100 p-8 rounded-3xl shadow-2xl border border-coffee-200/50 h-full">
                  {item.popular && (
                    <div className="absolute -top-3 -right-3">
                      <span className="px-4 py-2 rounded-full bg-gradient-to-r from-gold-400 to-amber-500 text-coffee-900 font-bold text-sm flex items-center">
                        <BsStarFill className="mr-1" /> BESTSELLER
                      </span>
                    </div>
                  )}
                  
                 <div className="h-48 mb-6 rounded-2xl overflow-hidden relative group">
  <img
    src={item.img}
    alt={item.name}
    className="w-full h-full object-cover transform group-hover:scale-110 transition-all duration-500"
  />

  {/* Nice soft top fade */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
</div>

                  
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-2xl font-bold text-coffee-900 mb-2">{item.name}</h3>
                      <p className="text-coffee-600 text-sm">{item.description}</p>
                    </div>
                    <span className="text-3xl font-bold bg-gradient-to-r from-coffee-800 to-amber-700 bg-clip-text text-transparent">
                      {item.price}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between mt-6">
                    <div className="flex items-center">
                      <div className="flex text-gold-500 mr-3">
                        {[...Array(5)].map((_, i) => (
                          <BsStarFill key={i} className={i < Math.floor(item.rating) ? '' : 'opacity-30'} />
                        ))}
                      </div>
                      <span className="text-coffee-800 font-semibold">{item.rating}</span>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="px-6 py-2 rounded-full bg-gradient-to-r from-coffee-800 to-coffee-900 text-cream-100 font-semibold text-sm hover:shadow-lg transition-shadow"
                    >
                      Order Now
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <button className="btn-primary text-lg px-10 py-4">
              View Complete Menu
              <BsArrowRight className="ml-3 inline" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-coffee-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-gold-400/10 to-amber-500/10 mb-6">
              <FaHeart className="text-gold-500 mr-3" />
              <span className="text-gold-400 font-semibold text-lg">LOVED BY MANY</span>
            </div>
            <h2 className="text-5xl font-bold font-playfair mb-6 text-cream-100">
              What Our Customers Say
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="relative"
              >
                <div className="absolute -top-4 -left-4 text-6xl text-gold-400/20">
                  "
                </div>
                <div className="bg-gradient-to-br from-coffee-800 to-coffee-900 p-8 rounded-3xl border border-gold-400/20 h-full">
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 rounded-full overflow-hidden mr-4 border-2 border-gold-400/30">
                      {/* Replace with actual image */}
                      <div className="w-full h-full bg-coffee-700" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-cream-100">{testimonial.name}</h4>
                      <p className="text-coffee-300">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-coffee-200 mb-6 italic leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div className="flex text-gold-400">
                    {[...Array(5)].map((_, i) => (
                      <BsStarFill key={i} />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-coffee-900 via-coffee-800 to-amber-900" />
        <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-5" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="inline-block mb-8"
            >
              <GiCoffeeBeans className="text-6xl text-gold-400" />
            </motion.div>
            
            <h2 className="text-5xl md:text-6xl font-bold font-playfair mb-8 text-cream-100">
              Ready for Your Perfect Cup?
            </h2>
            
            <p className="text-xl text-coffee-200 mb-12 max-w-2xl mx-auto leading-relaxed">
              Join us for an unforgettable coffee experience. Reserve your table now or 
              visit us today for a taste of perfection.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 rounded-full bg-gradient-to-r from-gold-400 to-amber-500 text-coffee-900 font-bold text-lg hover:shadow-xl transition-shadow"
              >
                <FaMapMarkerAlt className="inline mr-3" />
                Visit Our Cafe
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 rounded-full border-2 border-gold-400 text-cream-100 font-bold text-lg hover:bg-gold-400/10 transition-colors"
              >
                Reserve a Table
              </motion.button>
            </div>
            
            <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-gold-400 mb-2">7AM</div>
                <div className="text-coffee-300">Opening Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold-400 mb-2">3</div>
                <div className="text-coffee-300">City Locations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold-400 mb-2">24/7</div>
                <div className="text-coffee-300">Online Orders</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home