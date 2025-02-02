import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState(""); 
  const [showPassword, setShowPassword] = useState(false);
  const [success, setSuccess] = useState(false); // Track success animation
  const navigate = useNavigate(); // Hook for navigation

  const validateInput = (name, value) => {
    let error = "";
    if (name === "username") {
      if (value.length < 3) error = "Username must be at least 3 characters long.";
      else if (!/^[a-zA-Z0-9_]+$/.test(value)) error = "Username can only contain letters, numbers, and underscores.";
    }
    if (name === "email") {
      if (!/^\S+@\S+\.\S+$/.test(value)) error = "Enter a valid email address.";
    }
    if (name === "password") {
      if (value.length < 6) error = "Password must be at least 6 characters long.";
      else if (!/[0-9]/.test(value)) error = "Password must contain at least one number.";
      else if (!/[!@#$%^&*]/.test(value)) error = "Password must contain at least one special character (!@#$%^&*).";
    }
    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateInput(name, value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (errors.username || errors.email || errors.password) {
      setMessage("Fix the errors before submitting.");
      return;
    }
    try {
      const response = await axios.post("http://localhost:5000/signup", formData);
      if (response.status === 201) {
        setMessage("Account created successfully!");
        setSuccess(true); // Trigger animation

        // Redirect to the game page after animation
        setTimeout(() => {
          navigate("/login"); // Change this to your actual game page route
        }, 3000);
      } else {
        setMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      setMessage("Error: " + (error.response?.data?.message || "Server error"));
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6 relative">
        <h2 className="text-2xl font-bold text-center text-red-500 mb-6">Create an Account</h2>

        {/* Success Animation */}
        <AnimatePresence>
          {success && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
              className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-white bg-opacity-90 rounded-lg"
            >
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-green-500 text-6xl"
                >
                  ✅
                </motion.div>
                <p className="text-green-600 font-bold text-lg mt-2">Success! Redirecting...</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {message && <p className="text-center text-sm text-red-600">{message}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
            {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
            <div className="mt-2">
              <input 
                type="checkbox" 
                id="showPassword" 
                checked={showPassword} 
                onChange={() => setShowPassword(!showPassword)} 
                className="mr-2"
              />
              <label htmlFor="showPassword" className="text-sm text-gray-600">Show Password</label>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-red-500 text-white rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            disabled={!!errors.username || !!errors.email || !!errors.password}
          >
            Sign Up
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <a href="/login" className="text-blue-600 hover:underline">
            Log In
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;