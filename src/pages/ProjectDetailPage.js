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
            'This Grocery Logistic Management System was developed using the MERN stack (MongoDB, Express.js, React, Node.js) to ensure a modern, scalable, and real-time web solution. The system streamlines order processing, inventory management, delivery scheduling, and route optimization through an intuitive dashboard and responsive frontend. Built as a collaborative team project, each module was designed with modular architecture, secure REST APIs, and a clean user experience. The platform empowers grocery vendors to manage operations efficiently while enhancing customer satisfaction through faster and smarter logistics.\n\nKey features include a powerful shop owner dashboard where shop owners can register, delete, and edit delivery personnel. Each delivery person’s performance is tracked with detailed analytics, and reports can be generated for in-depth review. We implemented advanced security logic — only shop owners with a registered location can log in to the dashboard. Upon registration, a secure 16-digit OTP is emailed to the shop owner for login access, ensuring high-level authentication and access control.',
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
        techStack: ['React', 'TensorFlow.js', 'Styled Components','socket.io'],
        problem: 'Customer wanted a browser-based tool for generating AI art using custom-trained models.',
        description:
            'This app uses TensorFlow.js to generate artwork in-browser with no server-side ML. React handled routing and UI logic, and Styled Components ensured theme consistency.',
        uiImages: [
            'https://via.placeholder.com/400x250?text=Art+UI+1',
            'https://via.placeholder.com/400x250?text=Art+UI+2',
        ],
        structureImages: [
            'https://via.placeholder.com/400x250?text=Art+Code+1',
            'https://via.placeholder.com/400x250?text=Art+Code+2',
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
                <a href="#contact" className="hire-btn">
                    💼 Hire Me?
                </a>
            </div>
        </div>

    );
};

export default ProjectDetailPage;
