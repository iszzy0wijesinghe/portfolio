/** @format */

// src/sections/About.js
import React from "react";
import { motion } from "framer-motion";
import "./about.css";

const skills = [
  // 🔷 Frontend
  { name: "React.js", icon: "devicon-react-original" },
  { name: "HTML", icon: "devicon-html5-plain" },
  { name: "CSS", icon: "devicon-css3-plain" },
  { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain" },
  { name: "Bootstrap", icon: "devicon-bootstrap-plain" },

  // 🔷 Mobile
  { name: "Flutter", icon: "devicon-flutter-plain" },
  { name: "Kotlin", icon: "devicon-kotlin-plain" },
  { name: "Swift", icon: "devicon-swift-plain" },

  // 🔷 Backend
  { name: "Node.js", icon: "devicon-nodejs-plain" },
  { name: "Express.js", icon: "devicon-express-original" },
  { name: "REST APIs", icon: "devicon-fastapi-plain" }, // fallback icon for REST

  // 🔷 Programming Languages
  { name: "Java", icon: "devicon-java-plain" },
  { name: "JavaScript", icon: "devicon-javascript-plain" },
  { name: "Dart", icon: "devicon-dart-plain" },
  { name: "PHP", icon: "devicon-php-plain" },
  { name: "C", icon: "devicon-c-plain" },
  { name: "C++", icon: "devicon-cplusplus-plain" },

  // 🔷 Databases
  { name: "MongoDB", icon: "devicon-mongodb-plain" },
  { name: "Firebase", icon: "devicon-firebase-plain" },
  { name: "SQL", icon: "devicon-mysql-plain" },

  // 🔷 Tools & IDEs
  { name: "VS Code", icon: "devicon-vscode-plain" },
  { name: "Eclipse IDE", icon: "devicon-eclipse-plain" },
  { name: "Git", icon: "devicon-git-plain" },
  { name: "GitHub", icon: "devicon-github-original" },
  { name: "Android Studio", icon: "devicon-androidstudio-plain" },
  { name: "Xcode", icon: "devicon-xcode-plain" },
  { name: "CMake", icon: "devicon-cmake-plain" },
];

const About = () => {
  return (
    <section id="about" className="section about-container">
      {/* Left Column: Profile */}
      <motion.div
        className="about-left"
        initial={{ x: -60, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}>
        <div className="profile-glass-box">
          <img
            src="https://res.cloudinary.com/dfejydorr/image/upload/v1753154831/16299_dniipk.jpg"
            alt="Isindu Wijesinghe"
            className="profile-img"
          />
        </div>
      </motion.div>

      {/* Right Column: Info */}
      <motion.div
        className="about-right"
        initial={{ x: 60, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}>
        <h2 className="about-heading">Who I Am</h2>
        <p className="about-summary">
          I’m <strong>W.A. Isindu Yuwaneka Wijesinghe</strong>, an aspiring
          Software Engineer passionate about scalable systems, clean UIs, and
          cross-platform development. I’m currently pursuing a{" "}
          <strong>
            Bachelor of Science in Information Technology Specializing in
            Information Technology
          </strong>{" "}
          at SLIIT.
        </p>

        {/* Education */}
        <div className="about-block">
          <h3>🎓 Education</h3>
          <ul>
            <li>
              <strong>BSc in IT</strong> – SLIIT (2023 – Present)
            </li>
            <li>GCE A/L – D.S. Senanayake College (2022/23)</li>
            <li>GCE O/L – Mahinda Rajapaksha College (2019)</li>
          </ul>
        </div>
      </motion.div>

      {/* Skills (outside right column for large screens) */}
      <motion.div
        className="about-skills-wrapper"
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}>
        <h3 className="skills-title">🛠 Skills</h3>
        <div className="skills-grid">
          {skills.map((skill) => (
            <div key={skill.name} className="skill-card">
              <i className={`${skill.icon} skill-icon`}></i>
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* CONNECT SECTION */}
      <motion.div
        className="about-connect-wrapper"
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}>
        <h3 className="connect-title">🤝 Connect with Me</h3>
        <div className="connect-buttons">
          <a
            href="https://www.facebook.com/share/19tmoVtaqe/"
            target="_blank"
            rel="noopener noreferrer"
            className="connect-btn">
            <i className="devicon-facebook-plain"></i> Facebook
          </a>
          <a
            href="https://www.instagram.com/_i_s_z_z_y_?igsh=ejFld2RsNTZhMGNn"
            target="_blank"
            rel="noopener noreferrer"
            className="connect-btn">
            <i className="fab fa-instagram"></i> Instagram
          </a>
          <a
            href="https://www.tiktok.com/@isinduwijesinghe?_t=ZS-8yEO9shQN5U&_r=1"
            target="_blank"
            rel="noopener noreferrer"
            className="connect-btn">
            <i className="fab fa-tiktok"></i> TikTok
          </a>
          <a
            href="https://github.com/iszzy0wijesinghe"
            target="_blank"
            rel="noopener noreferrer"
            className="connect-btn">
            <i className="devicon-github-original"></i> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/isindu-wijesinghe-152513289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="connect-btn">
            <i className="devicon-linkedin-plain"></i> LinkedIn
          </a>

          <a
            href="https://www.behance.net/isinduyuwaneka/projects"
            target="_blank"
            rel="noopener noreferrer"
            className="connect-btn">
            <i className="fab fa-behance"></i> Behance
          </a>
          <a href="mailto:isinduyuwaneka@gmail.com" className="connect-btn">
            <i className="fab fa-tiktok"></i> Email
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
