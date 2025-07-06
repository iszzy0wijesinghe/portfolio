// src/sections/Projects.js
import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 1,
    title: 'SHOPCART- Logistic Grocery Management System',
    subtitle: 'E-Commerce Platform',
    description: 'Elevating grocery logistic management to next level.',
    Link: '',
    status: 'Completed',
  },
  {
    id: 2,
    title: 'MotionChat - Agent Chat System',
    subtitle: 'Chat Support System',
    description: 'Crfating chat agent support with powerfull features and richness of reliability.',
    
    status: 'Ongoing',
  },
  {
    id: 3,
    title: 'FinanceTracker',
    subtitle: 'Finance Tracking System',
    description: 'A futuristic portfolio platform with 3D & motion.',
    status: 'Pending',
  },
  {
    id: 4,
    title: 'MovieBrowser',
    subtitle: 'Video Browsing System',
    description: 'A futuristic portfolio platform with 3D & motion.',
    status: 'Ongoing',
  },
  {
    id: 5,
    title: 'Iszzy',
    subtitle: 'Premium Portfolio',
    description: 'A futuristic portfolio platform with 3D & motion.',
    status: 'Completed',
  },
];


const Projects = ({ darkMode }) => {
  const getCardStyle = () => ({
    background: darkMode
      ? 'rgba(0, 0, 0, 0.46)'
      : 'rgba(228, 228, 228, 0.72)',
    border: darkMode
      ? '1px solid rgba(0, 255, 255, 0.2)'
      : '1px solid rgba(0, 86, 86, 0.2)',
    boxShadow: darkMode
      ? '0 8px 24px rgba(0, 255, 255, 0.12)'
      : '0 12px 32px rgba(0, 0, 0, 0.12)',
    color: darkMode ? 'white' : '#111',
  });

  const getTitleStyle = () => ({
    color: darkMode ? '#ffffff' : '#111',
  });

  const getSubtitleStyle = () => ({
    color: darkMode ? '#aaa' : '#444',
  });

  const getDescStyle = () => ({
    color: darkMode ? 'rgba(255,255,255,0.9)' : '#222',
  });

  const getButtonStyle = () => ({
    color: darkMode ? '#00ffff' : '#111',
  });
  const getStatusClass = (status) => {
    switch (status) {
      case 'Completed':
        return 'status-tag completed';
      case 'Ongoing':
        return 'status-tag ongoing';
      case 'Pending':
        return 'status-tag pending';
      default:
        return 'status-tag';
    }
  };


  return (
    <section id="projects" className="section projects-section">
      <div className="projects-container">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="project-card"
            style={getCardStyle()}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
          >
            {/* <img src={project.image} alt={project.title} className="project-image" /> */}
            <h3 className="project-title" style={getTitleStyle()}>
              {project.title}
            </h3>
            <h4 className="project-subtitle" style={getSubtitleStyle()}>
              {project.subtitle}
            </h4>
            <p className="project-desc" style={getDescStyle()}>
              {project.description}
            </p>
            <div className="project-actions">
              <a href={`/project/${project.id}`} className="project-button">
                View Project →
              </a>
              <span className={getStatusClass(project.status)}>
                {project.status}
              </span>
            </div>


          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
