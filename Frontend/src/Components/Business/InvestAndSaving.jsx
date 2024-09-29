import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const InvestAndSaving = ({ nextStep }) => {
  const [investmentsAndSavings, setinvestmentsAndSavings] = useState({
    investmentsInInfrastructure: 0,
    savingsSchemesForEmployees: 0,
    insurancePremiumsPaid: 0,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setinvestmentsAndSavings({ ...investmentsAndSavings, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    nextStep({ investmentsAndSavings });
  };

  return (
    <>
      <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg mt-10">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
          Information
        </h2>
        <form
          onSubmit={handleSubmit}
          className="space-y-10 bg-gray-50 p-6 rounded-lg"
        >
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-blue-600">
              Investments and Savings
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="investmentsInInfrastructure"
                  className="block text-sm font-medium text-gray-700"
                >
                  Investments in Infrastructure
                </label>
                <input
                  type="number"
                  name="investmentsInInfrastructure"
                  value={investmentsAndSavings.investmentsInInfrastructure}
                  placeholder="Enter infrastructure investments"
                  className="border text-black p-2 rounded-md w-full mt-1 shadow-sm focus:ring-2 focus:ring-blue-500"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  htmlFor="savingsSchemesForEmployees"
                  className="block text-sm font-medium text-gray-700"
                >
                  Savings Schemes for Employees
                </label>
                <input
                  type="number"
                  name="savingsSchemesForEmployees"
                  value={investmentsAndSavings.savingsSchemesForEmployees}
                  placeholder="Enter employee savings schemes"
                  className="border text-black p-2 rounded-md w-full mt-1 shadow-sm focus:ring-2 focus:ring-blue-500"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  htmlFor="insurancePremiumsPaid"
                  className="block text-sm font-medium text-gray-700"
                >
                  Insurance Premiums Paid
                </label>
                <input
                  type="number"
                  name="insurancePremiumsPaid"
                  value={investmentsAndSavings.insurancePremiumsPaid}
                  placeholder="Enter insurance premiums"
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
      </div>
    </>
  );
};

export default InvestAndSaving;
