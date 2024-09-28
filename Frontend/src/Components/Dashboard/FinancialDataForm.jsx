/** @format */

import React, { useState } from "react";

const FinancialDataForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    paidTo: "",
    amountPaid: "",
    date: "",
    typeofproduct: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data: ", formData); // This will log the updated formData from the parent
    onSubmit(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-lg p-6 w-full shadow-lg"
    >
      <h2 className="text-xl font-bold mb-4">Individual Financial Data</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Left Column */}
        <div className="mb-4">
          <label htmlFor="paidTo" className="block mb-1">
            Paid To
          </label>
          <input
            type="number"
            name="paidTo"
            id="paidTo"
            placeholder="Enter amount paid"
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="amountPaid" className="block mb-1">
            Amount Paid
          </label>
          <input
            type="number"
            name="amountPaid"
            id="amountPaid"
            placeholder="Enter amount paid"
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        {/* Right Column */}
        <div className="mb-4">
          <label htmlFor="date" className="block mb-1">
            Date
          </label>
          <input
            type="text" // Change to text to allow date format input
            name="date"
            id="date"
            placeholder="DD/MM/YYYY"
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="typeofproduct" className="block mb-1">
            Type of Product
          </label>
          <input
            type="text" // Change to text for product type input
            name="typeofproduct"
            id="typeofproduct"
            placeholder="Enter type of product"
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded mt-4"
      >
        Submit
      </button>
    </form>
  );
};

export default FinancialDataForm;
        