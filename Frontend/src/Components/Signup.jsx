import React, { useState } from "react";
import { auth, provider, createUserWithEmailAndPassword, signInWithPopup } from "../firebase"; // Import Firebase utilities

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Handle signup with Email and Password
  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Account created successfully!");
    } catch (error) {
      console.error("Signup error:", error);
    }
  };

  // Handle signup with Google
  const handleGoogleSignup = async () => {
    try {
      await signInWithPopup(auth, provider);
      alert("Signed up with Google successfully!");
    } catch (error) {
      console.error("Google signup error:", error);
    }
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-white">
      {/* Header */}

      {/* Main Content */}
      <div className="w-full max-w-sm flex flex-col p-4">
        {/* Signup Form */}
        <div className="w-full">
          <h1 className="mb-2 text-3xl font-bold text-black text-center">Sign up</h1>
          <p className="text-xs text-gray-600 text-center">
            Please fill in your details to create an account
          </p>
        </div>

        <div className="mt-6 flex flex-col gap-3">
          {/* name Input */}
          <div className="flex flex-col gap-1">
            <label className="text-xs text-gray-700">Name</label>
            <input
              placeholder="Enter Full Name..."
              autoComplete="off"
              className="w-full border border-gray-300 bg-white p-2 text-black rounded-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email Input */}
          <div className="flex flex-col gap-1">
            <label className="text-xs text-gray-700">Email</label>
            <input
              placeholder="Enter your email..."
              type="email"
              autoComplete="off"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Bind input to state
              className="w-full border border-gray-300 bg-white p-2 text-black rounded-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password Input */}
          <div className="flex flex-col gap-1">
            <label className="text-xs text-gray-700">Password</label>
            <input
              placeholder="Enter a password..."
              type="password"
              autoComplete="off"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Bind input to state
              className="w-full border border-gray-300 bg-white p-2 text-black rounded-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Checkbox */}
          <div className="flex items-center text-xs">
            <input
              type="checkbox"
              id="terms"
              className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label htmlFor="terms" className="ml-2 text-gray-700">
              I agree to the{" "}
              <span className="text-blue-600 cursor-pointer hover:underline">
                terms and conditions
              </span>
            </label>
          </div>

          {/* Signup Button */}
          <button
            onClick={handleSignup} // Bind form submission handler
            className="mt-3 w-full bg-blue-600 p-2 text-center font-bold text-white rounded-md hover:bg-blue-700 transition duration-150"
          >
            Sign up
          </button>

          {/* OR Divider */}
          <div className="relative flex py-3 items-center">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-2 text-xs text-gray-500">OR</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          {/* Sign up with Google */}
          <button
            onClick={handleGoogleSignup} // Bind Google signup handler
            className="flex items-center justify-center gap-2 w-full border border-gray-300 bg-white p-2 text-gray-700 rounded-md hover:bg-gray-50"
          >
            {/* Google Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              viewBox="0 0 24 24"
              width="20"
              className="text-gray-500"
            >
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              ></path>
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              ></path>
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              ></path>
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              ></path>
            </svg>
            Sign up with Google
          </button>

          {/* Signup Link */}
          <p className="mt-6 text-xs text-center text-gray-700">
            Already have an account?{" "}
            <span className="cursor-pointer font-bold text-blue-600 hover:underline">
              Log in
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
