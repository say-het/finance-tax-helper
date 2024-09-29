import React, { useState } from 'react';

const GeneralInfoForm = ({ nextStep }) => {
  const [generalInfo, setGeneralInfo] = useState({
    name: '',
    panNumber: '',
    state: '',
    city: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setGeneralInfo({ ...generalInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    nextStep({ generalInfo });
  };

  return (
    <>
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
        General Information
      </h2>
      <form
        onSubmit={handleSubmit}
        className="space-y-10 bg-gray-50 p-6 rounded-lg"
      >
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-blue-600">
            General Info
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                value={generalInfo.name}
                placeholder="Enter your Name"
                className="border text-black p-2 rounded-md w-full mt-1 shadow-sm focus:ring-2 focus:ring-blue-500"
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                htmlFor="panNumber"
                className="block text-sm font-medium text-gray-700"
              >
                PAN Number
              </label>
              <input
                type="text"
                name="panNumber"
                value={generalInfo.panNumber}
                placeholder="Enter your PAN Number"
                className="border text-black p-2 rounded-md w-full mt-1 shadow-sm focus:ring-2 focus:ring-blue-500"
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                htmlFor="state"
                className="block text-sm font-medium text-gray-700"
              >
                State
              </label>
              <input
                type="text"
                name="state"
                value={generalInfo.state}
                placeholder="Enter your State"
                className="border text-black p-2 rounded-md w-full mt-1 shadow-sm focus:ring-2 focus:ring-blue-500"
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                htmlFor="city"
                className="block text-sm font-medium text-gray-700"
              >
                City
              </label>
              <input
                type="text"
                name="city"
                value={generalInfo.city}
                placeholder="Enter your City"
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

export default GeneralInfoForm;
