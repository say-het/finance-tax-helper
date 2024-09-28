import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ user, handleLogout }) => {
  return (
    <div className="bg-[#f2f2f2] shadow-lg p-4">
      <nav className="navbar px-6 py-4">
        <div className="flex-1">
          <Link to="/" className="text-3xl font-bold text-black hover:text-blue-500 transition-colors">
            TaxAI
          </Link>
        </div>

        <div className="flex-none gap-4">
          {user ? (
            <>
              <Link to="/taxbot">
                <button className="text-lg font-semibold px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition">
                  TaxBot
                </button>
              </Link>
              <Link to="/ocr-ai">
                <button className="text-lg font-semibold px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition">
                  OCR-AI
                </button>
              </Link>

              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img
                      alt="User Avatar"
                      src={user.photoURL || 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'}
                    />
                  </div>
                </div>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white rounded-md w-40">
                  <li>
                    <Link to="/profile" className="text-gray-800 hover:bg-gray-100 p-2 rounded-md transition">
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link to="/settings" className="text-gray-800 hover:bg-gray-100 p-2 rounded-md transition">
                      Settings
                    </Link>
                  </li>
                  <li>
                    <a
                      onClick={handleLogout}
                      className="text-gray-800 hover:bg-gray-100 p-2 rounded-md transition cursor-pointer"
                    >
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <>
              <Link to="/login">
                <button className="text-lg font-semibold px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition">
                  Login
                </button>
              </Link>
              <Link to="/signup">
                <button className="text-lg font-semibold px-4 py-2 rounded-md bg-gray-600 text-white hover:bg-gray-700 transition">
                  Signup
                </button>
              </Link>
            </>
          )}
        </div>
      </nav>
    </div>
  );
};

const HomePage = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* <Navbar user={null} /> Pass user prop as needed */}
      <section className="container mx-auto px-6 py-16 flex items-center justify-between">
        <div className="w-1/2">
          <h1 className="text-5xl font-bold text-black mb-6">
            Landing page template for developers & startups
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Beautifully designed templates using React.js, Tailwind CSS, and styled-components! Save weeks of time and build your landing page in minutes.
          </p>
          <Link to="/get-started">
            <button className="text-lg font-semibold px-6 py-3 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition">
              Get Started
            </button>
          </Link>
        </div>
        <div className="w-1/2">
          <img
            src="https://via.placeholder.com/500x400"
            alt="Illustration"
            className="mx-auto"
          />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
