/** @format */

import React from "react";

function ContestRankings() {
  return (
    <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-2xl transition-shadow duration-500">
      <h2 className="text-xl font-bold mb-4">Contest Rankings</h2>
      <div className="flex justify-around">
        <div className="text-center">
          <p className="text-gray-600">Codechef</p>
          <p className="text-2xl font-bold text-gray-800">1674</p>
          <p className="text-gray-500">Max: 1674</p>
        </div>
        <div className="text-center">
          <p className="text-gray-600">Codeforces</p>
          <p className="text-2xl font-bold text-gray-800">1136</p>
          <p className="text-gray-500">Max: 1290</p>
        </div>
      </div>
    </div>
  );
}

export default ContestRankings;
