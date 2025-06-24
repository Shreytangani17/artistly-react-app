import React from 'react';

export default function FilterBlock({
  search,
  setSearch,
  category,
  setCategory,
  location,
  setLocation,
  price,
  setPrice
}) {
  return (
    <div className="mb-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      <input
        type="text"
        placeholder="Search by name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="px-4 py-2 border rounded text-black"
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)} className="px-4 py-2 border rounded text-black">
        <option value="">All Categories</option>
        <option value="Singer">Singer</option>
        <option value="Dancer">Dancer</option>
        <option value="Speaker">Speaker</option>
        <option value="DJ">DJ</option>
      </select>
      <select value={location} onChange={(e) => setLocation(e.target.value)} className="px-4 py-2 border rounded text-black">
        <option value="">All Locations</option>
        <option value="Mumbai">Mumbai</option>
        <option value="Delhi">Delhi</option>
        <option value="Bangalore">Bangalore</option>
      </select>
      <select value={price} onChange={(e) => setPrice(e.target.value)} className="px-4 py-2 border rounded text-black">
        <option value="">All Prices</option>
        <option value="₹10k-₹30k">₹10k-₹30k</option>
        <option value="₹30k-₹60k">₹30k-₹60k</option>
        <option value="₹60k+">₹60k+</option>
      </select>
    </div>
  );
}
