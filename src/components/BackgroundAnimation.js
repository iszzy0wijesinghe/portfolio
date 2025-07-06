import React, { useEffect, useState } from 'react';
import './BackgroundAnimation.css';

const generateShapes = (count) => {
  const shapes = [];

  for (let i = 0; i < count; i++) {
    let x, y;

    // Avoid central 40% area (30% - 70%)
    do {
      x = Math.random() * 100;
      y = Math.random() * 100;
    } while (x > 30 && x < 70 && y > 30 && y < 70);

    const delay = Math.random() * 5;
    const duration = 10 + Math.random() * 10;
    const size = 160 + Math.random() * 100;

    shapes.push({
      id: i,
      style: {
        top: `${y}%`,
        left: `${x}%`,
        width: `${size}px`,
        height: `${size}px`,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
      },
    });
  }

  return shapes;
};

const BackgroundAnimation = ({ darkMode }) => {
  const [shapes, setShapes] = useState([]);

  useEffect(() => {
    setShapes(generateShapes(12)); // 💡 More shapes = more activity
  }, []);

  return (
    <div className={`gradient-background ${darkMode ? 'dark' : 'light'}`}>
      {shapes.map((shape) => (
        <div
          key={shape.id}
          className="gradient-shape"
          style={shape.style}
        />
      ))}
    </div>
  );
};

export default BackgroundAnimation;
