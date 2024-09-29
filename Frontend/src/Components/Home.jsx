import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div
      className="bg-cover bg-center min-h-screen"
      style={{
        backgroundImage: 'url("https://thecsspoint.com/wp-content/uploads/2023/11/01-6.jpg")',
        backgroundBlendMode: 'overlay',
        backgroundColor: 'rgba(255, 255, 255, 0.6)', // Adds an overlay to blend the image
      }}
    >
      <section className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-black mb-6">
            Unlock Your Financial Potential
          </h1>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Simplifying Tax Filing with AI-Powered Solutions
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Experience effortless tax filing and maximize your savings with personalized insights.
          </p>
          <Link to="/get-started">
            <button className="text-lg font-semibold px-6 py-3 rounded-md bg-[#ebd4ad] text-black hover:bg-gray-400 transition">
              Get Started
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
