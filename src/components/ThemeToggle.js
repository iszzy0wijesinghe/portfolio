import React from 'react';
import './ThemeToggle.css';

const ThemeToggle = ({ darkMode, setDarkMode }) => {
  return (
    <div
      className="theme-toggle"
      onClick={() => setDarkMode(prev => !prev)}
      title="Toggle Theme"
    >
      {darkMode ? (
        // 🌙 White moon icon for dark mode
        <svg
          className="theme-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="#ffffff"
        >
          <path d="M21 15.5A9 9 0 0 1 9.5 3a7.5 7.5 0 1 0 11.5 12.5z" />
        </svg>
      ) : (
        // ☀️ Black sun icon for light mode
        <svg
          className="theme-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="#000000"
        >
          <path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12zm0-16a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1zm0 18a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1zm10-8a1 1 0 0 1-1 1h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1zM4 12a1 1 0 0 1-1-1H2a1 1 0 1 1 0 2h1a1 1 0 0 1 1-1zm15.07 6.07a1 1 0 0 1-1.41 1.41l-.71-.71a1 1 0 0 1 1.41-1.41l.71.71zM5.64 5.64a1 1 0 0 1-1.41-1.41l.71-.71a1 1 0 0 1 1.41 1.41l-.71.71zm12.02-1.41a1 1 0 0 1 1.41 1.41l-.71.71a1 1 0 0 1-1.41-1.41l.71-.71zM5.64 18.36a1 1 0 0 1-1.41 1.41l-.71-.71a1 1 0 1 1 1.41-1.41l.71.71z" />
        </svg>
      )}
    </div>
  );
};

export default ThemeToggle;
