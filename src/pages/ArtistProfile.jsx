import { useParams } from 'react-router-dom';
import artists from '../data/artists.json';
import { useState } from 'react';
import BookingModal from '../components/BookingModal';

export default function ArtistProfile() {
  const { id } = useParams();
  const artist = artists.find((a) => a.id === id);
  const [open, setOpen] = useState(false);

  if (!artist) return <p className="p-6">Artist not found</p>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-2">{artist.name}</h1>
      <img src={artist.image} alt={artist.name} className="w-full h-64 object-cover rounded-lg mb-4" />
      <p className="text-lg text-gray-700 mb-2">{artist.bio}</p>
      <p className="text-sm text-gray-500">Genre: {artist.genre}</p>
      <p className="text-sm text-gray-500">Location: {artist.location}</p>
      <button onClick={() => setOpen(true)} className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
        Request Booking
      </button>
      {open && <BookingModal artist={artist} onClose={() => setOpen(false)} />}
    </div>
  );
}
