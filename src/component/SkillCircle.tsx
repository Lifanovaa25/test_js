import React, { useRef } from "react";

const IMG_SIZE = 13.5;
function positionX(i, n, r, offset) {
  var offset = offset + 0;
  var a = 0;
  var x = 0;
  var y = 0;
  const radius = r / 2;
  const radian = i * ((2 * Math.PI) / n) - 0.5 * Math.PI;
  x = radius * Math.cos(radian) - IMG_SIZE / 2 + offset;
  y = radius * Math.sin(radian) - IMG_SIZE / 2;
  // }
  return x;
}
function positionY(i, n, r, offset) {
  var offset = offset + 0;

  var a = 0;
  var x = 0;
  var y = 0;
  const radius = r / 2;
  const radian = i * ((2 * Math.PI) / n) - 0.5 * Math.PI;
  x = radius * Math.cos(radian) - IMG_SIZE / 2;
  y = radius * Math.sin(radian) - IMG_SIZE / 2 + offset;

  return y;
}

const SkillCircle = ({ skill, isActive, i, n }) => {
  const skillsRef = useRef({});
  return (
    <>
      <div
        style={{
          top: `${positionX(i, n, 533, 260)}px`,
          left: ` ${positionY(i, n, 533, 260)}px`,
        }}
        className={isActive ? "skill-circl skill active" : "skill-circl skill"}
      >
        <div
          // ref={isActive ? (el) => (skillsRef.current[skill] = el):''}
          className="name skill_name"
          style={{
            top: `${positionX(i, n, 100, 20)}px`,
            left: ` ${positionY(i, n, 120, -20)}px`,
          }}
        >
          {skill}
        </div>
      </div>
    </>
  );
};
export default SkillCircle;
