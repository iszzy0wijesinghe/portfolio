// src/pages/ProjectPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import './ProjectPage.css';

const projectData = {
  1: {
    title: 'Designing the Future',
    subtitle: 'Education Platform',
    content: 'This is a full page dedicated to the future of education...',
  },
  2: {
    title: 'AI Art Studio',
    subtitle: 'Creative AI Tool',
    content: 'Explore AI-generated art and tools...',
  },
  3: {
    title: 'MotionHub',
    subtitle: 'Portfolio Engine',
    content: 'An interactive futuristic portfolio builder...',
  },
};

const ProjectPage = ({ darkMode }) => {
  const { id } = useParams();
  const project = projectData[id];

  if (!project) return <div>Project not found.</div>;

  return (
    <div className={`project-page ${darkMode ? 'dark' : 'light'}`}>
      <h1>{project.title}</h1>
      <h3>{project.subtitle}</h3>
      <p>{project.content}</p>
    </div>
  );
};

export default ProjectPage;
