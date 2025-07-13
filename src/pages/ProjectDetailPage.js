import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ProjectDetailPage.css';
import { motion } from 'framer-motion';

const projectData = {
    1: {
        title: 'Project SHOPCART',
        category: 'Grocery Logistic Management System',
        githubRepo: 'https://github.com/iszzy0wijesinghe/Project-Shopcart.git',
        liveDemo: 'https://project-shopcart.vercel.app',
        techStack: ['React.js', 'Mongo DB', 'Node.js', 'Express.js'],
        problem:
            'Traditional grocery delivery systems struggle with inefficient inventory tracking, delayed order processing, and poor route optimization. As customer demand for faster and more accurate deliveries increases, grocery retailers face challenges in managing stock levels, coordinating logistics, and reducing wastage. There is a clear need for a smart, real-time system that streamlines the entire supply chain — from warehouse to doorstep — while ensuring cost-efficiency and customer satisfaction.',
        description:
            'This Grocery Logistic Management System, built with the MERN stack (MongoDB, Express.js, React, Node.js), offers a fast, scalable, and real-time solution for streamlining grocery deliveries. It simplifies order management, inventory tracking, delivery scheduling, and route optimization through a responsive, dashboard-driven interface.Key features include a secure shop owner dashboard with tools to manage delivery personnel, track performance, and generate detailed analytics reports. Access is restricted to verified shop locations, and a 16-digit OTP is emailed upon registration for high-level login security.',
        highlights: [
            'Secure shop owner login using 16-digit OTP verification via email',
            'Real-time delivery personnel registration, deletion, and performance tracking',
            'Role-based dashboard for shop owners with advanced analytics and reports',
            'Location-restricted access control — only registered shop locations can log in',
            'Fully responsive, clean UI built with React.js and modular component design',
            'Backend built with Express.js and MongoDB to ensure scalability and performance',
            'Optimized delivery route and order handling through smart logic integration',
            'Collaborative team development using Git and modular project structure'
        ],
        uiImages: [
            'https://res.cloudinary.com/dfejydorr/image/upload/v1751784396/7_pvtwr5.png',
            'https://res.cloudinary.com/dfejydorr/image/upload/v1751784396/8_r1ukek.png',
            'https://res.cloudinary.com/dfejydorr/image/upload/v1751784396/1_ofgq5w.png',
            'https://res.cloudinary.com/dfejydorr/image/upload/v1751784396/6_zfofmu.png',
            'https://res.cloudinary.com/dfejydorr/image/upload/v1751784397/2_e3mlnd.png',
            'https://res.cloudinary.com/dfejydorr/image/upload/v1751784397/3_tfjw4g.png',
            'https://res.cloudinary.com/dfejydorr/image/upload/v1751784396/4_xuawfw.png',
            'https://res.cloudinary.com/dfejydorr/image/upload/v1751784397/5_hmmkhe.png',

        ],
        structureImages: [
            'https://res.cloudinary.com/dfejydorr/image/upload/v1751784955/9_cjc1fb.png',
            'https://res.cloudinary.com/dfejydorr/image/upload/v1751784956/10_twplh6.png',
        ],
    },
    2: {
        title: 'MotionChat',
        category: 'Realtime customer support agent chat platform',
        githubRepo: 'https://github.com/iszzy0wijesinghe/motion-chat',
        liveDemo: 'https://motion-chat.vercel.app',
        techStack: ['React.js', 'Mongo DB', 'Node.js', 'Express.js', 'socket.io'],
        problem: 'Traditional customer support systems often lack real-time responsiveness and flexibility. Many users prefer instant, personalized help without going through lengthy email or ticketing processes. Companies struggle to offer smooth agent communication, session tracking, and guest handling while maintaining a polished user experience. A unified platform is needed that can manage both guest and registered users, support live agent interaction, and provide actionable insights — all within a clean, modern UI.',
        description:
            'MotionChat is a real-time customer support platform built with React, Node.js, and Socket.IO. It supports both guest and registered user chats, offering live messaging with support agents in a sleek, responsive UI. Key features include smart chat topic selection, session timers, post-chat ratings, and screenshot capture. The system also includes an agent dashboard, admin approval for agent registrations, and MongoDB-based chat tracking — all wrapped in a modern glassmorphism design.',
        highlights: [
            'Real-time two-way messaging using Socket.IO for guest and registered users',
            'Separate chat UIs for guests, users, and agents with a consistent glassmorphism theme',
            'Dynamic chat topic selection with animated buttons and parallax layout',
            'Guest chat sessions handled without database storage and auto-deleted on exit',
            'Session timer and post-chat rating system with analytics tracking',
            'Screenshot capture feature for both guests and agents during live chat',
            'Agent dashboard to manage ongoing and responded chats with status indicators',
            'Admin-level agent management with approval system and role-based access control',
            'Multi-step OTP-based registration and login for both agents and users',
            'Built using React.js, Node.js, Express.js, and MongoDB for full-stack scalability'
        ],
        uiImages: [
            'https://res.cloudinary.com/dfejydorr/image/upload/v1752399950/1_hqf5bv.png',
            'https://res.cloudinary.com/dfejydorr/image/upload/v1752399950/1_by96l5_wznw6u.png',
            'https://res.cloudinary.com/dfejydorr/image/upload/v1752399950/3_yy6qmv.png',
            'https://res.cloudinary.com/dfejydorr/image/upload/v1752399951/4_khtett.png',
            'https://res.cloudinary.com/dfejydorr/image/upload/v1752399959/11_ufojkj.png',
            'https://res.cloudinary.com/dfejydorr/image/upload/v1752399959/12_sgewiy.png',
            'https://res.cloudinary.com/dfejydorr/image/upload/v1752399960/13_ixqle9.png',
            'https://res.cloudinary.com/dfejydorr/image/upload/v1752399962/14_d9b49o.png',
            'https://res.cloudinary.com/dfejydorr/image/upload/v1752399950/6_cdx3ul.png',
            'https://res.cloudinary.com/dfejydorr/image/upload/v1752399960/15_trpzpu.png',
            'https://res.cloudinary.com/dfejydorr/image/upload/v1752399960/16_w86zjm.png',
            'https://res.cloudinary.com/dfejydorr/image/upload/v1752400517/20_iga8lf.png',
            'https://res.cloudinary.com/dfejydorr/image/upload/v1752399953/7_gn16qq.png',
            'https://res.cloudinary.com/dfejydorr/image/upload/v1752399953/8_llfmro.png',
            'https://res.cloudinary.com/dfejydorr/image/upload/v1752399953/9_mewuvm.png',

        ],
        structureImages: [
            'https://res.cloudinary.com/dfejydorr/image/upload/v1752400823/Screenshot_2025-07-13_at_15.30.00_zn87l0.png',

        ],
    },
    3: {
        title: 'MotionHub',
        category: 'Portfolio Engine',
        githubRepo: 'https://github.com/yourusername/motionhub',
        liveDemo: '#',
        techStack: ['React', 'Three.js', 'Socket.io'],
        problem: 'Client needed a futuristic animated portfolio with real-time elements and stunning visuals.',
        description:
            'This project combines React and Three.js to deliver a smooth 3D portfolio site. Real-time updates handled using Socket.io. Dark/light theme with parallax stars, animated planet, and code-structured modules.',
        highlights: [
            'Secure shop owner login using 16-digit OTP verification via email',
            'Real-time delivery personnel registration, deletion, and performance tracking',
            'Role-based dashboard for shop owners with advanced analytics and reports',
            'Location-restricted access control — only registered shop locations can log in',
            'Fully responsive, clean UI built with React.js and modular component design',
            'Backend built with Express.js and MongoDB to ensure scalability and performance',
            'Optimized delivery route and order handling through smart logic integration',
            'Collaborative team development using Git and modular project structure'
        ],
        uiImages: [
            'https://via.placeholder.com/400x250?text=Motion+UI+1',
            'https://via.placeholder.com/400x250?text=Motion+UI+2',
        ],
        structureImages: [
            'https://via.placeholder.com/400x250?text=Motion+Code+1',
            'https://via.placeholder.com/400x250?text=Motion+Code+2',
        ],
    },
    4: {
        title: 'MotionHub',
        category: 'Portfolio Engine',
        githubRepo: 'https://github.com/yourusername/motionhub',
        liveDemo: '#',
        techStack: ['React', 'Three.js', 'Socket.io'],
        problem: 'Client needed a futuristic animated portfolio with real-time elements and stunning visuals.',
        description:
            'This project combines React and Three.js to deliver a smooth 3D portfolio site. Real-time updates handled using Socket.io. Dark/light theme with parallax stars, animated planet, and code-structured modules.',
        highlights: [
            'Secure shop owner login using 16-digit OTP verification via email',
            'Real-time delivery personnel registration, deletion, and performance tracking',
            'Role-based dashboard for shop owners with advanced analytics and reports',
            'Location-restricted access control — only registered shop locations can log in',
            'Fully responsive, clean UI built with React.js and modular component design',
            'Backend built with Express.js and MongoDB to ensure scalability and performance',
            'Optimized delivery route and order handling through smart logic integration',
            'Collaborative team development using Git and modular project structure'
        ],
        uiImages: [
            'https://via.placeholder.com/400x250?text=Motion+UI+1',
            'https://via.placeholder.com/400x250?text=Motion+UI+2',
        ],
        structureImages: [
            'https://via.placeholder.com/400x250?text=Motion+Code+1',
            'https://via.placeholder.com/400x250?text=Motion+Code+2',
        ],
    },
    5: {
        title: 'MotionHub',
        category: 'Portfolio Engine',
        githubRepo: 'https://github.com/yourusername/motionhub',
        liveDemo: '#',
        techStack: ['React', 'Three.js', 'Socket.io'],
        problem: 'Client needed a futuristic animated portfolio with real-time elements and stunning visuals.',
        description:
            'This project combines React and Three.js to deliver a smooth 3D portfolio site. Real-time updates handled using Socket.io. Dark/light theme with parallax stars, animated planet, and code-structured modules.',
        highlights: [
            'Secure shop owner login using 16-digit OTP verification via email',
            'Real-time delivery personnel registration, deletion, and performance tracking',
            'Role-based dashboard for shop owners with advanced analytics and reports',
            'Location-restricted access control — only registered shop locations can log in',
            'Fully responsive, clean UI built with React.js and modular component design',
            'Backend built with Express.js and MongoDB to ensure scalability and performance',
            'Optimized delivery route and order handling through smart logic integration',
            'Collaborative team development using Git and modular project structure'
        ],
        uiImages: [
            'https://via.placeholder.com/400x250?text=Motion+UI+1',
            'https://via.placeholder.com/400x250?text=Motion+UI+2',
        ],
        structureImages: [
            'https://via.placeholder.com/400x250?text=Motion+Code+1',
            'https://via.placeholder.com/400x250?text=Motion+Code+2',
        ],
    },
};

const ProjectDetailPage = () => {
    const { id } = useParams();
    const project = projectData[id];
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    if (!project) return <div className="project-detail">Project not found.</div>;

    return (

        <div className="project-detail">
            <div className="project-header">
                <div>
                    <h1>{project.title}</h1>
                    <p className="category">{project.category}</p>
                </div>
                <div className="project-links">
                    {project.githubRepo && (
                        <a
                            href={project.githubRepo}
                            className="github-btn"
                            target="_blank"
                            rel="noreferrer"
                        >
                            GitHub Repository
                        </a>
                    )}
                    <a
                        href={project.liveDemo}
                        className="live-demo-btn"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Live Demo
                    </a>
                </div>
            </div>

            <div className="section-block">
                <h2>🛠 Tech Stack</h2>
                <ul className="tech-list">
                    {project.techStack.map((tech, idx) => (
                        <li key={idx}>{tech}</li>
                    ))}
                </ul>
            </div>

            <div className="section-block">
                <h2>📌 Problem Analysis</h2>
                <p>{project.problem}</p>
            </div>

            <div className="section-block">
                <h2>📄 Project Description</h2>
                <p>{project.description}</p>
            </div>


            {project.highlights && (
                <div className="section-block project-highlights-section">
                    <h2>🚀 Project Highlights</h2>
                    <ul className="highlight-list">
                        {project.highlights.map((point, idx) => (
                            <li key={idx} className="highlight-point">
                                {point}
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            <div className="section-block">
                <h2>🖼 UI Reveal</h2>
                <div className="image-row">
                    {project.uiImages.map((src, i) => (
                        <img key={i} src={src} alt={`UI ${i + 1}`} />
                    ))}
                </div>
            </div>

            <div className="section-block">
                <h2>📁 Structure & Code</h2>
                <div className="image-row">
                    {project.structureImages.map((src, i) => (
                        <img key={i} src={src} alt={`Code ${i + 1}`} />
                    ))}
                </div>
            </div>

            <div className="nav-buttons">
                <button onClick={() => navigate('/#projects')} className="back-btn">
                    ← Back to Projects
                </button>
                <a href="mailto:isinduyuwaneka@gmail.com" className="hire-btn">
                    Hire Me?
                </a>
            </div>
        </div>

    );
};

export default ProjectDetailPage;
