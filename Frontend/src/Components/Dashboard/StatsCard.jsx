/** @format */

import React from "react";

function StatsCard() {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md flex flex-col justify-between">
      <h2 className="text-xl font-bold mb-4 text-center">
        Statistics Overview
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col p-4 border rounded-lg shadow-sm hover:shadow-md transition duration-300">
          <div className="mb-2">
            <p className="text-lg font-bold">Total Tax Savings</p>
            <p className="text-2xl text-blue-500">₹1,20,000</p>
          </div>
        </div>
        <div className="flex flex-col p-4 border rounded-lg shadow-sm hover:shadow-md transition duration-300">
          <div className="mb-2">
            <p className="text-lg font-bold">Total Returns Filed</p>
            <p className="text-2xl text-blue-500">1500</p>
          </div>
        </div>
        <div className="flex p-4 border rounded-lg shadow-sm hover:shadow-md transition duration-300 items-center justify-between h-full md:col-span-2">
          <p className="text-lg font-bold">Average Refund Amount</p>
          <p className="text-2xl text-blue-500">₹15,000</p>
        </div>
      </div>
    </div>
  );
}

export default StatsCard;
