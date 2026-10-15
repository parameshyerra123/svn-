import React from 'react';

const techs = [
  { name: 'React.js', icon: 'fa-brands fa-react' },
  { name: 'Node.js', icon: 'fa-brands fa-node-js' },
  { name: 'React Native', icon: 'fa-solid fa-mobile-screen' },
  { name: 'MongoDB', icon: 'fa-solid fa-database' },
  { name: 'Express.js', icon: 'fa-solid fa-server' },
  { name: 'Next.js', icon: 'fa-solid fa-bolt' },
  { name: 'TypeScript', icon: 'fa-solid fa-code' },
  { name: 'Python', icon: 'fa-brands fa-python' },
  { name: 'AWS Cloud', icon: 'fa-brands fa-aws' },
  { name: 'Docker', icon: 'fa-brands fa-docker' },
  { name: 'PostgreSQL', icon: 'fa-solid fa-database' },
  { name: 'Figma UI/UX', icon: 'fa-brands fa-figma' },
];

export default function TechMarquee() {
  return (
    <div className="marquee-section">
      <div className="marquee-label">Technologies We Master</div>
      <div className="marquee-track">
        <div className="marquee-content">
          {techs.concat(techs).map((tech, index) => (
            <span key={index} className="marquee-item">
              <i className={tech.icon} style={{ color: 'var(--orange)', marginRight: '8px' }}></i>
              {tech.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
