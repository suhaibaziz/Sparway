'use client';

import { motion } from 'framer-motion';
import { socials } from '../constants';

import { footerVariants } from '../utils/motion';
import styles from '../styles';
const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} pt-16 pb-8 relative bg-gray-900 text-white`}
  >
    {/* optional gradient overlay */}
    <div className="absolute inset-0 footer-gradient opacity-20 pointer-events-none" />

    <div className={`${styles.innerWidth} mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 z-10`}>
      {/* Brand + Description */}
      <div className="space-y-4">
        <h3 className="text-2xl font-bold">Sparway Marketing</h3>
        <p className="text-sm opacity-75">
          Dive into the next generation of business digital reality. Sparway Marketing connects you with the possible customers,
          where limitless experiences await.
        </p>
        <div className="flex space-x-3">
          {socials.map(s => (
            <a key={s.name} href={s.link} className="hover:opacity-75 transition-opacity">
              <img src={s.url} alt={s.name} className="w-6 h-6" />
            </a>
          ))}
        </div>
      </div>

      {/* Company Links */}
      <div>
        <h4 className="text-lg font-semibold mb-3">Company</h4>
        <ul className="space-y-2 text-sm opacity-75">
          <li><a href="/about" className="hover:opacity-90">About Us</a></li>
          <li><a href="/careers" className="hover:opacity-90">Careers</a></li>
          <li><a href="/blog" className="hover:opacity-90">Blog</a></li>
          <li><a href="/contact" className="hover:opacity-90">Contact</a></li>
        </ul>
      </div>

      {/* Resources */}
      <div>
        <h4 className="text-lg font-semibold mb-3">Resources</h4>
        <ul className="space-y-2 text-sm opacity-75">
          <li><a href="/docs" className="hover:opacity-90">Documentation</a></li>
          <li><a href="/faq" className="hover:opacity-90">FAQ</a></li>
          <li><a href="/support" className="hover:opacity-90">Support</a></li>
          <li><a href="/security" className="hover:opacity-90">Security</a></li>
        </ul>
      </div>

      {/* Contact & Newsletter */}
      <div className="space-y-4">
        <h4 className="text-lg font-semibold">Get in Touch</h4>
        <p className="text-sm opacity-75">
          <strong>Email:</strong> <a href="mailto:hello@Sparway Marketing.com" className="hover:opacity-90">contact-marketing@Sparway.com</a><br/>
          <strong>Phone:</strong> <a href="tel:+1234567890" className="hover:opacity-90">+491010101010</a>
        </p>
        <form className="flex flex-col sm:flex-row gap-2">
          <input
            type="email"
            placeholder="Your email"
            className="flex-grow px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors text-sm"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>

    {/* bottom bar */}
    <div className="mt-12 border-t border-gray-700 pt-6 z-10">
      <div className="flex flex-col md:flex-row items-center justify-between text-sm opacity-75">
        <span>© 2021 – {new Date().getFullYear()} Sparway Marketing. All rights reserved.</span>
        <div className="flex flex-wrap gap-4 mt-4 md:mt-0">
          <a href="/terms" className="hover:opacity-90">Terms of Service</a>
          <a href="/privacy" className="hover:opacity-90">Privacy Policy</a>
          <a href="/cookie" className="hover:opacity-90">Cookie Policy</a>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
