// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import ThemeToggle from './components/ThemeToggle';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import About from './sections/About';
import ProjectDetailPage from './pages/ProjectDetailPage'; // 🔹 New Page
import './styles/main.css';
import BackgroundAnimation from './components/BackgroundAnimation';

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.body.classList.toggle('light-mode', !darkMode);
  }, [darkMode]);

  return (
    <Router>
      <BackgroundAnimation darkMode={darkMode} />
      <div className="app">
        <Sidebar />
        <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        <div className="fade-wrapper" key={darkMode ? 'dark' : 'light'}>
          <main className="sections">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Hero />
                    <Projects darkMode={darkMode} />
                    <About />
                  </>
                }
              />
              <Route
                path="/project/:id"
                element={<ProjectDetailPage darkMode={darkMode} />}
              />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;
