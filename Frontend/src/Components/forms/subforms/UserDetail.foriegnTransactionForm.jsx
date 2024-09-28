/** @format */

import React from "react";
// import DashBoard from "../../DashBoard/DashBoard";
import { useNavigate, useOutletContext } from "react-router-dom"; // Import useOutletContext
import { FaInfoCircle, FaCheckCircle, FaTimesCircle } from "react-icons/fa";
// import Cookies from "js-cookie"


function ForiegnTransection() {
  // Access formData and updateFormData from the parent using useOutletContext

  return (
    <>
      <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg mt-10">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
          Information
        </h2>
        <form
          onSubmit={handleSubmitUserDetails}
          className="space-y-10 bg-gray-50 p-6 rounded-lg"
        >
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
                  placeholder="Enter export income"
                  value={formData.exportIncome || ""} // Bind the input to formData
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
                  placeholder="Enter foreign tax paid/credit"
                  value={formData.foreignTaxCredit || ""} // Bind the input to formData
                  className="border p-2 rounded-md w-full mt-1 shadow-sm focus:ring-2 focus:ring-blue-500"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </form>
        <div className="mt-8 flex justify-center space-x-4">
          <button
            onClick={() => navigate("/userDetail/employee-benifit")}
            className="w-40 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300 shadow-md"
          >
            Prev Page
          </button>
          <button
            type="submit"
            onClick={handleSubmitUserDetails}
            className="w-40 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300 shadow-md"
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
}

export default ForiegnTransection;
