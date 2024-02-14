import React, { useState, useRef, useEffect } from 'react';
import './App.css';

// Helper function to calculate line coordinates
const calculateLineCoords = (a, b) => {
  const aBox = a.getBoundingClientRect();
  const bBox = b.getBoundingClientRect();

  return {
    x1: aBox.left + aBox.width / 2,
    y1: aBox.top + aBox.height / 2,
    x2: bBox.left + bBox.width / 2,
    y2: bBox.top + bBox.height / 2
  };
};

const App = () => {
  const [activeRole, setActiveRole] = useState(null);
  const [lineCoords, setLineCoords] = useState({});
  const rolesRef = useRef({});
  const skillsRef = useRef({});

  // Update line coordinates when activeRole changes
  useEffect(() => {
    if (activeRole) {
      const coords = activeRole.skills.map(skill => {
        return calculateLineCoords(rolesRef.current[activeRole.name], skillsRef.current[skill]);
      });
      setLineCoords(coords);
    }
  }, [activeRole]);

  return (
    <>
    <div className="app">
      <svg className="lines" width="100%" height="100%">
        {lineCoords.map((coord, index) => (
          <line key={index} {...coord} stroke="black" />
        ))}
      </svg>

      <div className="roles">
        {data.map(role => (
          <div
            ref={el => rolesRef.current[role.name] = el}
            key={role.name}
            className={role ${activeRole === role ? 'active' : ''}}
            onClick={() => setActiveRole(role)}
          >
            {role.name}
          </div>
        ))}
      </div>

      <div className="skills">
        {data.flatMap(role => role.skills).map(skill => (
          <div
            ref={el => skillsRef.current[skill] = el}
            key={skill}
            className={skill ${activeRole && activeRole.skills.includes(skill) ? 'active' : ''}}
          >
            {skill}
          </div>
        ))}
     
    </div>
    </>
  );
};

export default App;