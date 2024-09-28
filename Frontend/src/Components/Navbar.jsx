const Navbar = () => {
  return (
    <div>
      <div
        className="navbar px-16 py-3 rounded-lg"
        style={{ backgroundColor: "#FDF5E6", borderRadius: "10px" }}
      >
        <div className="flex-1">
          <a
            className="text-2xl font-bold"
            style={{ color: "black", marginLeft: "10px" }}
          >
            TaxAI
          </a>
        </div>

        <div className="flex-none gap-8">
          <button
            className="text-xl font-bold px-8 py-2 rounded-full border-0"
            style={{
              backgroundColor: "#BC885D",
              color: "black",
              borderRadius: "12px",
            }}
          >
            TaxBot
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
              className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow"
              style={{
                backgroundColor: "#BC885D",
                color: "black",
                borderRadius: "10px",
              }}
            >
              <li>
                <a
                  className="justify-between hover:bg-[#FDF5E6]"
                  style={{ transition: "background-color 0.3s ease" }}
                >
                  Profile
                </a>
              </li>
              <li>
                <a
                  className="hover:bg-[#FDF5E6]"
                  style={{ transition: "background-color 0.3s ease" }}
                >
                  Settings
                </a>
              </li>
              <li>
                <a
                  className="hover:bg-[#FDF5E6]"
                  style={{ transition: "background-color 0.3s ease" }}
                >
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
