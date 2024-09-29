/** @format */

import React, { useState } from "react";

const Expensess = ({ nextStep }) => {
  const [expenses, setExpenses] = useState({
    salariesAndWages: 0,  
    rentLeaseExpenses: 0,
    utilities: 0,
    depreciationOfFixedAssets: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpenses({ ...expenses, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    nextStep({ expenses }); // Pass the expenses data to the parent component
  };

  return (
    <>
      <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg mt-10">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
          Information
        </h2>
        <form onSubmit={handleSubmit} className="space-y-10 bg-gray-50 p-6 rounded-lg">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-blue-600">
              Expenses
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="salariesAndWages"
                  className="block text-sm font-medium text-gray-700"
                >
                  Salaries and Wages
                </label>
                <input
                  type="number"
                  name="salariesAndWages"
                  value={expenses.salariesAndWages}
                  placeholder="Enter salaries and wages"
                  className="border p-2 rounded-md w-full mt-1 shadow-sm focus:ring-2 focus:ring-blue-500"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  htmlFor="rentLeaseExpenses"
                  className="block text-sm font-medium text-gray-700"
                >
                  Rent/Lease Expenses
                </label>
                <input
                  type="number"
                  name="rentLeaseExpenses"
                  value={expenses.rentLeaseExpenses}
                  placeholder="Enter rent/lease expenses"
                  className="border p-2 rounded-md w-full mt-1 shadow-sm focus:ring-2 focus:ring-blue-500"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  htmlFor="utilities"
                  className="block text-sm font-medium text-gray-700"
                >
                  Utilities (e.g., electricity, water)
                </label>
                <input
                  type="number"
                  name="utilities"
                  value={expenses.utilities}
                  placeholder="Enter utility expenses"
                  className="border p-2 rounded-md w-full mt-1 shadow-sm focus:ring-2 focus:ring-blue-500"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  htmlFor="depreciationOfFixedAssets"
                  className="block text-sm font-medium text-gray-700"
                >
                  Depreciation of Fixed Assets
                </label>
                <input
                  type="number"
                  name="depreciationOfFixedAssets"
                  value={expenses.depreciationOfFixedAssets}
                  placeholder="Enter depreciation value"
                  className="border p-2 rounded-md w-full mt-1 shadow-sm focus:ring-2 focus:ring-blue-500"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="mt-8 flex justify-center space-x-4">
            <button
              type="submit"
              className="w-40 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300 shadow-md"
            >
              Next Page
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Expensess;
