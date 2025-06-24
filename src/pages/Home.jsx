import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const services = [
  {
    title: 'Dance Shows',
    image: '/images/dancer.jpg',
    description: 'Energetic performances with dynamic choreography and talented dancers.',
    longDescription: 'Our dancers bring rhythm, passion, and spectacle to every stage. From classical ballet to modern hip-hop routines — they light up the floor.',
  },
  {
    title: 'Live Singers',
    image: '/images/singer.jpg',
    description: 'Powerful vocals and interactive performances from professional singers.',
    longDescription: 'Whether acoustic sets or full-stage vocals, our live singers elevate emotions with every note. Perfect for weddings, galas, or lounge nights.',
  },
  {
    title: 'Professional DJs',
    image: '/images/dj.jpg',
    description: 'Top-tier DJs to elevate your events with trending beats and crowd control.',
    longDescription: 'From smooth mixes to high-energy party vibes, our DJs know how to control the room and keep your guests on the dance floor.',
  },
  {
    title: 'Event Speakers',
    image: '/images/speacker.jpg',
    description: 'Inspirational speakers with experience in hosting and engaging audiences.',
    longDescription: 'Motivational and insightful — our speakers transform your agenda into an unforgettable story. Ideal for corporate or educational events.',
  },
];

export default function Home() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <div className="bg-gradient-to-b from-black via-gray-900 to-black text-white min-h-screen overflow-x-hidden">
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src="/videos/video-bg.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>
        <motion.div
          className="relative z-10 text-center px-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <motion.h1
            className="text-6xl md:text-8xl font-extrabold leading-tight mb-6 tracking-tight uppercase bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-yellow-500"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Experience Sound <br /> & Spectacle
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Immerse in unforgettable performances, curated artists, and events that redefine entertainment.
          </motion.p>
          <Link to="/artists">
            <motion.button
              className="px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition"
              whileHover={{ scale: 1.05 }}
            >
              Discover Artists
            </motion.button>
          </Link>
        </motion.div>
      </section>

      <div className="overflow-hidden py-4 bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700">
        <div className="animate-marquee whitespace-nowrap text-2xl font-semibold uppercase text-white">
          Book Performers • Plan Your Event • Discover Artistry • Elevate Experiences •
        </div>
      </div>

      <motion.section
        className="py-20 px-6 md:px-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white text-black rounded-xl overflow-hidden shadow-lg cursor-pointer group"
              onClick={() => setSelectedService(service)}
            >
              <div className="relative h-72 w-full overflow-hidden sm:h-80 md:h-96">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover group-hover:scale-110 transition duration-700"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center text-center p-4">
                  <p className="text-white text-base font-medium">{service.description}</p>
                </div>
              </div>
              <div className="p-4 flex flex-col items-center text-center">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-1 rounded-full hover:from-pink-600 hover:to-purple-700 transition text-sm">
                  Book Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <AnimatePresence>
        {selectedService && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white text-black max-w-md w-full rounded-lg p-6 relative shadow-xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-2 right-4 text-xl font-bold text-gray-700 hover:text-black"
              >
                &times;
              </button>
              <h3 className="text-2xl font-bold mb-4">{selectedService.title}</h3>
              <img
                src={selectedService.image}
                alt={selectedService.title}
                className="w-full h-48 object-cover rounded mb-4"
              />
              <p className="text-sm text-gray-700 mb-4">{selectedService.longDescription}</p>
              <Link to="/contact">
                <button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-2 rounded hover:from-pink-600 hover:to-purple-700 transition">
                  Contact to Book
                </button>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.section
        className="bg-gradient-to-r from-purple-800 via-blue-800 to-purple-800 py-16 px-6 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Let’s Get the Party Started</h2>
        <p className="text-lg text-gray-200 max-w-2xl mx-auto">
          Looking for a creative events agency for your corporate events or parties? Book a consultation, send an email, or give us a call.
        </p>
        <Link to="/contact">
          <button className="mt-6 px-6 py-3 bg-white text-blue-700 font-bold rounded-full hover:bg-gray-100 transition">
            Contact Us
          </button>
        </Link>
      </motion.section>
    </div>
  );
}
