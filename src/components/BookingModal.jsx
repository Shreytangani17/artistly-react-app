export default function BookingModal({ artist, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-80 relative">
        <h2 className="text-xl font-bold mb-2">Booking: {artist.name}</h2>
        <p className="text-gray-600 text-sm mb-4">Genre: {artist.genre}</p>
        <input
          type="text"
          placeholder="Your Name"
          className="w-full mb-2 px-3 py-2 border rounded"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-2 px-3 py-2 border rounded"
        />
        <input
          type="date"
          className="w-full mb-4 px-3 py-2 border rounded"
        />
        <div className="flex justify-end gap-2">
          <button onClick={onClose} className="px-4 py-2 text-sm bg-gray-300 rounded hover:bg-gray-400">
            Cancel
          </button>
          <button onClick={onClose} className="px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
