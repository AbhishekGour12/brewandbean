'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { 
  GiCoffeeCup, GiCoffeeBeans, GiCupcake, GiCroissant,
  GiPouringChalice, GiCoffeePot, GiFireBowl, GiHotSpices,
  GiMilkCarton, GiBubblingBowl, GiFruitTree, GiChocolateBar,
  GiIceCreamCone, GiCakeSlice, GiDonut, GiHoneyJar
} from 'react-icons/gi'
import { 
  TbCoffee, TbPlant, TbLeaf, TbSugar
} from 'react-icons/tb'
import { 
  BsPlus, BsDash, BsCart3, BsStarFill, BsClock,
  BsFire, BsFilter, BsSearch, BsArrowRight,
  BsHeart, BsHeartFill, BsShare, BsTag
} from 'react-icons/bs'
import { 
  FaLeaf, FaFire, FaSnowflake, FaStar,
  FaRegStar, FaHeart, FaRegHeart, FaPlus,
  FaMinus, FaShoppingCart, FaFilter
} from 'react-icons/fa'
import { IoIosFlame, IoIosSnow, IoIosLeaf } from 'react-icons/io'
import { MdLocalFlorist, MdLocalCafe } from 'react-icons/md'

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('coffee')
  const [cart, setCart] = useState([])
  const [selectedItem, setSelectedItem] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [filter, setFilter] = useState('all')
  const [favorites, setFavorites] = useState([])

  const categories = [
    { 
      id: 'coffee', 
      name: 'Coffee', 
      icon: GiCoffeeCup,
      description: 'Artisanal coffee brewed to perfection',
      count: 12
    },
    { 
      id: 'tea', 
      name: 'Tea & More', 
      icon: TbCoffee,
      description: 'Traditional and creative tea blends',
      count: 8
    },
    { 
      id: 'pastries', 
      name: 'Pastries', 
      icon: GiCroissant,
      description: 'Freshly baked treats daily',
      count: 10
    },
    { 
      id: 'special', 
      name: 'Specialty', 
      icon: GiCoffeeBeans,
      description: 'Unique creations and seasonal specials',
      count: 6
    },
    { 
      id: 'cold', 
      name: 'Cold Brews', 
      icon: FaSnowflake,
      description: 'Refreshing cold coffee creations',
      count: 6
    },
    { 
      id: 'seasonal', 
      name: 'Seasonal', 
      icon: IoIosLeaf,
      description: 'Limited-time seasonal offerings',
      count: 4
    },
  ]

  const menuItems = {
  coffee: [
    { 
      id: 1,
      name: 'Ethiopian Yirgacheffe', 
      description: 'Single origin with floral and citrus notes, light roast',
      price: 6.50, 
      popular: true,
      calories: 5,
      time: '5 min',
      rating: 4,
      ingredients: ['Ethiopian beans', 'Filter water', 'Natural process'],
      icon: GiCoffeeBeans,
      color: 'from-amber-600 to-orange-700',
      image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1200'
    },
    { 
      id: 2,
      name: 'Espresso', 
      description: 'Double shot of our house blend, rich and bold',
      price: 4.50, 
      popular: true,
      calories: 3,
      time: '2 min',
      rating: 4.8,
      ingredients: ['House blend', '9-bar pressure', 'Fresh grind'],
      icon: GiCoffeePot,
      color: 'from-coffee-700 to-coffee-900',
      image: 'https://images.unsplash.com/photo-1512568400610-62da28bc8a13?w=1200'
    },
    { 
      id: 3,
      name: 'Cappuccino', 
      description: 'Perfect balance of espresso, steamed milk, and microfoam',
      price: 5.75, 
      popular: true,
      calories: 120,
      time: '4 min',
      rating: 4.9,
      ingredients: ['Espresso', 'Whole milk', 'Cocoa powder'],
      icon: GiPouringChalice,
      color: 'from-amber-500 to-amber-700',
      image: 'https://images.unsplash.com/photo-1522960931446-3d5b2a67f09a?w=1200'
    },
    { 
      id: 4,
      name: 'Caramel Macchiato', 
      description: 'Vanilla syrup, steamed milk, espresso, caramel drizzle',
      price: 6.25, 
      popular: true,
      calories: 250,
      time: '5 min',
      rating: 4.7,
      ingredients: ['Espresso', 'Caramel', 'Vanilla syrup', 'Milk'],
      icon: GiMilkCarton,
      color: 'from-yellow-500 to-amber-600',
      image: 'https://images.unsplash.com/photo-1587248720329-0f6c1d02c34b?w=1200'
    },
    { 
      id: 5,
      name: 'Pour Over', 
      description: 'Slow-drip method highlighting single origin characteristics',
      price: 7.50, 
      popular: true,
      calories: 5,
      time: '6 min',
      rating: 4.9,
      ingredients: ['Single origin beans', 'Gooseneck kettle', 'Paper filter'],
      icon: GiCoffeeCup,
      color: 'from-coffee-600 to-amber-800',
      image: 'https://images.unsplash.com/photo-1512568400610-62da28bc8a13?w=1200'
    },
    { 
      id: 6,
      name: 'Turkish Coffee', 
      description: 'Traditional preparation with cardamom, unfiltered',
      price: 5.75, 
      popular: false,
      calories: 10,
      time: '8 min',
      rating: 4.6,
      ingredients: ['Fine grind', 'Cardamom', 'Ibrik pot', 'Sugar'],
      icon: GiFireBowl,
      color: 'from-amber-800 to-brown-900',
      image: 'https://images.unsplash.com/photo-1607083200847-149bdd3a3f2b?w=1200'
    },
  ],

  tea: [
    { 
      id: 7,
      name: 'Matcha Ceremonial', 
      description: 'Premium ceremonial grade matcha, whisked to perfection',
      price: 7.25, 
      popular: true,
      calories: 5,
      time: '6 min',
      rating: 4.8,
      ingredients: ['Ceremonial matcha', '80°C water', 'Bamboo whisk'],
      icon: TbLeaf,
      color: 'from-emerald-500 to-green-700',
      image: 'https://images.unsplash.com/photo-1559054663-03a24a28b6fa?w=1200'
    },
    { 
      id: 8,
      name: 'Chai Latte', 
      description: 'Spiced black tea with steamed milk and honey',
      price: 5.50, 
      popular: true,
      calories: 180,
      time: '5 min',
      rating: 4.7,
      ingredients: ['Black tea', 'Cardamom', 'Cinnamon', 'Ginger', 'Milk'],
      icon: GiHotSpices,
      color: 'from-orange-600 to-amber-700',
      image: 'https://images.unsplash.com/photo-1511918984145-48de785d4c4e?w=1200'
    },
    { 
      id: 9,
      name: 'Jasmine Pearl', 
      description: 'Hand-rolled green tea pearls with jasmine blossoms',
      price: 6.00, 
      popular: false,
      calories: 2,
      time: '4 min',
      rating: 4.6,
      ingredients: ['Jasmine pearls', '80°C water'],
      icon: MdLocalFlorist,
      color: 'from-green-400 to-emerald-600',
      image: 'https://images.unsplash.com/photo-1470941431761-998ead1d26f9?w=1200'
    },
    { 
      id: 10,
      name: 'Herbal Infusion', 
      description: 'Caffeine-free blend of chamomile, mint, and lemongrass',
      price: 5.00, 
      popular: false,
      calories: 2,
      time: '5 min',
      rating: 4.5,
      ingredients: ['Chamomile', 'Peppermint', 'Lemongrass', 'Honey'],
      icon: GiFruitTree,
      color: 'from-lime-400 to-green-500',
      image: 'https://images.unsplash.com/photo-1515263487990-61b07816b324?w=1200'
    },
  ],

  pastries: [
    { 
      id: 11,
      name: 'Butter Croissant', 
      description: 'Flaky, buttery layers baked to golden perfection',
      price: 4.50, 
      popular: true,
      calories: 310,
      time: 'Fresh daily',
      rating: 4.9,
      ingredients: ['French butter', 'Organic flour', 'Sea salt'],
      icon: GiCroissant,
      color: 'from-yellow-400 to-amber-500',
      image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=1200'
    },
    { 
      id: 12,
      name: 'Almond Danish', 
      description: 'Crunchy almonds, sweet frangipane, flaky pastry',
      price: 5.25, 
      popular: true,
      calories: 420,
      time: 'Fresh daily',
      rating: 4.8,
      ingredients: ['Almond paste', 'Puff pastry', 'Powdered sugar'],
      icon: GiCakeSlice,
      color: 'from-amber-400 to-orange-500',
      image: 'https://images.unsplash.com/photo-1601027849799-970c7e61f87d?w=1200'
    },
    { 
      id: 13,
      name: 'Cinnamon Roll', 
      description: 'Freshly baked, gooey center, cream cheese frosting',
      price: 6.00, 
      popular: true,
      calories: 480,
      time: 'Fresh hourly',
      rating: 4.9,
      ingredients: ['Cinnamon', 'Brown sugar', 'Cream cheese', 'Dough'],
      icon: GiDonut,
      color: 'from-amber-600 to-brown-700',
      image: 'https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?w=1200'
    },
    { 
      id: 14,
      name: 'Chocolate Croissant', 
      description: 'Pain au chocolat with dark chocolate batons',
      price: 5.50, 
      popular: false,
      calories: 380,
      time: 'Fresh daily',
      rating: 4.7,
      ingredients: ['Dark chocolate', 'Butter', 'Flour', 'Egg wash'],
      icon: GiChocolateBar,
      color: 'from-amber-800 to-brown-900',
      image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=1200'
    },
  ],

  special: [
    { 
      id: 15,
      name: 'Coffee Flight', 
      description: 'Taste 3 different origins side by side',
      price: 15.00, 
      popular: true,
      calories: 15,
      time: '10 min',
      rating: 4.9,
      ingredients: ['Ethiopian', 'Colombian', 'Guatemalan beans'],
      icon: GiCoffeeCup,
      color: 'from-coffee-600 to-coffee-900',
      image: 'https://images.unsplash.com/photo-1523362628745-0c100150b683?w=1200'
    },
    { 
      id: 16,
      name: 'Affogato', 
      description: 'Vanilla gelato drowned in hot espresso',
      price: 8.50, 
      popular: true,
      calories: 280,
      time: '4 min',
      rating: 4.9,
      ingredients: ['Vanilla gelato', 'Double espresso', 'Chocolate shavings'],
      icon: GiIceCreamCone,
      color: 'from-amber-300 to-amber-500',
      image: 'https://images.unsplash.com/photo-1587731262271-c1c6e0dae68d?w=1200'
    },
    { 
      id: 17,
      name: 'Honey Lavender Latte', 
      description: 'House-made lavender syrup with local honey',
      price: 7.75, 
      popular: true,
      calories: 210,
      time: '6 min',
      rating: 4.8,
      ingredients: ['Espresso', 'Lavender syrup', 'Local honey', 'Steamed milk'],
      icon: GiHoneyJar,
      color: 'from-purple-400 to-pink-500',
      image: 'https://images.unsplash.com/photo-1562539158-14baa1a548bb?w=1200'
    },
    { 
      id: 18,
      name: 'Spiced Mocha', 
      description: 'Dark chocolate, espresso, cayenne, and cinnamon',
      price: 6.95, 
      popular: false,
      calories: 320,
      time: '5 min',
      rating: 4.7,
      ingredients: ['Espresso', 'Dark chocolate', 'Cayenne', 'Cinnamon', 'Milk'],
      icon: GiHotSpices,
      color: 'from-red-500 to-orange-600',
      image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?w=1200'
    },
  ],

  cold: [
    { 
      id: 19,
      name: 'Cold Brew Float', 
      description: '16-hour steeped cold brew with vanilla ice cream',
      price: 7.50, 
      popular: true,
      calories: 320,
      time: '2 min',
      rating: 4.9,
      ingredients: ['Cold brew', 'Vanilla ice cream', 'Cocoa powder'],
      icon: FaSnowflake,
      color: 'from-blue-400 to-cyan-500',
      image: 'https://images.unsplash.com/photo-1580281658438-809fdb95d432?w=1200'
    },
    { 
      id: 20,
      name: 'Iced Matcha Latte', 
      description: 'Ceremonial matcha shaken with ice and milk',
      price: 6.75, 
      popular: true,
      calories: 180,
      time: '3 min',
      rating: 4.8,
      ingredients: ['Matcha', 'Ice', 'Milk', 'Simple syrup'],
      icon: TbLeaf,
      color: 'from-emerald-400 to-green-500',
      image: 'https://images.unsplash.com/photo-1572441710534-680f8e77f693?w=1200'
    },
  ],

  seasonal: [
    { 
      id: 21,
      name: 'Pumpkin Spice Latte', 
      description: 'Seasonal favorite with real pumpkin and spices',
      price: 6.95, 
      popular: true,
      calories: 380,
      time: '5 min',
      rating: 4.9,
      ingredients: ['Espresso', 'Pumpkin puree', 'Pumpkin spice', 'Steamed milk'],
      icon: IoIosLeaf,
      color: 'from-orange-500 to-amber-600',
      image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=1200'
    },
    { 
      id: 22,
      name: 'Peppermint Mocha', 
      description: 'Holiday special with peppermint and dark chocolate',
      price: 7.25, 
      popular: true,
      calories: 420,
      time: '6 min',
      rating: 4.8,
      ingredients: ['Espresso', 'Peppermint syrup', 'Dark chocolate', 'Whipped cream'],
      icon: IoIosSnow,
      color: 'from-red-400 to-pink-500',
      image: 'https://images.unsplash.com/photo-1546776310-eef45dd6d63c?w=1200'
    },
  ],
}


  const filters = [
    { id: 'all', name: 'All Items', icon: BsFilter },
    { id: 'popular', name: 'Popular', icon: BsFire },
    { id: 'new', name: 'New', icon: FaPlus },
    { id: 'seasonal', name: 'Seasonal', icon: BsTag },
  ]

  const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0)
  const cartCount = cart.reduce((count, item) => count + item.quantity, 0)

  const addToCart = (item) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(cartItem => cartItem.id === item.id)
      if (existingItem) {
        return prevCart.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      } else {
        return [...prevCart, { ...item, quantity: 1 }]
      }
    })
  }

  const removeFromCart = (itemId) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === itemId)
      if (existingItem && existingItem.quantity > 1) {
        return prevCart.map(item =>
          item.id === itemId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      } else {
        return prevCart.filter(item => item.id !== itemId)
      }
    })
  }

  const toggleFavorite = (itemId) => {
    if (favorites.includes(itemId)) {
      setFavorites(favorites.filter(id => id !== itemId))
    } else {
      setFavorites([...favorites, itemId])
    }
  }

  const filteredItems = menuItems[activeCategory].filter(item => {
    if (filter === 'popular') return item.popular
    if (filter === 'new') return item.id > 20 // Example logic for new items
    if (filter === 'seasonal') return activeCategory === 'seasonal'
    return true
  })

  const searchResults = menuItems[activeCategory].filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const currentItems = searchTerm ? searchResults : filteredItems

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
                <GiCoffeeCup className="text-6xl text-gold-400" />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border-2 border-gold-400/30 rounded-full"
                />
              </div>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold font-playfair mb-6 text-cream-100">
              Artisan Menu
            </h1>
            
            <p className="text-xl text-coffee-200 max-w-3xl mx-auto mb-12 leading-relaxed">
              Discover our carefully crafted selection of specialty coffee, 
              handcrafted beverages, and fresh pastries made with passion
            </p>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap justify-center gap-8 mb-12"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-gold-400 mb-2">46+</div>
                <div className="text-coffee-300">Menu Items</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold-400 mb-2">4.8</div>
                <div className="text-coffee-300">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold-400 mb-2">28</div>
                <div className="text-coffee-300">Popular Picks</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold-400 mb-2">6</div>
                <div className="text-coffee-300">Categories</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Search & Filter Bar */}
      <section className="sticky top-20 z-30 bg-cream-100 shadow-lg py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-xl">
              <BsSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-coffee-400" />
              <input
                type="text"
                placeholder="Search for coffee, pastries, or tea..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-coffee-50 rounded-full border border-coffee-200 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
              />
            </div>

            {/* Filter Buttons */}
            <div className="flex gap-2 overflow-x-auto">
              {filters.map((filterItem) => (
                <button
                  key={filterItem.id}
                  onClick={() => setFilter(filterItem.id)}
                  className={`flex items-center px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                    filter === filterItem.id
                      ? 'bg-gradient-to-r from-coffee-800 to-coffee-900 text-cream-100'
                      : 'bg-coffee-100 text-coffee-700 hover:bg-coffee-200'
                  }`}
                >
                  <filterItem.icon className="mr-2" />
                  {filterItem.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Categories Sidebar */}
            <div className="lg:w-1/4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-cream-100 rounded-3xl shadow-lg p-6 sticky top-32"
              >
                <h3 className="text-2xl font-bold font-playfair text-coffee-900 mb-6">
                  Categories
                </h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all ${
                        activeCategory === category.id
                          ? 'bg-gradient-to-r from-coffee-800 to-coffee-900 text-cream-100'
                          : 'text-coffee-700 hover:bg-coffee-100'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          activeCategory === category.id
                            ? 'bg-cream-100/20'
                            : 'bg-coffee-100'
                        }`}>
                          <category.icon className={activeCategory === category.id ? 'text-cream-100' : 'text-coffee-600'} />
                        </div>
                        <div className="text-left">
                          <div className="font-semibold">{category.name}</div>
                          <div className={`text-sm ${
                            activeCategory === category.id
                              ? 'text-coffee-300'
                              : 'text-coffee-500'
                          }`}>
                            {category.count} items
                          </div>
                        </div>
                      </div>
                      {activeCategory === category.id && (
                        <BsArrowRight className="text-cream-100" />
                      )}
                    </button>
                  ))}
                </div>

                {/* Cart Summary */}
                <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-coffee-800/10 to-amber-900/10 border border-coffee-200">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-bold text-coffee-900">Your Order</h4>
                    <div className="flex items-center space-x-2">
                      <BsCart3 className="text-coffee-600" />
                      <span className="text-coffee-900 font-bold">{cartCount}</span>
                    </div>
                  </div>
                  {cart.length > 0 ? (
                    <>
                      <div className="space-y-3 mb-4">
                        {cart.slice(0, 2).map((item) => (
                          <div key={item.id} className="flex items-center justify-between text-sm">
                            <span className="text-coffee-700 truncate">{item.name}</span>
                            <span className="text-coffee-900 font-semibold">
                              {item.quantity} × ${item.price.toFixed(2)}
                            </span>
                          </div>
                        ))}
                        {cart.length > 2 && (
                          <div className="text-center text-coffee-600 text-sm">
                            +{cart.length - 2} more items
                          </div>
                        )}
                      </div>
                      <div className="flex items-center justify-between border-t border-coffee-200 pt-4">
                        <span className="font-bold text-coffee-900">Total</span>
                        <span className="text-2xl font-bold text-coffee-900">
                          ${cartTotal.toFixed(2)}
                        </span>
                      </div>
                      <button className="w-full mt-4 py-3 rounded-full bg-gradient-to-r from-coffee-800 to-coffee-900 text-cream-100 font-semibold hover:shadow-lg transition-shadow">
                        Checkout Now
                      </button>
                    </>
                  ) : (
                    <div className="text-center py-8">
                      <BsCart3 className="text-4xl text-coffee-300 mx-auto mb-4" />
                      <p className="text-coffee-600">Your cart is empty</p>
                      <p className="text-coffee-500 text-sm mt-2">Add items to get started</p>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>

            {/* Menu Items Grid */}
            <div className="lg:w-3/4">
              {/* Category Header */}
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8"
              >
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-4xl font-bold font-playfair text-coffee-900 mb-2">
                      {categories.find(c => c.id === activeCategory)?.name}
                    </h2>
                    <p className="text-coffee-600">
                      {categories.find(c => c.id === activeCategory)?.description}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2 text-coffee-600">
                    <BsClock className="text-gold-500" />
                    <span>Fresh daily</span>
                  </div>
                </div>

                {/* Category Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="bg-cream-100 p-4 rounded-2xl shadow-sm border border-coffee-200/50">
                    <div className="text-2xl font-bold text-coffee-900 mb-1">
                      {currentItems.length}
                    </div>
                    <div className="text-coffee-600 text-sm">Items Available</div>
                  </div>
                  <div className="bg-cream-100 p-4 rounded-2xl shadow-sm border border-coffee-200/50">
                    <div className="text-2xl font-bold text-coffee-900 mb-1">
                      {currentItems.filter(item => item.popular).length}
                    </div>
                    <div className="text-coffee-600 text-sm">Popular Choices</div>
                  </div>
                  <div className="bg-cream-100 p-4 rounded-2xl shadow-sm border border-coffee-200/50">
                    <div className="text-2xl font-bold text-coffee-900 mb-1">
  {(
    currentItems.reduce((acc, item) => acc + item.rating, 0) / currentItems.length
  )
    .toFixed(1)
    .replace(/\.0$/, '')}
</div>

                    <div className="text-coffee-600 text-sm">Avg. Rating</div>
                  </div>
                  <div className="bg-cream-100 p-4 rounded-2xl shadow-sm border border-coffee-200/50">
                    <div className="text-2xl font-bold text-coffee-900 mb-1">
                      ${Math.min(...currentItems.map(item => item.price)).toFixed(2)}
                    </div>
                    <div className="text-coffee-600 text-sm">Starting From</div>
                  </div>
                </div>
              </motion.div>

              {/* Menu Items */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ y: -10 }}
                    className="group relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-coffee-800 to-amber-900 rounded-3xl transform group-hover:-rotate-2 transition-transform duration-300" />
                    <div className="relative bg-cream-100 p-6 rounded-3xl shadow-xl border border-coffee-200/50 h-full">
                      {/* Item Image/Icon */}
                     <div className="h-40 mb-6 rounded-2xl relative overflow-hidden">
  <img 
    src={item.image}
    alt={item.name}
    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
  />

  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                        
                        {/* Popular Badge */}
                        {item.popular && (
                          <div className="absolute top-4 left-4">
                            <span className="px-3 py-1 rounded-full bg-gradient-to-r from-gold-400 to-amber-500 text-coffee-900 text-xs font-bold flex items-center">
                              <BsFire className="mr-1" /> POPULAR
                            </span>
                          </div>
                        )}

                        {/* Favorite Button */}
                        <button
                          onClick={() => toggleFavorite(item.id)}
                          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                        >
                          {favorites.includes(item.id) ? (
                            <BsHeartFill className="text-red-500" />
                          ) : (
                            <BsHeart />
                          )}
                        </button>

                        {/* Rating */}
                        <div className="absolute bottom-4 right-4 flex items-center px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm">
                          <BsStarFill className="text-yellow-400 mr-1" />
                          <span className="text-white text-sm font-semibold">{item.rating}</span>
                        </div>
                      </div>

                      {/* Item Details */}
                      <div className="flex justify-between items-start mb-3">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-coffee-900 mb-2">{item.name}</h3>
                          <p className="text-coffee-600 text-sm mb-4 leading-relaxed">{item.description}</p>
                        </div>
                      </div>

                      {/* Nutrition & Time */}
                      <div className="flex items-center justify-between mb-6 text-sm text-coffee-500">
                        <div className="flex items-center">
                          <BsFire className="mr-1" />
                          {item.calories} cal
                        </div>
                        <div className="flex items-center">
                          <BsClock className="mr-1" />
                          {item.time}
                        </div>
                      </div>

                      {/* Ingredients */}
                      <div className="mb-6">
                        <div className="text-coffee-700 font-semibold mb-2">Ingredients:</div>
                        <div className="flex flex-wrap gap-2">
                          {item.ingredients.slice(0, 3).map((ingredient, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 rounded-full bg-coffee-100 text-coffee-700 text-xs"
                            >
                              {ingredient}
                            </span>
                          ))}
                          {item.ingredients.length > 3 && (
                            <span className="px-3 py-1 rounded-full bg-coffee-100 text-coffee-700 text-xs">
                              +{item.ingredients.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Price & Actions */}
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-3xl font-bold text-coffee-900">
                            ${item.price.toFixed(2)}
                          </div>
                          <div className="text-coffee-600 text-sm">per serving</div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="w-10 h-10 rounded-full bg-coffee-100 text-coffee-700 hover:bg-coffee-200 transition-colors flex items-center justify-center"
                          >
                            <BsDash />
                          </button>
                          <span className="text-coffee-900 font-bold text-lg">
                            {cart.find(cartItem => cartItem.id === item.id)?.quantity || 0}
                          </span>
                          <button
                            onClick={() => addToCart(item)}
                            className="w-10 h-10 rounded-full bg-gradient-to-r from-coffee-800 to-coffee-900 text-cream-100 hover:shadow-lg transition-shadow flex items-center justify-center"
                          >
                            <BsPlus />
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* No Results */}
              {currentItems.length === 0 && (
                <div className="text-center py-20">
                  <GiCoffeeCup className="text-6xl text-coffee-300 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-coffee-900 mb-3">
                    No items found
                  </h3>
                  <p className="text-coffee-600">
                    Try a different search or filter
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Seasonal Specials */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-coffee-900 via-coffee-800 to-amber-900" />
        <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-5" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-gold-400/20 to-amber-500/20 mb-6">
                  <BsTag className="text-gold-400 mr-3 text-xl" />
                  <span className="text-gold-300 font-semibold text-lg">LIMITED TIME</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-6 text-cream-100">
                  Seasonal Specials
                </h2>
                
                <p className="text-xl text-coffee-200 mb-8 leading-relaxed">
                  Experience our rotating selection of seasonal creations, 
                  crafted with fresh ingredients and inspired by the time of year.
                </p>
                
                <div className="space-y-6 mb-8">
                  {menuItems.seasonal.map((item) => (
                    <div key={item.id} className="flex items-center p-4 rounded-2xl bg-white/10 backdrop-blur-sm">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mr-4`}>
                        <item.icon className="text-2xl text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-cream-100">{item.name}</h4>
                        <p className="text-coffee-300 text-sm">{item.description}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-gold-400">${item.price.toFixed(2)}</div>
                        <button
                          onClick={() => addToCart(item)}
                          className="mt-2 px-4 py-2 rounded-full bg-gold-400 text-coffee-900 text-sm font-semibold hover:bg-gold-300 transition-colors"
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                
                <button className="px-8 py-3 rounded-full border-2 border-gold-400 text-gold-400 font-bold text-lg hover:bg-gold-400/10 transition-colors">
                  View All Seasonal Items
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-600 via-orange-700 to-amber-900" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <GiCoffeeCup className="text-[200px] text-white/20" />
                  </div>
                  
                  {/* Floating Elements */}
                  <motion.div
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute top-20 left-20"
                  >
                    <GiCoffeeBeans className="text-4xl text-gold-400/40" />
                  </motion.div>
                  <motion.div
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                    className="absolute bottom-20 right-20"
                  >
                    <GiHotSpices className="text-4xl text-amber-400/40" />
                  </motion.div>
                </div>
                
                {/* Floating Stats */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="absolute -bottom-6 -right-6 bg-gradient-to-r from-gold-400 to-amber-500 p-8 rounded-2xl shadow-2xl"
                >
                  <div className="text-center">
                    <div className="text-4xl font-bold text-coffee-900">4</div>
                    <div className="text-coffee-800 font-semibold">Seasonal Items</div>
                    <div className="text-coffee-700 text-sm mt-2">Available Now</div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-coffee-800 via-coffee-700 to-amber-900" />
            <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-5" />
            
            <div className="relative p-12 md:p-20 text-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="inline-block mb-8"
              >
                <GiCoffeeBeans className="text-6xl text-gold-400" />
              </motion.div>
              
              <h3 className="text-4xl md:text-5xl font-bold font-playfair mb-8 text-cream-100">
                Ready to Order?
              </h3>
              
              <p className="text-xl text-coffee-200 mb-12 max-w-2xl mx-auto leading-relaxed">
                Place your order online for pickup or delivery, 
                or visit us to experience our full menu in person.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="px-10 py-4 rounded-full bg-gradient-to-r from-gold-400 to-amber-500 text-coffee-900 font-bold text-lg hover:shadow-xl transition-shadow">
                  <FaShoppingCart className="inline mr-3" />
                  Order Online Now
                </button>
                
                <button className="px-10 py-4 rounded-full border-2 border-gold-400 text-cream-100 font-bold text-lg hover:bg-gold-400/10 transition-colors">
                  <BsArrowRight className="inline mr-3" />
                  Download Full Menu
                </button>
              </div>
              
              <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold-400 mb-2">15 min</div>
                  <div className="text-coffee-300">Avg. Pickup Time</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold-400 mb-2">Free</div>
                  <div className="text-coffee-300">Delivery over $25</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold-400 mb-2">24/7</div>
                  <div className="text-coffee-300">Online Orders</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold-400 mb-2">100%</div>
                  <div className="text-coffee-300">Fresh Ingredients</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Menu