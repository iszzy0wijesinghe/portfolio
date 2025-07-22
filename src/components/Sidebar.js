// src/components/Sidebar.js
import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="logo">iszzy.</div>
      <nav className="nav">
        <a href="/#hero">Welcome</a>
        <a href="/#projects">Projects</a>
        <a href="/#about" onClick={() => {
          setTimeout(() => {
            const aboutSection = document.getElementById("about");
            if (aboutSection) {
              aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }, 0);
        }}>
          Details
        </a>

        
      </nav>
      <div className="icons">

      </div>
    </aside>
  );
};

export default Sidebar;
