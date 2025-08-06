// src/pages/Addresses.jsx
import React from 'react';

const Addresses = () => {
  return (
    <div className="space-y-6">
      {/* Page Title */}
      <div className="bg-white p-6 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-2">My Addresses</h2>
        <p className="text-gray-600">The following addresses will be used on the checkout page by default.</p>
      </div>

      {/* Billing Address */}
      <div className="bg-white p-6 rounded shadow-md">
        <h3 className="text-xl font-semibold mb-4">Billing Address</h3>
        <p>Md Shohag Mia</p>
        <p>Jamalpur Sadar, Mymensingh, Bangladesh</p>
        <p>01731378743</p>
        <p>mdshohagmia53200@gmail.com</p>
        <button className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
          Edit Address
        </button>
      </div>

      {/* Shipping Address */}
      <div className="bg-white p-6 rounded shadow-md">
        <h3 className="text-xl font-semibold mb-4">Shipping Address</h3>
        <p>Md Shohag Mia</p>
        <p>Jamalpur Sadar, Mymensingh, Bangladesh</p>
        <p>01731378743</p>
        <p>mdshohagmia53200@gmail.com</p>
        <button className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
          Edit Address
        </button>
      </div>
    </div>
  );
};

export default Addresses;
