// ============================
// File: src/pages/Artists.jsx
// ============================

import { useState } from 'react';
import artists from '../data/artists.json';
import QuoteModal from '../components/QuoteModal';
import ArtistCard from '../components/ArtistCard';
import FilterBlock from '../components/FilterBlock';

export default function Artists() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [location, setLocation] = useState('');
  const [price, setPrice] = useState('');
  const [selectedArtist, setSelectedArtist] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const openModal = (artist) => {
    setSelectedArtist(artist);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedArtist(null);
    setShowModal(false);
  };

  const filteredArtists = artists.filter((artist) => {
    const matchesName = artist.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === '' || artist.category === category;
    const matchesLocation = location === '' || artist.location === location;
    const matchesPrice = price === '' || artist.priceRange === price;
    return matchesName && matchesCategory && matchesLocation && matchesPrice;
  });

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="bg-cover bg-center py-20 px-6" style={{ backgroundImage: "url('/images/banner.jpg')" }}>
        <h2 className="text-4xl font-bold text-center mb-2">Find the Perfect Talent</h2>
        <p className="text-center text-lg text-gray-300">Explore artists by category, location, and pricing</p>
      </div>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <FilterBlock
          search={search}
          setSearch={setSearch}
          category={category}
          setCategory={setCategory}
          location={location}
          setLocation={setLocation}
          price={price}
          setPrice={setPrice}
        />

        {/* Artist Grid (Responsive) */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {filteredArtists.map((artist) => (
            <ArtistCard key={artist.id} artist={artist} onQuoteClick={openModal} />
          ))}
        </div>
      </div>

      <QuoteModal artist={selectedArtist} isOpen={showModal} onClose={closeModal} />
    </div>
  );
}