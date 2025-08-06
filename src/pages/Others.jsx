// src/pages/Others.jsx
import React from 'react';

const Others = () => {
  return (
    <div className="space-y-6">
      {/* User Info */}
      <div className="bg-white p-6 rounded shadow-md">
        <h2 className="text-xl font-bold mb-2">User Information</h2>
        <p><span className="font-semibold">Name:</span> MD Suhag Mia</p>
        <p><span className="font-semibold">Email:</span> suhag@gmail.com</p>
        <p><span className="font-semibold">Role:</span> Member</p>
      </div>

      {/* Notification Settings */}
      <div className="bg-white p-6 rounded shadow-md">
        <h2 className="text-xl font-bold mb-4">Notification Settings</h2>
        <div className="space-y-2">
          <label className="flex items-center gap-2">
            <input type="checkbox" defaultChecked className="w-4 h-4" />
            Receive order updates
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="w-4 h-4" />
            Receive promotional emails
          </label>
        </div>
      </div>

      {/* Preferences */}
      <div className="bg-white p-6 rounded shadow-md">
        <h2 className="text-xl font-bold mb-4">Preferences</h2>
        <p>Preferred Language: <span className="font-semibold">English</span></p>
        <p>Currency: <span className="font-semibold">USD</span></p>
      </div>

      {/* Recent Activities */}
      <div className="bg-white p-6 rounded shadow-md">
        <h2 className="text-xl font-bold mb-4">Recent Activities</h2>
        <ul className="list-disc pl-5 text-gray-700 space-y-1">
          <li>Logged in from Dhaka, Bangladesh</li>
          <li>Changed password 3 days ago</li>
          <li>Updated shipping address</li>
        </ul>
      </div>
    </div>
  );
};

export default Others;