/** @format */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

function ForeignTransaction({ nextStep, submitForm }) {
  const navigate = useNavigate();

  const [foreignTransaction, setForeignTransaction] = useState({
    exportIncome: 0,
    foreignTaxCredit: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForeignTransaction({ ...foreignTransaction, [name]: Number(value) }); // Convert to number
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("working");
    submitForm({ foreignTransaction });
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
              Foreign Transactions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="exportIncome"
                  className="block text-sm font-medium text-gray-700"
                >
                  Income from Export
                </label>
                <input
                  type="number"
                  name="exportIncome"
                  value={foreignTransaction.exportIncome}
                  placeholder="Enter export income"
                  className="border p-2 rounded-md w-full mt-1 shadow-sm focus:ring-2 focus:ring-blue-500"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  htmlFor="foreignTaxCredit"
                  className="block text-sm font-medium text-gray-700"
                >
                  Foreign Tax Paid/Tax Credit Claimed
                </label>
                <input
                  type="number"
                  name="foreignTaxCredit"
                  value={foreignTransaction.foreignTaxCredit}
                  placeholder="Enter foreign tax paid/credit"
                  className="border p-2 rounded-md w-full mt-1 shadow-sm focus:ring-2 focus:ring-blue-500"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="mt-8 flex justify-center space-x-4">
            <button
              type="submit" // Ensure this is a submit button
              className="w-40 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300 shadow-md"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default ForeignTransaction;
