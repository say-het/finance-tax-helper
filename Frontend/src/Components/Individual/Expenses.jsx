import React, { useState } from 'react';

const ExpensesForm = ({ nextStep }) => {
  const [expenses, setExpenses] = useState({
    childrenEducation: 0,
    householdRent: 0,
    transportationExpenses: 0,
    medicalExpenses: 0,
    insurancePremiums: 0,
    debtRepayments: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpenses({ ...expenses, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    nextStep({ expenses });
  };

  return (
    <>
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
        Expense Information
      </h2>
      <form
        onSubmit={handleSubmit}
        className="space-y-10 bg-gray-50 p-6 rounded-lg"
      >
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-blue-600">
            Expenses
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="childrenEducation"
                className="block text-sm font-medium text-gray-700"
              >
                Children Education
              </label>
              <input
                type="number"
                name="childrenEducation"
                value={expenses.childrenEducation}
                placeholder="Enter Children Education"
                className="border text-black p-2 rounded-md w-full mt-1 shadow-sm focus:ring-2 focus:ring-blue-500"
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
                value={expenses.householdRent}
                placeholder="Enter Household Rent"
                className="border text-black p-2 rounded-md w-full mt-1 shadow-sm focus:ring-2 focus:ring-blue-500"
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
                value={expenses.transportationExpenses}
                placeholder="Enter Transportation Expenses"
                className="border text-black p-2 rounded-md w-full mt-1 shadow-sm focus:ring-2 focus:ring-blue-500"
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
                value={expenses.medicalExpenses}
                placeholder="Enter Medical Expenses"
                className="border text-black p-2 rounded-md w-full mt-1 shadow-sm focus:ring-2 focus:ring-blue-500"
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
                value={expenses.insurancePremiums}
                placeholder="Enter Insurance Premiums"
                className="border text-black p-2 rounded-md w-full mt-1 shadow-sm focus:ring-2 focus:ring-blue-500"
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
                value={expenses.debtRepayments}
                placeholder="Enter Debt Repayments"
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

export default ExpensesForm;
