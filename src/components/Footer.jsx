import React from 'react';
import { FaFacebookF, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <motion.footer
      className="bg-black text-white py-12 px-6 md:px-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo + Description */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Artistly</h2>
          <p className="text-gray-400">
            Your gateway to unforgettable performances. Book singers, dancers, DJs, and speakers effortlessly.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li><Link to="/" className="hover:text-white transition">Home</Link></li>
            <li><Link to="/artists" className="hover:text-white transition">Artists</Link></li>
            <li><Link to="/about" className="hover:text-white transition">About</Link></li>
            <li><Link to="/contact" className="hover:text-white transition">Contact</Link></li>
          </ul>
        </div>

        {/* Social & Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
          <div className="flex items-center gap-4 mb-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-xl transition">
              <FaInstagram />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-xl transition">
              <FaFacebookF />
            </a>
            <a href="mailto:hello@artistly.com" className="text-gray-400 hover:text-white text-xl transition">
              <FaEnvelope />
            </a>
          </div>
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} Artistly. All rights reserved.</p>
        </div>
      </div>
    </motion.footer>
  );
}
