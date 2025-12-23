'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  GiCoffeeBeans, GiCoffeeCup, GiPlantSeed, GiCoffeePot,
  GiPouringChalice, GiCakeSlice, GiShop, GiThreeLeaves,
  GiStarShuriken, GiCoffeeMug, GiHotSpices
} from 'react-icons/gi'
import { 
  FaLeaf, FaHandsHelping, FaAward, FaSeedling, 
  FaHeart, FaUsers, FaSmile, FaChartLine,
  FaGlobeAmericas, FaRecycle, FaTrophy
} from 'react-icons/fa'
import { 
  BsPeople, BsClockHistory, BsLightning, BsStarFill,
  BsArrowRight, BsChevronLeft, BsChevronRight
} from 'react-icons/bs'
import { TbCoffee, TbPlant } from 'react-icons/tb'
import { IoIosFlower, IoIosLeaf } from 'react-icons/io'
import { MdLocalFlorist, MdEco } from 'react-icons/md'

const About = () => {
  const [activeTab, setActiveTab] = useState('story')
  const [currentTeamIndex, setCurrentTeamIndex] = useState(0)

  const values = [
    { 
      icon: GiPlantSeed, 
      title: 'Sustainable Sourcing', 
      description: 'Direct trade partnerships with ethical coffee farms worldwide',
      color: 'from-emerald-500 to-green-600',
      stat: '100%',
      statLabel: 'Ethically Sourced'
    },
    { 
      icon: FaRecycle, 
      title: 'Eco-Conscious', 
      description: 'Zero-waste initiative with 100% compostable packaging',
      color: 'from-cyan-500 to-blue-600',
      stat: '98%',
      statLabel: 'Waste Recycled'
    },
    { 
      icon: FaHandsHelping, 
      title: 'Community First', 
      description: 'Supporting local artists, musicians, and small businesses',
      color: 'from-amber-500 to-orange-600',
      stat: '50+',
      statLabel: 'Local Partners'
    },
    { 
      icon: BsPeople, 
      title: 'Inclusive Spaces', 
      description: 'Creating welcoming environments for everyone to connect',
      color: 'from-purple-500 to-pink-600',
      stat: '24/7',
      statLabel: 'Community Events'
    },
    { 
      icon: FaSeedling, 
      title: 'Farm Fresh', 
      description: 'Daily delivery of organic ingredients from local farms',
      color: 'from-lime-500 to-green-500',
      stat: 'Daily',
      statLabel: 'Fresh Delivery'
    },
    { 
      icon: FaGlobeAmericas, 
      title: 'Global Vision', 
      description: 'Bringing authentic coffee cultures from around the world',
      color: 'from-indigo-500 to-purple-600',
      stat: '15+',
      statLabel: 'Countries'
    },
  ]

  const timeline = [
    { 
      year: '2010', 
      event: 'First shop opened in Brooklyn', 
      description: 'Started with just 3 tables and a dream',
      icon: GiShop,
      achievements: ['First 100 customers', 'Local newspaper feature']
    },
    { 
      year: '2014', 
      event: 'Started direct trade program', 
      description: 'Established partnerships with Ethiopian coffee farms',
      icon: GiCoffeeBeans,
      achievements: ['Ethical sourcing certified', 'First sustainability award']
    },
    { 
      year: '2016', 
      event: 'Opened second location', 
      description: 'Expanded to Manhattan with rooftop garden',
      icon: FaChartLine,
      achievements: ['Doubled team size', 'Rooftop garden feature']
    },
    { 
      year: '2018', 
      event: 'Won Best Coffee Shop award', 
      description: 'Recognized by New York Coffee Association',
      icon: FaTrophy,
      achievements: ['National recognition', 'Featured in Food & Wine']
    },
    { 
      year: '2020', 
      event: 'Launched roasting facility', 
      description: 'Started in-house roasting for maximum freshness',
      icon: GiCoffeePot,
      achievements: ['Roasting certification', 'Online store launch']
    },
    { 
      year: '2023', 
      event: 'Expanded to three locations', 
      description: 'Now serving coffee lovers across three boroughs',
      icon: GiCoffeeCup,
      achievements: ['Third location opened', 'Mobile app launch']
    },
  ]

 const teamMembers = [
  {
    name: 'Alex Rodriguez',
    role: 'Founder & Head Roaster',
    bio: '15+ years in specialty coffee, trained in Italy and Colombia',
    image: "https://images.unsplash.com/photo-1603415526960-f7e0328d3e1a?auto=format&fit=crop&w=800&q=80",
    specialties: ['Espresso', 'Roasting', 'Sourcing'],
    quote: 'Coffee is not just a drink, it\'s an experience.'
  },
  {
    name: 'Maya Chen',
    role: 'Executive Chef',
    bio: 'Pastry chef trained in Paris, creating artisanal treats daily',
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=800&q=80",
    specialties: ['Pastries', 'Flavor Pairing', 'Menu Design'],
    quote: 'Every bite should tell a story.'
  },
  {
    name: 'Jamal Williams',
    role: 'Head Barista',
    bio: 'Latte art champion with 8 years of competition experience',
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=800&q=80",
    specialties: ['Latte Art', 'Brew Methods', 'Training'],
    quote: 'The perfect cup is made with both science and heart.'
  },
  {
    name: 'Sofia Rossi',
    role: 'Community Manager',
    bio: 'Connecting coffee lovers through events and workshops',
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80",
    specialties: ['Events', 'Workshops', 'Partnerships'],
    quote: 'Great coffee brings people together.'
  },
]

  const stats = [
    { value: '13+', label: 'Years of Excellence', icon: BsClockHistory },
    { value: '50K+', label: 'Cups Served Monthly', icon: GiCoffeeCup },
    { value: '200+', label: 'Coffee Varieties', icon: GiCoffeeBeans },
    { value: '4.9/5', label: 'Customer Rating', icon: BsStarFill },
  ]

  const tabs = [
    { id: 'story', label: 'Our Story', icon: GiCoffeeBeans },
    { id: 'mission', label: 'Mission & Vision', icon: FaHeart },
    { id: 'process', label: 'Our Process', icon: GiPouringChalice },
    { id: 'impact', label: 'Community Impact', icon: FaHandsHelping },
  ]

  return (
    <div className="overflow-hidden">
      {/* Hero Section with Parallax */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-coffee-900 via-coffee-800 to-amber-900" />
        
        {/* Floating Coffee Elements */}
        {[...Array(12)].map((_, i) => (
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
            <GiCoffeeBeans className="text-coffee-300/20 text-2xl" />
          </motion.div>
        ))}

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-block mb-8"
            >
              <div className="relative">
                <GiCoffeeBeans className="text-6xl text-gold-400" />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border-2 border-gold-400/30 rounded-full"
                />
              </div>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold font-playfair mb-6 text-cream-100">
              Crafting Coffee
              <span className="block text-gold-400 mt-4">With Passion</span>
            </h1>
            
            <p className="text-xl text-coffee-200 max-w-3xl mx-auto mb-12 leading-relaxed">
              For over a decade, we've been more than just a coffee shop. 
              We're a community, a sanctuary, and a celebration of exceptional coffee.
            </p>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap justify-center gap-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-gold-400 mb-2">{stat.value}</div>
                  <div className="text-coffee-300 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="sticky top-20 z-30 bg-cream-100 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-3 px-6 py-4 whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? 'border-b-2 border-gold-500 text-coffee-900'
                    : 'text-coffee-600 hover:text-coffee-900'
                }`}
              >
                <tab.icon className="text-xl" />
                <span className="font-medium">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gold-400/10 text-gold-600 font-semibold mb-6">
                <GiStarShuriken className="mr-2" />
                OUR BEGINNING
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-8 text-coffee-900">
                From Humble Beans to Community Dreams
              </h2>
              
              <div className="space-y-6 text-coffee-700 text-lg leading-relaxed">
                <p>
                  It all started in a tiny Brooklyn apartment in 2010. Alex, our founder, 
                  had a simple vision: to create a space where coffee wasn't just a commodity, 
                  but a catalyst for connection.
                </p>
                <p>
                  Armed with a single espresso machine and a passion for perfection, 
                  that first 200-square-foot shop became a neighborhood haven. 
                  Word spread quickly about the meticulous attention to detail and 
                  the warmth of the experience.
                </p>
                <p>
                  Today, while we've grown to three locations, our soul remains unchanged. 
                  Every bean is still hand-selected, every cup poured with care, 
                  and every customer treated like family.
                </p>
              </div>
              
              <div className="mt-12 grid grid-cols-2 gap-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-coffee-100 to-cream-100 p-6 rounded-2xl shadow-lg"
                >
                  <div className="text-3xl font-bold text-coffee-900 mb-2">200+</div>
                  <div className="text-coffee-600">Square Feet Original</div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-coffee-100 to-cream-100 p-6 rounded-2xl shadow-lg"
                >
                  <div className="text-3xl font-bold text-coffee-900 mb-2">3</div>
                  <div className="text-coffee-600">Espresso Machines</div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="h-[500px] rounded-3xl shadow-2xl overflow-hidden relative">
  <img 
    src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=80"
    alt="Coffee Shop Story"
    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-coffee-900/70 to-transparent" />
              
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
              
              {/* Floating Stats Card */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 2 }}
                className="absolute -bottom-6 -right-6 bg-gradient-to-br from-gold-400 to-amber-500 p-8 rounded-2xl shadow-2xl"
              >
                <div className="text-center">
                  <div className="text-4xl font-bold text-coffee-900">13+</div>
                  <div className="text-coffee-800 font-semibold">Years Brewing</div>
                  <div className="text-coffee-700 text-sm mt-2">Since 2010</div>
                </div>
              </motion.div>
              
              {/* Floating Quote */}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute -left-6 top-1/4 bg-cream-100 p-6 rounded-2xl shadow-xl max-w-xs"
              >
                <div className="text-coffee-800 italic mb-3">
                  "Coffee is the common thread that weaves our community together."
                </div>
                <div className="text-coffee-600 text-sm font-semibold">— Alex, Founder</div>
              </motion.div>
            </motion.div>
          </div>

          {/* Values Section - Enhanced */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-gold-400/10 to-amber-500/10 mb-6">
                <FaHeart className="text-gold-500 mr-3" />
                <span className="text-gold-600 font-semibold text-lg">OUR CORE VALUES</span>
              </div>
              <h2 className="text-5xl font-bold font-playfair mb-6 text-coffee-900">
                What Guides Our Journey
              </h2>
              <p className="text-xl text-coffee-600 max-w-3xl mx-auto">
                These principles shape every decision we make, from bean selection to customer service
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-coffee-200 to-cream-100 rounded-3xl transform group-hover:rotate-3 transition-transform duration-300" />
                  <div className="relative bg-cream-100 p-8 rounded-3xl shadow-xl border border-coffee-200/50 h-full">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-6 mx-auto`}
                    >
                      <value.icon className="text-2xl text-cream-100" />
                    </motion.div>
                    
                    <div className="text-center mb-4">
                      <div className="text-3xl font-bold text-coffee-900 mb-1">{value.stat}</div>
                      <div className="text-coffee-600 text-sm font-semibold">{value.statLabel}</div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 text-center text-coffee-900">
                      {value.title}
                    </h3>
                    <p className="text-coffee-600 text-center leading-relaxed">
                      {value.description}
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
          </motion.div>

          {/* Timeline Section - Enhanced */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-gold-400/10 to-amber-500/10 mb-6">
                <BsClockHistory className="text-gold-500 mr-3" />
                <span className="text-gold-600 font-semibold text-lg">OUR JOURNEY</span>
              </div>
              <h2 className="text-5xl font-bold font-playfair mb-6 text-coffee-900">
                Milestones of Excellence
              </h2>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-gold-400 via-amber-500 to-gold-400 hidden lg:block" />
              
              {/* Timeline Nodes */}
              <div className="space-y-20">
                {timeline.map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className={`flex flex-col lg:flex-row items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                  >
                    <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="bg-gradient-to-br from-cream-100 to-coffee-50 p-8 rounded-3xl shadow-xl border border-coffee-200/50 relative"
                      >
                        {/* Year Badge */}
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 lg:left-auto lg:right-8 lg:transform-none">
                          <div className="px-6 py-2 rounded-full bg-gradient-to-r from-gold-400 to-amber-500 text-coffee-900 font-bold flex items-center">
                            <item.icon className="mr-2" />
                            {item.year}
                          </div>
                        </div>
                        
                        <div className="mt-4">
                          <h3 className="text-2xl font-bold text-coffee-900 mb-3">{item.event}</h3>
                          <p className="text-coffee-600 mb-6">{item.description}</p>
                          
                          <div className="space-y-2">
                            {item.achievements.map((achievement, i) => (
                              <div key={i} className="flex items-center text-coffee-700">
                                <div className="w-2 h-2 rounded-full bg-gold-500 mr-3" />
                                {achievement}
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    </div>
                    
                    {/* Timeline Dot */}
                    <div className="lg:w-1/2 flex justify-center my-8 lg:my-0">
                      <motion.div
                        whileHover={{ scale: 1.3 }}
                        className="w-8 h-8 rounded-full bg-gradient-to-br from-gold-400 to-amber-500 border-4 border-cream-100 shadow-lg relative z-10"
                      >
                        <div className="absolute inset-0 rounded-full bg-gold-400 animate-ping opacity-20" />
                      </motion.div>
                    </div>
                    
                    <div className="lg:w-1/2" />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Team Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-gold-400/10 to-amber-500/10 mb-6">
                <FaUsers className="text-gold-500 mr-3" />
                <span className="text-gold-600 font-semibold text-lg">MEET OUR TEAM</span>
              </div>
              <h2 className="text-5xl font-bold font-playfair mb-6 text-coffee-900">
                The Faces Behind Your Coffee
              </h2>
            </div>

            <div className="relative">
              {/* Team Slider */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {teamMembers.map((member, index) => (
                  <motion.div
                    key={member.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                    className="group"
                  >
                    <div className="bg-gradient-to-br from-cream-100 to-coffee-50 rounded-3xl overflow-hidden shadow-xl border border-coffee-200/50">
                      {/* Member Image/Color */}
                     <div className="h-48 relative overflow-hidden rounded-t-3xl">
  <img 
    src={member.image}
    alt={member.name}
    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
</div>

                      
                      {/* Member Info */}
                      <div className="p-8">
                        <h3 className="text-2xl font-bold text-coffee-900 mb-2">{member.name}</h3>
                        <p className="text-gold-600 font-semibold mb-4">{member.role}</p>
                        <p className="text-coffee-600 mb-6 leading-relaxed">{member.bio}</p>
                        
                        {/* Specialties */}
                        <div className="mb-6">
                          <div className="text-coffee-700 font-semibold mb-3">Specialties:</div>
                          <div className="flex flex-wrap gap-2">
                            {member.specialties.map((specialty) => (
                              <span
                                key={specialty}
                                className="px-3 py-1 rounded-full bg-coffee-100 text-coffee-700 text-sm"
                              >
                                {specialty}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        {/* Quote */}
                        <div className="border-l-4 border-gold-400 pl-4 py-2">
                          <p className="text-coffee-700 italic">"{member.quote}"</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Navigation Arrows */}
              <div className="flex justify-center space-x-4 mt-12">
                <button
                  onClick={() => setCurrentTeamIndex(prev => Math.max(0, prev - 1))}
                  className="w-12 h-12 rounded-full bg-gradient-to-r from-coffee-800 to-coffee-900 text-cream-100 flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <BsChevronLeft />
                </button>
                <button
                  onClick={() => setCurrentTeamIndex(prev => Math.min(teamMembers.length - 1, prev + 1))}
                  className="w-12 h-12 rounded-full bg-gradient-to-r from-gold-400 to-amber-500 text-coffee-900 flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <BsChevronRight />
                </button>
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
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
                Experience Our Story Firsthand
              </h3>
              
              <p className="text-xl text-coffee-200 mb-12 max-w-2xl mx-auto leading-relaxed">
                Visit us to taste the passion, meet our team, and become part of 
                our growing coffee community.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 rounded-full bg-gradient-to-r from-gold-400 to-amber-500 text-coffee-900 font-bold text-lg hover:shadow-xl transition-shadow"
                >
                  <FaUsers className="inline mr-3" />
                  Meet the Team
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 rounded-full border-2 border-gold-400 text-cream-100 font-bold text-lg hover:bg-gold-400/10 transition-colors"
                >
                  <BsArrowRight className="inline mr-3" />
                  Book a Tour
                </motion.button>
              </div>
              
              <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold-400 mb-2">3</div>
                  <div className="text-coffee-300">Locations</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold-400 mb-2">7</div>
                  <div className="text-coffee-300">Days a Week</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold-400 mb-2">15+</div>
                  <div className="text-coffee-300">Team Members</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold-400 mb-2">∞</div>
                  <div className="text-coffee-300">Smiles Shared</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About