import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase'; // Import your Firebase configuration
import { signOut } from 'firebase/auth'; // Firebase signOut method
import { toast } from 'react-toastify'; // For showing logout success message
import 'react-toastify/dist/ReactToastify.css'; // Toastify styles

const Navbar = () => {
  const navigate = useNavigate();

  // Handle logout function
  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast.success('Logged out successfully');
      navigate('/login'); // Redirect to login page after logout
    } catch (error) {
      toast.error('Failed to log out: ' + error.message);
    }
  };

  return (
    <div className="bg-[#f2f2f2] shadow-lg p-4">
      <nav className="navbar px-6 py-4">
        <div className="flex-1">
          <Link to="/" className="text-3xl font-bold text-black hover:text-blue-500 transition-colors">
            TaxAI
          </Link>
        </div>

        <div className="flex-none gap-4">
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
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="User Avatar"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white rounded-md w-40"
            >
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
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
