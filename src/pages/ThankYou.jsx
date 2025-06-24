// ============================
// File: src/pages/ThankYou.jsx
// ============================

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function ThankYou() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex flex-col justify-center items-center bg-white text-black px-6 text-center"
    >
      <h1 className="text-4xl font-bold mb-4">🎉 Thank You!</h1>
      <p className="text-lg text-gray-600 mb-6">Your quote request has been submitted. We'll get back to you shortly.</p>
      <Link
        to="/"
        className="px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Go to Home
      </Link>
    </motion.div>
  );
}
