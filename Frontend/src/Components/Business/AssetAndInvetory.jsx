/** @format */

import React, { useState } from "react";

const AssetAndInventory = ({ nextStep }) => {
  const [assetAndInventory, setAssetAndInventory] = useState({
    organizationName: '',
    registrationNumber: '',
    typeOfBusiness: '',
    yearOfIncorporation: 0,
    annualTurnover: 0,
    assetsValue: 0,
    inventoryValue: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAssetAndInventory({ ...assetAndInventory, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call nextStep to move to the next part of the multi-step form
    nextStep({ assetAndInventory });
    // console.log("Submitted data:", assetAndInventory);
  };

  return (
    <>
      <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg mt-10">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
          Asset and Inventory Information
        </h2>
        <form onSubmit={handleSubmit} className="space-y-10 bg-gray-50 p-6 rounded-lg">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-blue-600">
              Asset and Inventory
            </h3>
            <div className="mb-6">
              <label htmlFor="organizationName" className="block text-sm font-medium text-gray-700">
                Organization Name
              </label>
              <input
                type="text"
                name="organizationName"
                value={assetAndInventory.organizationName}
                onChange={handleChange}
                className="border p-2 rounded-md w-full mt-1 shadow-sm focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="registrationNumber" className="block text-sm font-medium text-gray-700">
                Registration Number
              </label>
              <input
                type="text"
                name="registrationNumber"
                value={assetAndInventory.registrationNumber}
                onChange={handleChange}
                className="border p-2 rounded-md w-full mt-1 shadow-sm focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="typeOfBusiness" className="block text-sm font-medium text-gray-700">
                Type of Business
              </label>
              <input
                type="text"
                name="typeOfBusiness"
                value={assetAndInventory.typeOfBusiness}
                onChange={handleChange}
                className="border p-2 rounded-md w-full mt-1 shadow-sm focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="yearOfIncorporation" className="block text-sm font-medium text-gray-700">
                Year of Incorporation
              </label>
              <input
                type="number"
                name="yearOfIncorporation"
                value={assetAndInventory.yearOfIncorporation}
                onChange={handleChange}
                className="border p-2 rounded-md w-full mt-1 shadow-sm focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="annualTurnover" className="block text-sm font-medium text-gray-700">
                Annual Turnover
              </label>
              <input
                type="number"
                name="annualTurnover"
                value={assetAndInventory.annualTurnover}
                onChange={handleChange}
                className="border p-2 rounded-md w-full mt-1 shadow-sm focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="assetsValue" className="block text-sm font-medium text-gray-700">
                Value of Current Assets
              </label>
              <input
                type="number"
                name="assetsValue"
                value={assetAndInventory.assetsValue}
                placeholder="Enter value of current assets"
                className="border p-2 rounded-md w-full mt-1 shadow-sm focus:ring-2 focus:ring-blue-500"
                onChange={handleChange}
              />
            </div>
            <div className="mb-6">
              <label htmlFor="inventoryValue" className="block text-sm font-medium text-gray-700">
                Inventory and Goods in Stock
              </label>
              <input
                type="number"
                name="inventoryValue"
                value={assetAndInventory.inventoryValue}
                placeholder="Enter inventory value"
                className="border p-2 rounded-md w-full mt-1 shadow-sm focus:ring-2 focus:ring-blue-500"
                onChange={handleChange}
              />
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
};

export default AssetAndInventory;
