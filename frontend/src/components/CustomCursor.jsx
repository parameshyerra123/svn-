import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [followerPos, setFollowerPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    let animationFrameId;
    const follow = () => {
      setFollowerPos((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.15,
        y: prev.y + (position.y - prev.y) * 0.15,
      }));
      animationFrameId = requestAnimationFrame(follow);
    };
    animationFrameId = requestAnimationFrame(follow);
    return () => cancelAnimationFrame(animationFrameId);
  }, [position]);

  return (
    <>
      <div
        className="custom-cursor"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: isHovered ? 'translate(-50%, -50%) scale(1.5)' : 'translate(-50%, -50%)',
        }}
      />
      <div
        className="cursor-follower"
        style={{
          left: `${followerPos.x}px`,
          top: `${followerPos.y}px`,
          transform: isHovered ? 'translate(-50%, -50%) scale(1.8)' : 'translate(-50%, -50%)',
          borderColor: isHovered ? 'var(--yellow)' : 'rgba(255, 107, 0, 0.5)',
        }}
      />
    </>
  );
}
