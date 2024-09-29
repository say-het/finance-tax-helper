import React from 'react';

function ProfileCard({ generalInfo }) {
  return (
    <div className="bg-[#FFFFFF] rounded-lg p-6 text-black">
      <div className="flex items-center space-x-4">
        {/* Avatar Image */}
        <img 
          src="https://static.vecteezy.com/system/resources/previews/009/397/835/non_2x/man-avatar-clipart-illustration-free-png.png" 
          alt="User Avatar" 
          className="rounded-full w-16 h-16" 
        />
        <div>
          <h2 className="text-xl font-bold">{generalInfo.name}</h2>
          <p className="text-sm text-black">
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
