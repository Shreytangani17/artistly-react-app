import React from 'react';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';

export default function About() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      {/* About Section */}
      <motion.section
        className="flex flex-col md:flex-row items-center justify-between p-10 md:p-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-5xl font-bold mb-6">About</h1>
        </motion.div>

        <motion.div className="md:w-1/2">
          <p className="text-lg leading-relaxed">
            Welcome to Artistly – your gateway to extraordinary performances. We’re dedicated to connecting event planners and artist managers with talented performers across the country. Whether you're looking for a soulful singer, an energetic dance crew, or an inspirational speaker, Artistly has the perfect match for your occasion.
          </p>
          <p className="mt-4 text-lg leading-relaxed">
            Our platform ensures that each artist is screened for quality and professionalism, giving you peace of mind when booking for your special events.
          </p>
        </motion.div>
      </motion.section>

      {/* Image Showcase Section */}
      <motion.section
        className="px-6 py-16 bg-black grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        {[1, 2, 3, 4, 5].map((num) => (
          <motion.div
            key={num}
            className="overflow-hidden rounded-lg shadow-lg group relative"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={`/images/about${num}.jpg`}
              alt={`Showcase ${num}`}
              className="w-full h-[400px] object-cover transform group-hover:scale-110 transition duration-500"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center text-white text-xl font-semibold">
              Memorable Moments
            </div>
          </motion.div>
        ))}
      </motion.section>

      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 h-1 bg-blue-600 z-50"
        style={{ width: '100vw' }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 2, ease: 'easeInOut' }}
      />

      {/* Call to Action Section */}
      <motion.section
        className="bg-blue-700 text-white text-center py-16 px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Let’s get the party started!
        </motion.h2>
        <motion.p
          className="text-lg max-w-2xl mx-auto mb-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Op zoek naar een creatief evenementenbureau voor je zakelijke evenementen of feesten? Boek een kennismaking, stuur een mail of bel ons.
        </motion.p>
        <motion.a
          href="/contact"
          className="inline-block mt-4 px-6 py-3 bg-white text-blue-700 font-semibold rounded hover:bg-gray-100 transition"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          Contact Us
        </motion.a>
      </motion.section>

      {/* Contact Section - Enhanced with Animation and Colors */}
      <motion.section
        className="relative bg-gradient-to-br from-purple-900 via-black to-gray-900 text-white py-20 px-6 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-[url('/images/contact-bg.jpg')] bg-cover bg-center opacity-10"
          aria-hidden="true"
        ></motion.div>

        <h2 className="text-4xl font-bold mb-4 z-10 relative">Get in Touch</h2>
        <p className="text-lg max-w-xl mx-auto mb-10 z-10 relative">
          We'd love to hear from you. Whether you're an artist or a planner, reach out and let's make something amazing together.
        </p>

        <motion.form
          className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 z-10 relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <input
            type="text"
            placeholder="Your Name"
            className="p-4 rounded bg-gray-800 border border-gray-600 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-4 rounded bg-gray-800 border border-gray-600 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="col-span-1 md:col-span-2 p-4 rounded bg-gray-800 border border-gray-600 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          ></textarea>
          <button
            type="submit"
            className="col-span-1 md:col-span-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded text-white font-semibold transition"
          >
            Send Message
          </button>
        </motion.form>
      </motion.section>

      {/* Footer */}
      <Footer />
    </div>
  );
}