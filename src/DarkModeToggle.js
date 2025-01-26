import React, { useState, useEffect } from 'react';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check the user's preference on initial load
    const savedMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedMode);
    if (savedMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    console.log('Dark Mode On!');
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark', !darkMode);

    // Save user preference in localStorage
    localStorage.setItem('darkMode', !darkMode);
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 bg-gray-300 dark:bg-gray-700 rounded-full"
    >
      {darkMode ? (
        <span role="img" aria-label="sun">
          🌞
        </span>
      ) : (
        <span role="img" aria-label="moon">
          🌙
        </span>
      )}
    </button>
  );
};

export default DarkModeToggle;
