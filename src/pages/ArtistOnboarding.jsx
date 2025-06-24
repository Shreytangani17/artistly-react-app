import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const categories = [
  {
    name: 'Singers',
    image: '/images/singer.jpg',
    description: 'Talented vocalists for all genres and events.',
  },
  {
    name: 'Dancers',
    image: '/images/dancer.jpg',
    description: 'Energetic performers for stage and celebrations.',
  },
  {
    name: 'Speakers',
    image: '/images/speacker.jpg',
    description: 'Inspirational speakers for conferences and events.',
  },
  {
    name: 'DJs',
    image: '/images/dj.jpg',
    description: 'Professional DJs to bring your parties to life.',
  },
];

export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section with Background Video */}
      <section className="relative h-[80vh] flex items-center justify-center text-center overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
          src="/videos/artist-hero.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="bg-black bg-opacity-50 absolute inset-0 z-0"></div>
        <motion.div
          className="relative z-10 text-white px-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl font-bold mb-4">Welcome to Artistly</h1>
          <p className="text-lg max-w-xl mx-auto mb-6">
            Book talented performing artists for your events. Discover singers, dancers, speakers, DJs, and more.
          </p>
          <Link to="/artists">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Explore Artists
            </button>
          </Link>
        </motion.div>
      </section>

      {/* Categories Section with Hover Effects */}
      <motion.section
        className="py-16 px-6 bg-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-center mb-10">Popular Categories</h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="relative group overflow-hidden rounded-lg shadow-md border"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center px-4 text-white text-center">
                <div>
                  <h3 className="text-xl font-bold mb-2">{cat.name}</h3>
                  <p className="text-sm">{cat.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Why Choose Us Section */}
      <motion.section
        className="bg-gray-100 py-20 px-6 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-6">Why Choose Artistly?</h2>
        <div className="grid md:grid-cols-3 gap-8 text-left mt-10">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Verified Talent</h3>
            <p>All artists listed are screened for professionalism and quality performance.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Easy Booking</h3>
            <p>Send requests and receive confirmations quickly through our platform.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Diverse Categories</h3>
            <p>Choose from a wide variety of performers to suit your event’s theme and style.</p>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
