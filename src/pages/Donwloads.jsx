// src/pages/Downloads.jsx
import React from 'react';

const Downloads = () => {
  return (
    <div className="space-y-6">
      {/* Page Title */}
      <div className="bg-white p-6 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-2">Your Downloads</h2>
        <p className="text-gray-600">Here you can find your downloadable products.</p>
      </div>

      {/* Downloads Table */}
      <div className="bg-white p-6 rounded shadow-md">
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-3 border-b">Product</th>
              <th className="p-3 border-b">Download Link</th>
              <th className="p-3 border-b">Expiry Date</th>
              <th className="p-3 border-b">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-50">
              <td className="p-3">E-book: Learn React</td>
              <td className="p-3 text-blue-600 underline cursor-pointer">Download</td>
              <td className="p-3">Aug 31, 2025</td>
              <td className="p-3 text-green-600 font-semibold">Active</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="p-3">UI Kit - Modern Shop</td>
              <td className="p-3 text-blue-600 underline cursor-pointer">Download</td>
              <td className="p-3">Expired</td>
              <td className="p-3 text-red-500 font-semibold">Expired</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Downloads;