import React, { forwardRef } from "react";
import './../@types/types'

interface RoleCircleProps {
  role: Role;
  i: number; // или id, если это более подходящее название
  n: number;
  onRoleClick: (role: Role) => void;
}


const N = 6;
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
const RoleCircle = forwardRef<HTMLDivElement, RoleCircleProps>(({ role, i, n, onRoleClick }, ref) => {
  return <div
    style={{
      top: `${positionX(i, n, 256, 122)}px`,
      left: ` ${positionY(i, n, 256, 122)}px`,
    }}
    className={role.isActive ? "active  role-circl" : " role-circl"}
    onClick={() => onRoleClick(role)}
    ref={ref}
  >
    <div
      className="name"
      style={{
        top: `${positionX(i, n, 120, 10)}px`,
        left: ` ${positionY(i, n, 120, -20)}px`,
      }}
    >
      {role.name}
    </div>
  </div>
});
export default RoleCircle;
