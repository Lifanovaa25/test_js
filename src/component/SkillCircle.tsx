import React from "react";
const radius = 533 / 2;
const N = 6;
const IMG_SIZE = 13.5;
function positionX(i,n) {
  var a = 0;
  var x = 0;
  var y = 0;
  const radian = i * ((2 * Math.PI) /100) - 0.5 * Math.PI;


  x = radius * Math.cos(radian) - IMG_SIZE / 2;
  y = radius * Math.sin(radian) - IMG_SIZE / 2;
  
  return x;
}
function positionY(i, n) {
  const radian = i * ((2 * Math.PI) /100) - 0.5 * Math.PI;
  var a = 0;
  var x = 0;
  var y = 0;
  x = radius * Math.cos(radian) - IMG_SIZE / 2;
  y = radius * Math.sin(radian) - IMG_SIZE / 2;
  
  return y;
} const n = 10
const SkillCircle = ({ skill, isActive, i }) => (
   
  <div
    style={{ top: `${positionX(i, n)}px`, left: ` ${positionY(i, n)}px` }}
    className={isActive ? "active skill-circl skill" : "skill-circl skill"}
  >
    <div className="skill"> {skill}</div>
  </div>
);
export default SkillCircle;
