import React from 'react'

function StatsCard() {
  return (
    <>
      <div className="bg-[#FFFFFF] rounded-lg p-6">
        <div className="flex justify-between">
          <div className="text-center">
            <p className="text-lg font-bold">Total Questions</p>
            <p className="text-2xl">616</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-bold">Total Active Days</p>
            <p className="text-2xl">204</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default StatsCard
