'use client'

import { motion } from 'framer-motion'
import { GiCoffeeBeans } from 'react-icons/gi'
import { BsInstagram, BsFacebook, BsTwitter, BsPinMap, BsTelephone, BsEnvelope } from 'react-icons/bs'
import Link from 'next/link'

const Footer = () => {
  const socialLinks = [
    { icon: BsInstagram, href: '#', label: 'Instagram' },
    { icon: BsFacebook, href: '#', label: 'Facebook' },
    { icon: BsTwitter, href: '#', label: 'Twitter' },
  ]

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Menu', href: '/menu' },
    { name: 'About', href: '/about' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Careers', href: '#' },
    { name: 'Contact', href: '#' },
  ]

  const contactInfo = [
    { icon: BsPinMap, text: '123 Coffee St, Brooklyn, NY' },
    { icon: BsTelephone, text: '(555) 123-4567' },
    { icon: BsEnvelope, text: 'hello@brewnbean.com' },
  ]

  return (
    <footer className="bg-coffee-900 text-cream-100 mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 mb-6">
              <GiCoffeeBeans className="text-3xl text-gold-400" />
              <h2 className="text-2xl font-bold font-playfair">Brew & Bean</h2>
            </div>
            <p className="text-coffee-300 mb-6">
              Crafting perfect coffee experiences since 2010. 
              Where every cup is a story waiting to be shared.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  whileHover={{ y: -3 }}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-coffee-800 flex items-center 
                           justify-center hover:bg-gold-500 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-coffee-300 hover:text-gold-400 transition-colors 
                             hover:pl-2 duration-300 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              {contactInfo.map((info, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <info.icon className="text-gold-400 mt-1 flex-shrink-0" />
                  <span className="text-coffee-300">{info.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-xl font-bold mb-6">Hours</h3>
            <div className="space-y-2 text-coffee-300">
              <div className="flex justify-between">
                <span>Monday - Friday</span>
                <span className="font-semibold">7AM - 9PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span className="font-semibold">8AM - 10PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span className="font-semibold">8AM - 8PM</span>
              </div>
            </div>
            <div className="mt-8 p-4 rounded-xl bg-coffee-800/50">
              <p className="text-sm text-center">
                Join our newsletter for exclusive offers
              </p>
              <div className="mt-3 flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-grow px-4 py-2 rounded-l-full bg-coffee-700 
                           text-cream-100 placeholder-coffee-400 focus:outline-none"
                />
                <button className="bg-gold-500 text-coffee-900 px-4 py-2 
                                 rounded-r-full font-semibold hover:bg-gold-400 
                                 transition-colors">
                  Join
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-coffee-800 mt-12 pt-8 text-center 
                      text-coffee-400 text-sm">
          <p>
            © {new Date().getFullYear()} Brew & Bean Coffee House. 
            All rights reserved. | Crafted with ❤️ and ☕
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer