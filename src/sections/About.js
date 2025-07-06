// src/sections/About.js
import React from 'react';
import { motion } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';

const About = () => {
  return (
    <section id="about" className="section">
      <motion.div
        initial={{ x: -80, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2>Hi there</h2>
        <p>
          I'm [Your Name], a frontend developer and 3D UI enthusiast. Welcome to my futuristic portfolio.
        </p>
      </motion.div>

      <Parallax speed={12}>
        <motion.img
          src="https://via.placeholder.com/300x400"
          alt="profile"
          style={{ borderRadius: '1rem' }}
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        />
      </Parallax>
    </section>
  );
};

export default About;
