import React, { useState } from 'react';

const GeneralInformationForm = ({ nextStep }) => {
  const [generalInformation, setGeneralInformation] = useState({
    organizationName: '',
    registrationNumber: '',
    typeOfBusiness: '',
    yearOfIncorporation: 0,
    annualTurnover: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setGeneralInformation({ ...generalInformation, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    nextStep({ generalInformation });
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
            Organization Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="organizationName"
                className="block text-sm font-medium text-gray-700"
              >
                Organization Name
              </label>
              <input
                type="text"
                name="organizationName"
                value={generalInformation.organizationName}
                placeholder="Enter Organization Name"
                className="border text-black p-2 rounded-md w-full mt-1 shadow-sm focus:ring-2 focus:ring-blue-500"
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                htmlFor="registrationNumber"
                className="block text-sm font-medium text-gray-700"
              >
                Registration Number
              </label>
              <input
                type="text"
                name="registrationNumber"
                value={generalInformation.registrationNumber}
                placeholder="Enter Registration Number"
                className="border text-black p-2 rounded-md w-full mt-1 shadow-sm focus:ring-2 focus:ring-blue-500"
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                htmlFor="typeOfBusiness"
                className="block text-sm font-medium text-gray-700"
              >
                Type of Business
              </label>
              <input
                type="text"
                name="typeOfBusiness"
                value={generalInformation.typeOfBusiness}
                placeholder="Enter Business Type"
                className="border text-black p-2 rounded-md w-full mt-1 shadow-sm focus:ring-2 focus:ring-blue-500"
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                htmlFor="yearOfIncorporation"
                className="block text-sm font-medium text-gray-700"
              >
                Year of Incorporation
              </label>
              <input
                type="number"
                name="yearOfIncorporation"
                value={generalInformation.yearOfIncorporation}
                placeholder="Enter Year"
                className="border text-black p-2 rounded-md w-full mt-1 shadow-sm focus:ring-2 focus:ring-blue-500"
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                htmlFor="annualTurnover"
                className="block text-sm font-medium text-gray-700"
              >
                Annual Turnover
              </label>
              <input
                type="number"
                name="annualTurnover"
                value={generalInformation.annualTurnover}
                placeholder="Enter Annual Turnover"
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

export default GeneralInformationForm;
