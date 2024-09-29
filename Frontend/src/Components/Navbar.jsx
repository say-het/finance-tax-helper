import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase'; // Import your Firebase configuration
import { signOut, onAuthStateChanged } from 'firebase/auth'; // Firebase signOut and auth state listener
import { toast } from 'react-toastify'; // For showing logout success message
import 'react-toastify/dist/ReactToastify.css'; // Toastify styles

const Navbar = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null); // State to track logged-in user

  // Check user authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // Set user if logged in, null if not
    });

    return () => unsubscribe(); // Cleanup subscription on unmount
  }, []);

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
          <Link to="/" className="text-3xl font-bold text-black hover:text-[#c18e35] transition-colors">
            FinTaxAI
          </Link>
        </div>

        <div className="flex-none gap-4">
          {user ? (
            <>
              {/* Show TaxBot and OCR-AI buttons only if the user is logged in */}
              <Link to="/taxbot">
  <button className="text-lg font-semibold px-4 py-2 rounded-md bg-transparent text-black hover:bg-[#ebd4ad]   transition">
    TaxBot
  </button>
</Link>
<Link to="/seetransations">
  <button className="text-lg font-semibold px-4 py-2 rounded-md bg-transparent text-black hover:bg-[#ebd4ad] transition">
    See Transactions
  </button>
</Link>
<Link to="/ocr-ai">
  <button className="text-lg font-semibold px-4 py-2 rounded-md bg-transparent text-black hover:bg-[#ebd4ad] transition">
    OCR-AI
  </button>
</Link>


              {/* Show avatar and dropdown if user is logged in */}
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img
                      alt="User Avatar"
                      src={
                        user.photoURL ||
                        'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'
                      }
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
            </>
          ) : (
            <>
              {/* Show Login and Signup buttons if user is not logged in */}
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

export default Navbar;
