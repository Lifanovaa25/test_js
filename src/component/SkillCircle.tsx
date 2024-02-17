import React, { forwardRef } from "react";

interface SkillCircleProps {
  skill: string;
  isActive?: boolean;
  i: number;
  n: number;
}


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
  x = ( radius * Math.cos(radian) - IMG_SIZE / 2);
  y = (radius * Math.sin(radian) - IMG_SIZE / 2 + offset);

  return y;
}

const SkillCircle = forwardRef<HTMLDivElement, SkillCircleProps>(
  ({ skill, isActive, i, n }, ref) => (
    <div
      style={{
        position: "absolute", // Добавлено для корректного позиционирования
        top: `${positionY(i, n, 533, 260)}px`,
        left: `${positionX(i, n, 533, 260)}px`,
      }}
      className={isActive ? "active skill-circle skill" : "skill-circle skill"}
      ref={ref}
    >
      <div
        className="name"
        style={{
          position: "relative", // Добавлено для корректного позиционирования
          top: `${positionY(i, n, 100, 20)}px`,
          left: `${positionX(i, n, 120, -20)}px`,
        }}
      >
        {skill}
      </div>
    </div>
  )
);
export default SkillCircle;
