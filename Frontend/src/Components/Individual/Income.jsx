import React, { useState } from 'react';

const IncomeForm = ({ nextStep }) => {
  const [income, setIncome] = useState({
    salary: 0,
    bonuses: 0,
    HRallowances: 0,
    petrolAllowance: 0,
    profitSharing: 0,
    stockOptions: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setIncome({ ...income, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    nextStep({ income });
  };

  return (
    <>
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
        Income Information
      </h2>
      <form
        onSubmit={handleSubmit}
        className="space-y-10 bg-gray-50 p-6 rounded-lg"
      >
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-blue-600">
            Income
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="salary"
                className="block text-sm font-medium text-gray-700"
              >
                Salary
              </label>
              <input
                type="number"
                name="salary"
                value={income.salary}
                placeholder="Enter your Salary"
                className="border text-black p-2 rounded-md w-full mt-1 shadow-sm focus:ring-2 focus:ring-blue-500"
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                htmlFor="bonuses"
                className="block text-sm font-medium text-gray-700"
              >
                Bonuses
              </label>
              <input
                type="number"
                name="bonuses"
                value={income.bonuses}
                placeholder="Enter your Bonuses"
                className="border text-black p-2 rounded-md w-full mt-1 shadow-sm focus:ring-2 focus:ring-blue-500"
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                htmlFor="HRallowances"
                className="block text-sm font-medium text-gray-700"
              >
                HRA Allowances
              </label>
              <input
                type="number"
                name="HRallowances"
                value={income.HRallowances}
                placeholder="Enter your HRA Allowances"
                className="border text-black p-2 rounded-md w-full mt-1 shadow-sm focus:ring-2 focus:ring-blue-500"
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                htmlFor="petrolAllowance"
                className="block text-sm font-medium text-gray-700"
              >
                Petrol Allowance
              </label>
              <input
                type="number"
                name="petrolAllowance"
                value={income.petrolAllowance}
                placeholder="Enter your Petrol Allowance"
                className="border text-black p-2 rounded-md w-full mt-1 shadow-sm focus:ring-2 focus:ring-blue-500"
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                htmlFor="profitSharing"
                className="block text-sm font-medium text-gray-700"
              >
                Profit Sharing
              </label>
              <input
                type="number"
                name="profitSharing"
                value={income.profitSharing}
                placeholder="Enter Profit Sharing"
                className="border text-black p-2 rounded-md w-full mt-1 shadow-sm focus:ring-2 focus:ring-blue-500"
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                htmlFor="stockOptions"
                className="block text-sm font-medium text-gray-700"
              >
                Stock Options
              </label>
              <input
                type="number"
                name="stockOptions"
                value={income.stockOptions}
                placeholder="Enter Stock Options"
                className="border text-black p-2 rounded-md w-full mt-1 shadow-sm focus:ring-2 focus:ring-blue-500"
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
    </>
  );
};

export default IncomeForm;
