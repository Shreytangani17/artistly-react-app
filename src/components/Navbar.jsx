// ============================
// File: src/components/Navbar.jsx
// ============================

import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-black text-white py-4 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold">
          Artistly
        </Link>
        <div className="space-x-6 text-sm sm:text-base">
          <Link to="/" className="hover:text-blue-400">Home</Link>
          <Link to="/artists" className="hover:text-blue-400">Artists</Link>
          <Link to="/about" className="hover:text-blue-400">About</Link>
          <Link to="/contact" className="hover:text-blue-400">Contact</Link>
          <Link to="/dashboard" className="hover:text-blue-500">
  Dashboard
</Link>
        </div>
      </div>
    </nav>
  );
}
