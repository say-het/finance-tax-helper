/** @format */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function EmployeeAndBenefit({nextStep}) {
  const navigate = useNavigate();

  const [employeeAndBenefit, setEmployeeAndBenefit] = useState({
    employeeInsurance: 0,
    travelCosts: 0,
    childrenEducation: 0,
    householdRent: 0,
    transportationExpenses: 0,
    medicalExpenses: 0,
    insurancePremiums: 0,
    debtRepayments: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployeeAndBenefit({ ...employeeAndBenefit, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    nextStep({ employeeAndBenefit });
    
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
              Employee Benefits
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="employeeInsurance"
                  className="block text-sm font-medium text-gray-700"
                >
                  Medical and Health Insurance for Employees
                </label>
                <input
                  type="number"
                  name="employeeInsurance"
                  value={employeeAndBenefit.employeeInsurance}
                  placeholder="Enter employee insurance costs"
                  className="border p-2 rounded-md w-full mt-1 shadow-sm focus:ring-2 focus:ring-blue-500"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  htmlFor="travelCosts"
                  className="block text-sm font-medium text-gray-700"
                >
                  Travel and Accommodation Costs
                </label>
                <input
                  type="number"
                  name="travelCosts"
                  value={employeeAndBenefit.travelCosts}
                  placeholder="Enter travel costs"
                  className="border p-2 rounded-md w-full mt-1 shadow-sm focus:ring-2 focus:ring-blue-500"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  htmlFor="childrenEducation"
                  className="block text-sm font-medium text-gray-700"
                >
                  Children Education Costs
                </label>
                <input
                  type="number"
                  name="childrenEducation"
                  value={employeeAndBenefit.childrenEducation}
                  placeholder="Enter education costs"
                  className="border p-2 rounded-md w-full mt-1 shadow-sm focus:ring-2 focus:ring-blue-500"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  htmlFor="householdRent"
                  className="block text-sm font-medium text-gray-700"
                >
                  Household Rent
                </label>
                <input
                  type="number"
                  name="householdRent"
                  value={employeeAndBenefit.householdRent}
                  placeholder="Enter rent amount"
                  className="border p-2 rounded-md w-full mt-1 shadow-sm focus:ring-2 focus:ring-blue-500"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  htmlFor="transportationExpenses"
                  className="block text-sm font-medium text-gray-700"
                >
                  Transportation Expenses
                </label>
                <input
                  type="number"
                  name="transportationExpenses"
                  value={employeeAndBenefit.transportationExpenses}
                  placeholder="Enter transportation expenses"
                  className="border p-2 rounded-md w-full mt-1 shadow-sm focus:ring-2 focus:ring-blue-500"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  htmlFor="medicalExpenses"
                  className="block text-sm font-medium text-gray-700"
                >
                  Medical Expenses
                </label>
                <input
                  type="number"
                  name="medicalExpenses"
                  value={employeeAndBenefit.medicalExpenses}
                  placeholder="Enter medical expenses"
                  className="border p-2 rounded-md w-full mt-1 shadow-sm focus:ring-2 focus:ring-blue-500"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  htmlFor="insurancePremiums"
                  className="block text-sm font-medium text-gray-700"
                >
                  Insurance Premiums
                </label>
                <input
                  type="number"
                  name="insurancePremiums"
                  value={employeeAndBenefit.insurancePremiums}
                  placeholder="Enter insurance premiums"
                  className="border p-2 rounded-md w-full mt-1 shadow-sm focus:ring-2 focus:ring-blue-500"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  htmlFor="debtRepayments"
                  className="block text-sm font-medium text-gray-700"
                >
                  Debt Repayments
                </label>
                <input
                  type="number"
                  name="debtRepayments"
                  value={employeeAndBenefit.debtRepayments}
                  placeholder="Enter debt repayments"
                  className="border p-2 rounded-md w-full mt-1 shadow-sm focus:ring-2 focus:ring-blue-500"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300 shadow-md"
          >
            Next Page
          </button>
        </form>
      </div>
    </>
  );
}

export default EmployeeAndBenefit;
