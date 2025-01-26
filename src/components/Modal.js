import React from "react";
import { Link } from "react-router-dom";

const Modal = ({ isOpen, closeModal }) => {
  if (!isOpen) return null; // Don't render anything if modal is closed

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-96">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="border w-full px-4 py-2 rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="border w-full px-4 py-2 rounded"
            />
          </div>
          <div className="flex">
            <div>
              Don't have an account?
              <a className="hover:underline text-blue-600" href="/signup">Sign Up</a>
            </div>
            <button
              type="button"
              onClick={closeModal}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
            >
              Close
            </button>
            <button
              type="submit"
              className="ml-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
