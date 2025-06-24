import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const mockSubmissions = [
  {
    name: 'DJ Stellar',
    category: 'DJ',
    city: 'Mumbai',
    fee: '₹30,000–₹50,000',
    bio: 'High-energy DJ with club and corporate event experience.',
    image: '/images/dj.jpg',
  },
  {
    name: 'Sufi Soul',
    category: 'Singer',
    city: 'Delhi',
    fee: '₹20,000–₹40,000',
    bio: 'Classical and sufi vocalist with national recognition.',
    image: '/images/singer.jpg',
  },
  {
    name: 'The Step Squad',
    category: 'Dancers',
    city: 'Bangalore',
    fee: '₹25,000–₹60,000',
    bio: 'Contemporary dance group performing across India.',
    image: '/images/dance.jpg',
  },
];

export default function ManagerDashboard() {
  const [selectedArtist, setSelectedArtist] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white px-6 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center text-pink-500">Artist Submissions</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-700 rounded-xl overflow-hidden">
          <thead className="bg-gray-800 text-left text-white">
            <tr>
              <th className="p-4">Name</th>
              <th className="p-4">Category</th>
              <th className="p-4">City</th>
              <th className="p-4">Fee</th>
              <th className="p-4">Action</th>
            </tr>
          </thead>
          <tbody className="bg-gray-900">
            {mockSubmissions.map((artist, index) => (
              <tr
                key={index}
                className="border-t border-gray-700 hover:bg-gray-800 transition"
              >
                <td className="p-4">{artist.name}</td>
                <td className="p-4">{artist.category}</td>
                <td className="p-4">{artist.city}</td>
                <td className="p-4">{artist.fee}</td>
                <td className="p-4">
                  <button
                    onClick={() => setSelectedArtist(artist)}
                    className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-1 rounded-full text-sm"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedArtist && (
          <motion.div
            className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white text-black rounded-lg p-6 w-full max-w-md relative"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              <button
                onClick={() => setSelectedArtist(null)}
                className="absolute top-2 right-4 text-2xl text-gray-600 hover:text-black"
              >
                &times;
              </button>
              <h2 className="text-2xl font-bold mb-4">{selectedArtist.name}</h2>
              <img
                src={selectedArtist.image}
                alt={selectedArtist.name}
                className="w-full h-48 object-cover rounded mb-4"
              />
              <p className="text-sm text-gray-800"><strong>Category:</strong> {selectedArtist.category}</p>
              <p className="text-sm text-gray-800"><strong>City:</strong> {selectedArtist.city}</p>
              <p className="text-sm text-gray-800"><strong>Fee:</strong> {selectedArtist.fee}</p>
              <p className="text-sm text-gray-800 mt-2">{selectedArtist.bio}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
