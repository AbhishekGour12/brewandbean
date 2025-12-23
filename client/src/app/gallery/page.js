'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { 
  GiCoffeeCup, GiCoffeeBeans, GiCupcake, GiShop,
  GiPouringChalice, GiCoffeePot, GiCakeSlice, GiFireBowl,
  GiHotSpices, GiTeapot, GiMilkCarton, GiPartyPopper,
  GiPlantRoots, GiFlowerPot, GiBarrel, GiCoffeeMug
} from 'react-icons/gi'
import { 
  BsInstagram, BsArrowRight, BsHeart, BsHeartFill,
  BsDownload, BsShare, BsZoomIn, BsCollection,
  BsCamera, BsGrid3X3, BsList, BsChevronLeft,
  BsChevronRight, BsPlayFill, BsClock, BsStarFill
} from 'react-icons/bs'
import { 
  FaInstagram, FaFacebook, FaTwitter, FaPinterest,
  FaRegHeart, FaHeart, FaDownload, FaShareAlt,
  FaExpand, FaTimes, FaFilter, FaRandom,
  FaRegClock, FaRegStar, FaUsers, FaCameraRetro
} from 'react-icons/fa'
import { TbCoffee } from 'react-icons/tb'
import { IoIosImages, IoIosColorFilter } from 'react-icons/io'

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedImage, setSelectedImage] = useState(null)
  const [viewMode, setViewMode] = useState('grid')
  const [likedImages, setLikedImages] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  const filters = [
    { id: 'all', name: 'All Photos', icon: IoIosImages, count: 24 },
    { id: 'drinks', name: 'Coffee Art', icon: GiPouringChalice, count: 8 },
    { id: 'food', name: 'Pastries', icon: GiCakeSlice, count: 6 },
    { id: 'space', name: 'Our Space', icon: GiShop, count: 6 },
    { id: 'events', name: 'Events', icon: GiPartyPopper, count: 4 },
  ]
const galleryItems = [
  { 
    id: 1, 
    category: 'drinks', 
    title: 'Latte Art Masterpiece', 
    description: 'Expert barista creating intricate latte art',
    likes: 245,
    date: '2 days ago',
    featured: true,
    color: 'from-blue-400 to-cyan-500',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1200'
  },
  { 
    id: 2, 
    category: 'space', 
    title: 'Cozy Corner', 
    description: 'Our favorite reading nook by the window',
    likes: 189,
    date: '1 week ago',
    featured: false,
    color: 'from-amber-600 to-orange-500',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200'
  },
  { 
    id: 3, 
    category: 'food', 
    title: 'Fresh Pastries', 
    description: 'Morning batch of croissants and danishes',
    likes: 312,
    date: '3 days ago',
    featured: true,
    color: 'from-rose-500 to-pink-600',
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1200'
  },
  { 
    id: 4, 
    category: 'drinks', 
    title: 'Cold Brew Setup', 
    description: 'Our signature cold brew brewing process',
    likes: 156,
    date: '5 days ago',
    featured: false,
    color: 'from-indigo-500 to-purple-600',
    image: 'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?q=80&w=1200'
  },
  { 
    id: 5, 
    category: 'space', 
    title: 'Outdoor Seating', 
    description: 'Sunny patio perfect for afternoon coffee',
    likes: 278,
    date: '1 week ago',
    featured: true,
    color: 'from-emerald-500 to-green-600',
    image: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1200'
  },
  { 
    id: 6, 
    category: 'food', 
    title: 'Breakfast Spread', 
    description: 'Complete breakfast with artisanal treats',
    likes: 421,
    date: '2 days ago',
    featured: true,
    color: 'from-yellow-500 to-orange-500',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=1200'
  },
  { 
    id: 7, 
    category: 'drinks', 
    title: 'Espresso Bar', 
    description: 'Professional espresso machine in action',
    likes: 198,
    date: '4 days ago',
    featured: false,
    color: 'from-coffee-600 to-coffee-800',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1200'
  },
  { 
    id: 8, 
    category: 'space', 
    title: 'Evening Vibes', 
    description: 'Cozy atmosphere during golden hour',
    likes: 367,
    date: '1 week ago',
    featured: true,
    color: 'from-violet-500 to-purple-600',
    image: 'https://images.unsplash.com/photo-1498654896293-37aacf113fd9?q=80&w=1200'
  },
  { 
    id: 9, 
    category: 'events', 
    title: 'Coffee Workshop', 
    description: 'Weekly coffee brewing workshop',
    likes: 234,
    date: '3 days ago',
    featured: false,
    color: 'from-cyan-500 to-blue-600',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1200'
  },
  { 
    id: 10, 
    category: 'drinks', 
    title: 'Pour Over Station', 
    description: 'Manual brew setup with precision scales',
    likes: 189,
    date: '6 days ago',
    featured: false,
    color: 'from-amber-400 to-orange-500',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200'
  },
  { 
    id: 11, 
    category: 'food', 
    title: 'Artisan Desserts', 
    description: 'Daily special desserts selection',
    likes: 289,
    date: '2 days ago',
    featured: true,
    color: 'from-pink-500 to-rose-600',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=1200'
  },
  { 
    id: 12, 
    category: 'events', 
    title: 'Live Music Night', 
    description: 'Friday night acoustic sessions',
    likes: 412,
    date: '1 week ago',
    featured: true,
    color: 'from-purple-500 to-pink-600',
    image: 'https://images.unsplash.com/photo-1512427691650-1f41b1cd58f2?q=80&w=1200'
  },
]


  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter)

  const featuredItems = galleryItems.filter(item => item.featured)

  const toggleLike = (id) => {
    if (likedImages.includes(id)) {
      setLikedImages(likedImages.filter(imageId => imageId !== id))
    } else {
      setLikedImages([...likedImages, id])
    }
  }

  const openLightbox = (item, index) => {
    setSelectedImage(item)
    setCurrentIndex(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const navigateImage = (direction) => {
    const items = filteredItems
    if (direction === 'next') {
      setCurrentIndex((prev) => (prev + 1) % items.length)
      setSelectedImage(items[(currentIndex + 1) % items.length])
    } else {
      setCurrentIndex((prev) => (prev - 1 + items.length) % items.length)
      setSelectedImage(items[(currentIndex - 1 + items.length) % items.length])
    }
  }

  useEffect(() => {
    if (isPlaying && !selectedImage) {
      const interval = setInterval(() => {
        navigateImage('next')
      }, 3000)
      return () => clearInterval(interval)
    }
  }, [isPlaying, selectedImage])

  return (
    <div className="min-h-screen bg-gradient-to-b from-coffee-50 to-cream-100">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-coffee-900 via-coffee-800 to-amber-900" />
        <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-5" />
        
        {/* Floating Coffee Elements */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            <GiCoffeeBeans className="text-coffee-300/10 text-xl" />
          </motion.div>
        ))}

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-block mb-8"
            >
              <div className="relative">
                <FaCameraRetro className="text-6xl text-gold-400" />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border-2 border-gold-400/30 rounded-full"
                />
              </div>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold font-playfair mb-6 text-cream-100">
              Coffee Gallery
            </h1>
            
            <p className="text-xl text-coffee-200 max-w-3xl mx-auto mb-12 leading-relaxed">
              A visual journey through our world of exceptional coffee, 
              artisanal creations, and unforgettable moments
            </p>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap justify-center gap-8 mb-12"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-gold-400 mb-2">24</div>
                <div className="text-coffee-300">Photos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold-400 mb-2">2.5K</div>
                <div className="text-coffee-300">Total Likes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold-400 mb-2">15</div>
                <div className="text-coffee-300">Featured</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold-400 mb-2">4</div>
                <div className="text-coffee-300">Categories</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-12 bg-gradient-to-r from-coffee-100 to-cream-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-bold font-playfair text-coffee-900 mb-2">
                  Featured Moments
                </h2>
                <p className="text-coffee-600">Most loved and shared photos</p>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className={`p-3 rounded-full ${isPlaying ? 'bg-gold-400 text-coffee-900' : 'bg-coffee-800 text-cream-100'}`}
                >
                  <BsPlayFill className="text-lg" />
                </button>
                <span className="text-sm text-coffee-600">Auto-play: {isPlaying ? 'ON' : 'OFF'}</span>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredItems.slice(0, 3).map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-coffee-800 to-amber-900 rounded-3xl transform group-hover:-rotate-2 transition-transform duration-300" />
                <div className="relative bg-cream-100 p-6 rounded-3xl shadow-2xl border border-coffee-200/50">
                  <div className="h-64 mb-6 rounded-2xl relative overflow-hidden">
  <img 
    src={item.image}
    alt={item.title}
    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
  />

  {/* Dark overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>

  {/* Featured Badge */}
  <div className="absolute top-4 left-4">
    <span className="px-3 py-1 rounded-full bg-gradient-to-r from-gold-400 to-amber-500 text-coffee-900 text-xs font-bold flex items-center">
      <BsStarFill className="mr-1" /> FEATURED
    </span>
  </div>

  {/* Like Button */}
  <button
    onClick={() => toggleLike(item.id)}
    className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
  >
    {likedImages.includes(item.id) ? (
      <FaHeart className="text-red-500" />
    ) : (
      <FaRegHeart />
    )}
  </button>
</div>

                  
                  <h3 className="text-xl font-bold text-coffee-900 mb-2">{item.title}</h3>
                  <p className="text-coffee-600 text-sm mb-4">{item.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-coffee-500">
                      <span className="flex items-center">
                        <FaRegHeart className="mr-1" />
                        {item.likes}
                      </span>
                      <span className="flex items-center">
                        <FaRegClock className="mr-1" />
                        {item.date}
                      </span>
                    </div>
                    <button
                      onClick={() => openLightbox(item, index)}
                      className="px-4 py-2 rounded-full bg-coffee-800 text-cream-100 text-sm hover:bg-coffee-900 transition-colors"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Gallery Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Gallery Controls */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div className="mb-6 md:mb-0">
              <h2 className="text-4xl font-bold font-playfair text-coffee-900 mb-2">
                Our Visual Story
              </h2>
              <p className="text-coffee-600">Browse through our collection of moments</p>
            </div>

            <div className="flex items-center space-x-4">
              {/* View Toggle */}
              <div className="flex items-center space-x-2 bg-coffee-100 p-1 rounded-full">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-full ${viewMode === 'grid' ? 'bg-coffee-800 text-cream-100' : 'text-coffee-700'}`}
                >
                  <BsGrid3X3 />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-full ${viewMode === 'list' ? 'bg-coffee-800 text-cream-100' : 'text-coffee-700'}`}
                >
                  <BsList />
                </button>
              </div>

              {/* Sort Button */}
              <button className="flex items-center space-x-2 px-4 py-2 rounded-full bg-coffee-800 text-cream-100 hover:bg-coffee-900 transition-colors">
                <FaFilter className="text-sm" />
                <span>Sort</span>
              </button>
            </div>
          </div>

          {/* Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex flex-wrap gap-3 mb-6">
              {filters.map((filter) => (
                <motion.button
                  key={filter.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`flex items-center px-5 py-3 rounded-full font-semibold transition-all duration-300 ${
                    activeFilter === filter.id
                      ? 'bg-gradient-to-r from-coffee-800 to-coffee-900 text-cream-100 shadow-lg'
                      : 'bg-coffee-100 text-coffee-700 hover:bg-coffee-200'
                  }`}
                >
                  <filter.icon className="mr-2 text-lg" />
                  {filter.name}
                  <span className={`ml-2 px-2 py-1 rounded-full text-xs ${
                    activeFilter === filter.id 
                      ? 'bg-cream-100/20 text-cream-100' 
                      : 'bg-coffee-300/30 text-coffee-700'
                  }`}>
                    {filter.count}
                  </span>
                </motion.button>
              ))}
            </div>

            {/* Randomize Button */}
            <div className="text-center">
              <motion.button
                whileHover={{ scale: 1.05, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const randomFilter = filters[Math.floor(Math.random() * filters.length)].id
                  setActiveFilter(randomFilter)
                }}
                className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-gold-400/10 to-amber-500/10 text-gold-600 font-semibold"
              >
                <FaRandom className="mr-2" />
                Surprise Me
              </motion.button>
            </div>
          </motion.div>

          {/* Gallery Grid */}
          <motion.div
            layout
            className={`${
              viewMode === 'grid' 
                ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
                : 'space-y-4'
            } gap-6`}
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -10 }}
                className={`group relative overflow-hidden rounded-3xl shadow-xl cursor-pointer card-hover ${
                  viewMode === 'list' ? 'flex' : ''
                }`}
                onClick={() => openLightbox(item, index)}
              >
                {viewMode === 'list' ? (
                  <>
                    <div className={`w-48 h-48 bg-gradient-to-br ${item.color} relative flex-shrink-0`}>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <GiCoffeeCup className="text-6xl text-white/20" />
                      </div>
                    </div>
                    <div className="p-6 flex-1">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold text-coffee-900">{item.title}</h3>
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={(e) => {
                              e.stopPropagation()
                              toggleLike(item.id)
                            }}
                            className="text-coffee-600 hover:text-red-500"
                          >
                            {likedImages.includes(item.id) ? <BsHeartFill /> : <BsHeart />}
                          </button>
                          <button className="text-coffee-600 hover:text-coffee-900">
                            <BsShare />
                          </button>
                        </div>
                      </div>
                      <p className="text-coffee-600 mb-4">{item.description}</p>
                      <div className="flex items-center space-x-4 text-sm text-coffee-500">
                        <span className="flex items-center">
                          <BsHeart className="mr-1" />
                          {item.likes} likes
                        </span>
                        <span className="flex items-center">
                          <BsClock className="mr-1" />
                          {item.date}
                        </span>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                  <div className="aspect-square relative overflow-hidden rounded-3xl">
  <img 
    src={item.image} 
    alt={item.title}
    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
  />

                     
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-coffee-900/90 via-coffee-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                        <div>
                          <h3 className="text-cream-100 text-xl font-bold mb-2">
                            {item.title}
                          </h3>
                          <p className="text-coffee-200 text-sm mb-4">
                            {item.description}
                          </p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center text-coffee-300 text-sm">
                              <BsClock className="mr-2" />
                              {item.date}
                            </div>
                            <div className="flex items-center space-x-2">
                              <button
                                onClick={(e) => {
                                  e.stopPropagation()
                                  toggleLike(item.id)
                                }}
                                className="text-coffee-300 hover:text-red-400"
                              >
                                {likedImages.includes(item.id) ? <BsHeartFill /> : <BsHeart />}
                              </button>
                              <button className="text-coffee-300 hover:text-coffee-200">
                                <BsShare />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Quick Actions */}
                      <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            toggleLike(item.id)
                          }}
                          className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30"
                        >
                          {likedImages.includes(item.id) ? <BsHeartFill /> : <BsHeart />}
                        </button>
                        <button className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30">
                          <BsZoomIn />
                        </button>
                      </div>

                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-semibold">
                          {item.category.toUpperCase()}
                        </span>
                      </div>
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Load More Button */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <button className="px-8 py-3 rounded-full bg-gradient-to-r from-coffee-800 to-coffee-900 text-cream-100 font-semibold hover:shadow-xl transition-shadow flex items-center mx-auto">
              <BsCollection className="mr-2" />
              Load More Photos
            </button>
          </motion.div>
        </div>
      </section>

      {/* Instagram CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-coffee-900 via-coffee-800 to-amber-900" />
        <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-5" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 mb-6">
                  <BsInstagram className="text-pink-400 mr-3 text-2xl" />
                  <span className="text-pink-300 font-semibold text-lg">#BREWANDBEAN</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-6 text-cream-100">
                  Join Our Visual Community
                </h2>
                
                <p className="text-xl text-coffee-200 mb-8 leading-relaxed">
                  Share your Brew & Bean moments with our community. 
                  Tag us for a chance to be featured on our wall and win monthly prizes!
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center text-coffee-300">
                    <BsStarFill className="text-gold-400 mr-3" />
                    <span>Featured photo of the week wins free coffee for a month</span>
                  </div>
                  <div className="flex items-center text-coffee-300">
                    <BsStarFill className="text-gold-400 mr-3" />
                    <span>Weekly Instagram Live coffee brewing sessions</span>
                  </div>
                  <div className="flex items-center text-coffee-300">
                    <BsStarFill className="text-gold-400 mr-3" />
                    <span>Exclusive discounts for active community members</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary flex items-center group relative overflow-hidden"
                  >
                    <BsInstagram className="mr-2" />
                    Follow Us
                    <BsArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                  
                  <button className="btn-secondary !border-cream-100 !text-cream-100 hover:!bg-cream-100/10">
                    View Community
                  </button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="grid grid-cols-2 gap-4">
                  {[1, 2, 3, 4].map((i) => (
                    <motion.div
                      key={i}
                      whileHover={{ y: -10 }}
                      className={`aspect-square rounded-2xl bg-gradient-to-br ${
                        i === 1 ? 'from-pink-500 to-rose-600' :
                        i === 2 ? 'from-amber-500 to-orange-600' :
                        i === 3 ? 'from-emerald-500 to-green-600' :
                        'from-indigo-500 to-purple-600'
                      } relative overflow-hidden`}
                    >
                      <div className="absolute inset-0 flex items-center justify-center">
                        <GiCoffeeCup className="text-6xl text-white/20" />
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                        <div className="flex items-center text-white text-sm">
                          <BsInstagram className="mr-2" />
                          @brewnbean
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                {/* Floating Stats */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="absolute -bottom-4 -right-4 bg-gradient-to-r from-pink-500 to-purple-600 p-6 rounded-2xl shadow-2xl"
                >
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">15.2K</div>
                    <div className="text-white/80 text-sm">Instagram Followers</div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative w-full max-w-6xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute -top-12 right-0 text-white hover:text-gold-400 text-3xl z-10"
              >
                <FaTimes />
              </button>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* Image Display */}
                <div className={`h-[500px] rounded-3xl bg-gradient-to-br ${selectedImage.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <GiCoffeeCup className="text-[200px] text-white/20" />
                  </div>
                  
                  {/* Navigation Arrows */}
                  <button
                    onClick={() => navigateImage('prev')}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors"
                  >
                    <BsChevronLeft className="mx-auto" />
                  </button>
                  <button
                    onClick={() => navigateImage('next')}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors"
                  >
                    <BsChevronRight className="mx-auto" />
                  </button>
                </div>

                {/* Image Details */}
                <div className="bg-coffee-900 p-8 rounded-3xl">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-3xl font-bold text-cream-100">{selectedImage.title}</h2>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => toggleLike(selectedImage.id)}
                        className="w-10 h-10 rounded-full bg-coffee-800 flex items-center justify-center text-cream-100 hover:bg-coffee-700"
                      >
                        {likedImages.includes(selectedImage.id) ? (
                          <BsHeartFill className="text-red-500" />
                        ) : (
                          <BsHeart />
                        )}
                      </button>
                      <button className="w-10 h-10 rounded-full bg-coffee-800 flex items-center justify-center text-cream-100 hover:bg-coffee-700">
                        <BsDownload />
                      </button>
                      <button className="w-10 h-10 rounded-full bg-coffee-800 flex items-center justify-center text-cream-100 hover:bg-coffee-700">
                        <BsShare />
                      </button>
                    </div>
                  </div>

                  <p className="text-coffee-200 mb-8 text-lg leading-relaxed">
                    {selectedImage.description}
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-center justify-between py-4 border-b border-coffee-800">
                      <span className="text-coffee-300">Category</span>
                      <span className="text-cream-100 font-semibold capitalize">{selectedImage.category}</span>
                    </div>
                    <div className="flex items-center justify-between py-4 border-b border-coffee-800">
                      <span className="text-coffee-300">Likes</span>
                      <span className="text-cream-100 font-semibold">{selectedImage.likes}</span>
                    </div>
                    <div className="flex items-center justify-between py-4 border-b border-coffee-800">
                      <span className="text-coffee-300">Date Posted</span>
                      <span className="text-cream-100 font-semibold">{selectedImage.date}</span>
                    </div>
                    <div className="flex items-center justify-between py-4">
                      <span className="text-coffee-300">Status</span>
                      <span className={`px-3 py-1 rounded-full ${
                        selectedImage.featured 
                          ? 'bg-gradient-to-r from-gold-400 to-amber-500 text-coffee-900' 
                          : 'bg-coffee-800 text-coffee-300'
                      }`}>
                        {selectedImage.featured ? 'Featured' : 'Regular'}
                      </span>
                    </div>
                  </div>

                  {/* Share Section */}
                  <div className="mt-8 pt-8 border-t border-coffee-800">
                    <h4 className="text-xl font-bold text-cream-100 mb-4">Share this photo</h4>
                    <div className="flex space-x-4">
                      {[FaInstagram, FaFacebook, FaTwitter, FaPinterest].map((Icon, i) => (
                        <button
                          key={i}
                          className="w-12 h-12 rounded-full bg-coffee-800 flex items-center justify-center text-cream-100 hover:scale-110 transition-transform"
                        >
                          <Icon />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Image Counter */}
              <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-white">
                {currentIndex + 1} / {filteredItems.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Gallery