import React from "react";

function StatsCard({ income, expenses }) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md flex flex-col justify-between text-black  ">
      <h2 className="text-xl font-bold mb-4 text-center">
        Statistics Overview
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col p-4 border rounded-lg shadow-sm hover:shadow-md transition duration-300">
          <div className="mb-2">
            <p className="text-lg font-bold">Salary</p>
            <p className="text-2xl text-blue-500">₹{income.salary}</p>
          </div>
        </div>
        <div className="flex flex-col p-4 border rounded-lg shadow-sm hover:shadow-md transition duration-300">
          <div className="mb-2">
            <p className="text-lg font-bold">Bonuses</p>
            <p className="text-2xl text-blue-500">₹{income.bonuses}</p>
          </div>
        </div>
        <div className="flex flex-col p-4 border rounded-lg shadow-sm hover:shadow-md transition duration-300">
          <div className="mb-2">
            <p className="text-lg font-bold">Rent</p>
            <p className="text-2xl text-blue-500">₹{expenses.householdRent}</p>
          </div>
        </div>
        <div className="flex p-4 flex-col border rounded-lg shadow-sm hover:shadow-md transition duration-300  justify-between h-full ">
          <p className="text-lg font-bold">Children's Education</p>
          <p className="text-2xl text-blue-500">₹{expenses.childrenEducation}</p>
        </div>
      </div>
    </div>
  );
}

export default StatsCard;
