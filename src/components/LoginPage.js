import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const [message, setMessage] = useState(""); // Success/Error message
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // For redirecting after login

  const validateInput = (name, value) => {
    let error = "";

    if (name === "username") {
      if (!/[a-zA-Z0-9]{3,}/.test(value)) error = "Enter a valid username";
    }

    if (name === "password") {
      if (value.length < 6) error = "Password must be at least 6 characters long.";
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

    if (errors.username || errors.password) {
      setMessage("Fix the errors before submitting.");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post("http://localhost:5000/login", formData, {
        withCredentials: true,
      });

      if (response.status === 200) {
        setMessage("Login successful!");
        setTimeout(() => {
          navigate("/game"); // Redirect to the game page
        }, 1000);
      } else {
        setMessage("Invalid credentials. Try again.");
      }
    } catch (error) {
      setMessage("Error: " + (error.response?.data?.message || "Server error"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-center text-blue-500 mb-6">
          Login to QuizMe
        </h2>
        {message && <p className="text-center text-sm text-red-600">{message}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="username"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
            {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username}</p>}
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            disabled={loading || !!errors.username || !!errors.password}
          >
            {loading ? "Logging in..." : "Log In"}
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <a href="/signup" className="text-blue-600 hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;