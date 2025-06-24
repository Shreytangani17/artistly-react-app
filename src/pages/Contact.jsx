import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaFacebookF, FaEnvelope } from 'react-icons/fa';
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-purple-950 min-h-screen text-white flex flex-col">
      <motion.section
        className="flex flex-col items-center justify-center text-center px-6 py-20 relative"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Let's Connect
        </motion.h1>

        <motion.p
          className="max-w-2xl mx-auto text-lg md:text-xl mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Whether you’re planning an unforgettable event or representing incredible talent — we’d love to hear from you. Drop us a message and let’s make magic happen together.
        </motion.p>

        <motion.p
          className="text-sm italic text-purple-300 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          "Turning events into experiences — one artist at a time."
        </motion.p>

        <motion.form
          className="w-full max-w-3xl bg-white/10 backdrop-blur-md p-8 rounded-lg grid grid-cols-1 md:grid-cols-2 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <input
            type="text"
            placeholder="Your Name"
            className="p-4 bg-gray-900 text-white rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-4 bg-gray-900 text-white rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="text"
            placeholder="Subject"
            className="col-span-1 md:col-span-2 p-4 bg-gray-900 text-white rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            className="col-span-1 md:col-span-2 p-4 bg-gray-900 text-white rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
          ></textarea>
          <button
            type="submit"
            className="col-span-1 md:col-span-2 py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded transition"
          >
            Send Message
          </button>
        </motion.form>

        {/* Social Links */}
        <motion.div
          className="mt-12 flex justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a href="mailto:info@artistly.com" className="text-xl text-white hover:text-purple-400">
            <FaEnvelope />
          </a>
          <a href="https://instagram.com" target="_blank" className="text-xl text-white hover:text-purple-400">
            <FaInstagram />
          </a>
          <a href="https://facebook.com" target="_blank" className="text-xl text-white hover:text-purple-400">
            <FaFacebookF />
          </a>
        </motion.div>
      </motion.section>

      <Footer />
    </div>
  );
}
