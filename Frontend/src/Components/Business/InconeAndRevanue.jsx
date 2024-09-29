/** @format */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const IncomeAndRevenue = ({ nextStep }) => {
  const [incomeAndRevenue, setIncomeAndRevenue] = useState({
    grossRevenue: 0,
    incomeSources: {
      domestic: 0,
      foreign: 0,
      interestIncome: 0,
      dividendIncome: 0,
      capitalGains: 0,
    },
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name in incomeAndRevenue.incomeSources) {
      // Update the nested incomeSources object
      setIncomeAndRevenue({
        ...incomeAndRevenue,
        incomeSources: {
          ...incomeAndRevenue.incomeSources,
          [name]: value,
        },
      });
    } else {
      // Update the top-level fields
      setIncomeAndRevenue({ ...incomeAndRevenue, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    nextStep({ incomeAndRevenue });
    // console.log("Submitted Data:", incomeAndRevenue);
  };

  return (
    <>
      <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg mt-10">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
          Income and Revenue Information
        </h2>
        <form
          onSubmit={handleSubmit}
          className="space-y-10 bg-gray-50 p-6 rounded-lg"
        >
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-blue-600">
              Income and Revenue
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="grossRevenue"
                  className="block text-sm font-medium text-gray-700"
                >
                  Gross Revenue
                </label>
                <input
                  type="number"
                  name="grossRevenue"
                  value={incomeAndRevenue.grossRevenue || ""}
                  placeholder="Enter gross revenue"
                  className="border text-black p-2 rounded-md w-full mt-1 shadow-sm focus:ring-2 focus:ring-blue-500"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  htmlFor="domestic"
                  className="block text-sm font-medium text-gray-700"
                >
                  Domestic Income
                </label>
                <input
                  type="number"
                  name="domestic"
                  value={incomeAndRevenue.incomeSources.domestic || ""}
                  placeholder="Enter domestic income"
                  className="border text-black p-2 rounded-md w-full mt-1 shadow-sm focus:ring-2 focus:ring-blue-500"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  htmlFor="foreign"
                  className="block text-sm font-medium text-gray-700"
                >
                  Foreign Income
                </label>
                <input
                  type="number"
                  name="foreign"
                  value={incomeAndRevenue.incomeSources.foreign || ""}
                  placeholder="Enter foreign income"
                  className="border text-black p-2 rounded-md w-full mt-1 shadow-sm focus:ring-2 focus:ring-blue-500"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  htmlFor="interestIncome"
                  className="block text-sm font-medium text-gray-700"
                >
                  Interest Income
                </label>
                <input
                  type="number"
                  name="interestIncome"
                  value={incomeAndRevenue.incomeSources.interestIncome || ""}
                  placeholder="Enter interest income"
                  className="border text-black p-2 rounded-md w-full mt-1 shadow-sm focus:ring-2 focus:ring-blue-500"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  htmlFor="dividendIncome"
                  className="block text-sm font-medium text-gray-700"
                >
                  Dividend Income
                </label>
                <input
                  type="number"
                  name="dividendIncome"
                  value={incomeAndRevenue.incomeSources.dividendIncome || ""}
                  placeholder="Enter dividend income"
                  className="border text-black p-2 rounded-md w-full mt-1 shadow-sm focus:ring-2 focus:ring-blue-500"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  htmlFor="capitalGains"
                  className="block text-sm font-medium text-gray-700"
                >
                  Capital Gains
                </label>
                <input
                  type="number"
                  name="capitalGains"
                  value={incomeAndRevenue.incomeSources.capitalGains || ""}
                  placeholder="Enter capital gains"
                  className="border text-black p-2 rounded-md w-full mt-1 shadow-sm focus:ring-2 focus:ring-blue-500"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="mt-8 flex justify-center space-x-4">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300 shadow-md"
          >
            Next Page
          </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default IncomeAndRevenue;
