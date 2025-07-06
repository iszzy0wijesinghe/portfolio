// src/sections/Hero.js
import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero" className="section">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <span style={{ color: 'var(--accent-color)', fontWeight: '700', fontSize: '2.5rem' }}>
            Isindu Wijesinghe
          </span>
        <h1 style={{ fontSize: '4.5rem', fontWeight: '600', lineHeight: '1.3', marginTop: '0rem' }}>
          <span style={{ color: 'var(--accent-color)', fontWeight: '700' }}>
            Fast Learner +
          </span>
          <br />
          <span style={{ color: 'var(--text-color)' }}>
            <Typewriter
              words={[
                'Front-End Developer',
                'Full Stack Developer',
                'Graphic Designer',
                'UI/UX Designer',
                'Mobile App Developer',
              ]}
              loop={0}
              cursor
              cursorStyle={
                <span style={{
                  fontWeight: 700,
                  fontSize: '1.5rem',
                  color: 'var(--accent-color)'
                }}>_</span>
              }
              typeSpeed={80}
              deleteSpeed={40}
              delaySpeed={1500}
            />
          </span>
        </h1>
      </motion.div>
    </section>
  );
};

export default Hero;
