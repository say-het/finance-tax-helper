import React, { useState } from 'react';

const InvestmentsForm = ({ nextStep, submitForm }) => {
  const [investments, setInvestments] = useState({
    EPF: 0,
    PPF: 0,
    stocks: 0,
    mutualFunds: 0,
    realEstate: 0,
    fixedDeposits: 0,
    NPS: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInvestments({ ...investments, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm({ investments });
  };

  return (
    <>
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
        Investment Information
      </h2>
      <form
        onSubmit={handleSubmit}
        className="space-y-10 bg-gray-50 p-6 rounded-lg"
      >
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-blue-600">
            Investments
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="EPF"
                className="block text-sm font-medium text-gray-700"
              >
                EPF
              </label>
              <input
                type="number"
                name="EPF"
                value={investments.EPF}
                placeholder="Enter EPF"
                className="border text-black p-2 rounded-md w-full mt-1 shadow-sm focus:ring-2 focus:ring-blue-500"
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                htmlFor="PPF"
                className="block text-sm font-medium text-gray-700"
              >
                PPF
              </label>
              <input
                type="number"
                name="PPF"
                value={investments.PPF}
                placeholder="Enter PPF"
                className="border text-black p-2 rounded-md w-full mt-1 shadow-sm focus:ring-2 focus:ring-blue-500"
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                htmlFor="stocks"
                className="block text-sm font-medium text-gray-700"
              >
                Stocks
              </label>
              <input
                type="number"
                name="stocks"
                value={investments.stocks}
                placeholder="Enter Stocks"
                className="border text-black p-2 rounded-md w-full mt-1 shadow-sm focus:ring-2 focus:ring-blue-500"
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                htmlFor="mutualFunds"
                className="block text-sm font-medium text-gray-700"
              >
                Mutual Funds
              </label>
              <input
                type="number"
                name="mutualFunds"
                value={investments.mutualFunds}
                placeholder="Enter Mutual Funds"
                className="border text-black p-2 rounded-md w-full mt-1 shadow-sm focus:ring-2 focus:ring-blue-500"
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                htmlFor="realEstate"
                className="block text-sm font-medium text-gray-700"
              >
                Real Estate
              </label>
              <input
                type="number"
                name="realEstate"
                value={investments.realEstate}
                placeholder="Enter Real Estate"
                className="border text-black p-2 rounded-md w-full mt-1 shadow-sm focus:ring-2 focus:ring-blue-500"
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                htmlFor="fixedDeposits"
                className="block text-sm font-medium text-gray-700"
              >
                Fixed Deposits
              </label>
              <input
                type="number"
                name="fixedDeposits"
                value={investments.fixedDeposits}
                placeholder="Enter Fixed Deposits"
                className="border text-black p-2 rounded-md w-full mt-1 shadow-sm focus:ring-2 focus:ring-blue-500"
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                htmlFor="NPS"
                className="block text-sm font-medium text-gray-700"
              >
                NPS
              </label>
              <input
                type="number"
                name="NPS"
                value={investments.NPS}
                placeholder="Enter NPS"
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
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default InvestmentsForm;
