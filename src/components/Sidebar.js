// src/components/Sidebar.js
import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="logo">iszzy.</div>
      <nav className="nav">
        <a href="#hero">Welcome</a>
        <a href="#projects">Projects</a>
        <a href="#about">Details</a>
        <a href="#contact">Contact</a>
      </nav>
      <div className="icons">
        
      </div>
    </aside>
  );
};

export default Sidebar;
