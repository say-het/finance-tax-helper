import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <div className="navbar px-8 py-3 my-4 rounded-3xl shadow-[0_0_20px_rgba(188,136,93,0.8)] bg-[#FDF5E6]">
        <div className="flex-1">
          <a className="text-2xl font-bold ml-2 text-black">TaxAI</a>
        </div>

        <div className="flex-none gap-8">
          <Link to="/taxbot">
            <button className="text-xl font-bold px-8 py-2 rounded-full bg-[#BC885D] text-black">
              TaxBot
            </button>
          </Link>
          <button className="text-xl font-bold px-8 py-2 rounded-full bg-[#BC885D] text-black">
            OCR-AI
          </button>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-12 rounded-full">
                <img
                  alt="User Avatar"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow bg-[#BC885D] text-black"
            >
              <li>
                <a className="justify-between hover:bg-[#FDF5E6] transition-colors duration-300">
                  Profile
                </a>
              </li>
              <li>
                <a className="hover:bg-[#FDF5E6] transition-colors duration-300">
                  Settings
                </a>
              </li>
              <li>
                <a className="hover:bg-[#FDF5E6] transition-colors duration-300">
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
