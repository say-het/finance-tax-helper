import React, { useState } from 'react';

const TaxAnalysisComponent = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-[#FDF5E6] p-6">
      {/* Left Side */}
      <div className="lg:w-1/2 flex flex-col justify-center items-center text-center bg-white shadow-lg rounded-lg p-10 m-4">
        <h2 className="text-3xl font-extrabold text-black mb-6">
          Enter Image for AI OCR <br /> Automatic Tax Analysis
        </h2>
        <p className="text-black text-lg">
          Upload your tax document and let our AI extract the data effortlessly.
        </p>
      </div>

      {/* Right Side */}
      <div className="lg:w-1/2 flex flex-col justify-center items-center bg-white shadow-lg rounded-lg p-10 m-4">
        <div className="w-full max-w-xs h-64 flex items-center justify-center bg-gray-100 border-2 border-dashed border-[#BC885D] rounded-lg mb-6 shadow-inner">
          {selectedImage ? (
            <img src={selectedImage} alt="Uploaded" className="h-full object-contain rounded-lg" />
          ) : (
            <span className="text-gray-400">No Image Selected</span>
          )}
        </div>
        <label className="block w-full">
          <span className="sr-only">Choose File</span>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-6 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#BC885D] file:text-white hover:file:bg-[#A97854] cursor-pointer"
          />
        </label>
      </div>
    </div>
  );
};

export default TaxAnalysisComponent;
