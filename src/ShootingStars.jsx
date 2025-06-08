import React, { useEffect, useRef, useState } from 'react';
import './ShootingStars.css';

const STAR_COLOR = '#c084fc';
const STAR_COUNT = 1; // Only one at a time for 1s, but can overlap
const MIN_INTERVAL = 800; // ms
const MAX_INTERVAL = 1500; // ms
const STAR_DURATION = 1000; // ms

function randomBetween(a, b) {
  return a + Math.random() * (b - a);
}

function createStarProps() {
  // Top half of the screen, random start/end for diagonal
  const startX = randomBetween(0, 80); // vw
  const startY = randomBetween(0, 40); // vh
  const length = randomBetween(120, 220); // px
  const angle = randomBetween(-35, -55); // degrees, diagonal up-right
  return {
    startX, startY, length, angle, key: Math.random().toString(36).slice(2)
  };
}

const ShootingStars = () => {
  const [stars, setStars] = useState([]);
  const timeoutRef = useRef();

  const triggerStar = () => {
    setStars((prev) => [...prev, { ...createStarProps(), created: Date.now() }]);
    timeoutRef.current = setTimeout(triggerStar, randomBetween(MIN_INTERVAL, MAX_INTERVAL));
  };

  useEffect(() => {
    triggerStar();
    return () => clearTimeout(timeoutRef.current);
  }, []);

  // Remove stars after 1s
  useEffect(() => {
    if (!stars.length) return;
    const now = Date.now();
    setStars((prev) => prev.filter((s) => now - s.created < STAR_DURATION));
  }, [stars]);

  return (
    <div className="shooting-stars-bg" aria-hidden="true">
      {stars.map(({ key, startX, startY, length, angle }) => (
        <div
          key={key}
          className="shooting-star-streak"
          style={{
            left: `${startX}vw`,
            top: `${startY}vh`,
            width: `${length}px`,
            transform: `rotate(${angle}deg)`
          }}
        />
      ))}
    </div>
  );
};

export default ShootingStars;
