import React, { useState } from 'react';
import Modal from "./Modal";

const LandingPage = () => {

  const [isModalOpen, setIsModalOpen] = useState(false); // State to track modal visibility

  const openModal = () => setIsModalOpen(true); // Open modal
  const closeModal = () => setIsModalOpen(false); // Close modal

  return (
    <div className="bg-gray-800 min-h-screen">
      {/* Navbar */}
      <header className="bg-gray-800 shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-red-500">QuizMe</h1>
          <nav className="space-x-4">
            <a href="#features" className="text-gray-600 hover:text-red-500">
              Features
            </a>
            <a href="#how-it-works" className="text-gray-600 hover:text-red-500">
              How It Works
            </a>

            <button onClick={openModal} className='text-gray-600 hover:text-red-500'>
              Login
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-red-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold sm:text-6xl">
            Challenge Your Friends with QuizMe!
          </h1>
          <p className="mt-4 text-lg sm:text-xl">
            Create rooms, play quizzes, and see who tops the leaderboard. Fun, fast, and free!
          </p>
          <div className="mt-6">
            <a
              href="#signup"
              className="bg-white text-red-500 px-6 py-3 rounded-lg font-semibold shadow hover:bg-gray-100"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800">Features</h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="p-6 bg-white rounded-lg shadow">
              <h3 className="text-xl font-semibold text-red-500">Room-Based Multiplayer</h3>
              <p className="mt-2 text-gray-600">
                Create private rooms and challenge your friends to quizzes.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow">
              <h3 className="text-xl font-semibold text-red-500">Multiple Topics</h3>
              <p className="mt-2 text-gray-600">
                Choose from a variety of topics like science, sports, and more.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow">
              <h3 className="text-xl font-semibold text-red-500">Leaderboard</h3>
              <p className="mt-2 text-gray-600">
                Track your progress and see where you rank among friends.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-red-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold">How It Works</h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-3">
            <div>
              <h3 className="text-xl font-semibold">1. Sign Up</h3>
              <p className="mt-2">Create your account to get started.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">2. Choose a Quiz</h3>
              <p className="mt-2">Select a topic or create a custom quiz.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">3. Challenge Friends</h3>
              <p className="mt-2">Invite friends to your room and start the quiz!</p>
            </div>
          </div>
        </div>
      </section>

      <Modal isOpen={isModalOpen} closeModal={closeModal} />

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-400 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2025 QuizMe. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
