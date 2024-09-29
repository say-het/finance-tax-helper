import React from 'react';

function ProfileCard({ generalInfo }) {
  return (
    <div className="bg-[#FFFFFF] rounded-lg p-6">
      <div className="flex items-center space-x-4">
        <div className="rounded-full bg-green-400 w-16 h-16"></div>
        <div>
          <h2 className="text-xl font-bold">{generalInfo.name}</h2>
          <p className="text-sm text-gray-400">
            {generalInfo.city}, {generalInfo.state}
          </p>
          <p className="text-sm">PAN: {generalInfo.panNumber}</p>
          <p className="text-sm">Last Refreshed: 27-09-2024 23:20:20</p> {/* Static date for now */}
        </div>
      </div>
      <button className="mt-4 w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg">
        Edit Profile
      </button>
    </div>
  );
}

export default ProfileCard;
