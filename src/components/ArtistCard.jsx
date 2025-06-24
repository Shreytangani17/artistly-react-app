import React from 'react';

export default function ArtistCard({ artist, onQuoteClick }) {
  return (
    <div className="border border-gray-700 rounded-lg overflow-hidden bg-zinc-900">
      <img src={artist.image} alt={artist.name} className="w-full h-60 object-cover" />
      <div className="p-5">
        <h3 className="text-2xl font-semibold text-white">{artist.name}</h3>
        <p className="text-gray-400 text-sm">{artist.category}</p>
        <p className="text-gray-400 text-sm">{artist.location}</p>
        <p className="text-gray-400 text-sm">{artist.priceRange}</p>
        <button
          onClick={() => onQuoteClick(artist)}
          className="mt-4 w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Ask for Quote
        </button>
      </div>
    </div>
  );
}
