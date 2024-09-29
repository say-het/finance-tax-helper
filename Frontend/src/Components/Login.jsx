import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { auth, signInWithEmailAndPassword, signInWithPopup, provider } from "../firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); // To track loading state
  const navigate = useNavigate();

  // Handle login with Email and Password
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      await signInWithEmailAndPassword(auth, email, password);
      
      // Store email in localStorage
      localStorage.setItem('userEmail', email);
      
      toast.success("Logged in successfully!");
      setLoading(false);
      navigate("/dashboard");
    } catch (error) {
      setLoading(false);
      toast.error("Login failed: " + error.message);
    }
  };
  // Handle login with Google
  const handleGoogleLogin = async () => {
    setLoading(true);
    try {
      await signInWithPopup(auth, provider);
      toast.success("Logged in with Google successfully!");
      setLoading(false);
      navigate("/home"); // Redirect on successful login
    } catch (error) {
      setLoading(false);
      toast.error("Google login failed: " + error.message);
    }
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-white">
      <ToastContainer />
      {/* Header */}

      {/* Main Content */}
      <div className="w-full max-w-sm flex flex-col">
        <div className="w-full">
          <h1 className="mb-2 text-3xl font-bold text-black text-center">Log in</h1>
          <p className="text-xs text-gray-600 text-center">Please log into your account</p>
        </div>

        <div className="mt-6 flex flex-col gap-3">
          {/* Email Input */}
          <div className="flex flex-col gap-1">
            <label className="text-xs text-gray-700">Email</label>
            <input
              placeholder="Enter your email..."
              type="email"
              autoComplete="off"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 bg-white p-2 text-black rounded-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password Input */}
          <div className="flex flex-col gap-1">
            <label className="text-xs text-gray-700">Password</label>
            <input
              placeholder="Enter a password..."
              autoComplete="off"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 bg-white p-2 text-black rounded-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Login Button */}
          <button
            onClick={handleLogin}
            className="mt-3 w-full bg-blue-600 p-2 text-center font-bold text-white rounded-md hover:bg-blue-700 transition duration-150"
          >
            {loading ? <span className="loading loading-spinner loading-sm"></span> : "Log in"}
          </button>

          {/* OR Divider */}
          <div className="relative flex py-3 items-center">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-2 text-xs text-gray-500">OR</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          Login with Google
          <button
            onClick={handleGoogleLogin}
            className="flex items-center justify-center gap-2 w-full border border-gray-300 bg-white p-2 text-gray-700 rounded-md hover:bg-gray-50"
          >
            {loading ? <span className="loading loading-spinner loading-sm"></span> : "Login with Google"}
          </button> 

          {/* {/* Sign up Link */}
          <p className="mt-6 text-xs text-center text-gray-700">
            Don't have an account?{" "}
            <span className="cursor-pointer font-bold text-blue-600 hover:underline">Create an account</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
