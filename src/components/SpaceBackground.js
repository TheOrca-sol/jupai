import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useEffect, useState } from 'react';

const SpaceContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden;
  background: radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%);
  pointer-events: none;
`;

const Star = styled(motion.div)`
  position: absolute;
  background: #FFF;
  border-radius: 50%;
  opacity: 0.5;
`;

const Planet = styled(motion.div)`
  position: absolute;
  border-radius: 50%;
  background: ${props => props.gradient};
  filter: blur(8px);
  box-shadow: 0 0 30px rgba(255, 255, 255, 0.3);
  opacity: 0.6;
`;

const ShootingStar = styled(motion.div)`
  position: absolute;
  width: 3px;
  background: linear-gradient(90deg, rgba(255,255,255,0.8), transparent);
  transform-origin: left;
`;

function SpaceBackground() {
  const [stars] = useState(() => 
    Array.from({ length: 100 }, () => ({
      size: Math.random() * 3 + 2,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 3 + 2
    }))
  );

  const planets = [
    {
      size: 150,
      gradient: 'linear-gradient(45deg, #FF4E50, #F9D423)',
      x: 15,
      y: 20,
      duration: 120
    },
    {
      size: 100,
      gradient: 'linear-gradient(45deg, #4CA1AF, #C4E0E5)',
      x: 75,
      y: 60,
      duration: 180
    },
    {
      size: 80,
      gradient: 'linear-gradient(45deg, #904e95, #e96443)',
      x: 85,
      y: 30,
      duration: 150
    }
  ];

  const [shootingStars, setShootingStars] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setShootingStars(prev => {
        const newStar = {
          id: Date.now(),
          x: Math.random() * 100,
          y: Math.random() * 50,
          length: Math.random() * 150 + 100
        };
        return [...prev.slice(-3), newStar];
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <SpaceContainer>
      {stars.map((star, i) => (
        <Star
          key={i}
          style={{
            width: star.size,
            height: star.size,
            left: `${star.x}%`,
            top: `${star.y}%`,
          }}
          animate={{
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}
      
      {planets.map((planet, index) => (
        <Planet
          key={index}
          style={{
            width: planet.size,
            height: planet.size,
            left: `${planet.x}%`,
            top: `${planet.y}%`,
          }}
          gradient={planet.gradient}
          animate={{
            scale: [1, 1.2, 1],
            rotate: 360,
          }}
          transition={{
            duration: planet.duration,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}

      {shootingStars.map(star => (
        <ShootingStar
          key={star.id}
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            height: '2px',
            width: `${star.length}px`,
          }}
          initial={{ opacity: 1, scaleX: 0, rotate: -45 }}
          animate={{ opacity: 0, scaleX: 1 }}
          transition={{ duration: 1 }}
        />
      ))}
    </SpaceContainer>
  );
}

export default SpaceBackground;
