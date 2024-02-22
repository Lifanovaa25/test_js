import { forwardRef } from "react";
import "./../@types/types";
import React from "react";

interface RoleCircleProps {
  role: Role;
  i: number; // или id, если это более подходящее название
  n: number;
  onRoleClick: (role: Role) => void;
}

const IMG_SIZE = 13.5;
function positionX(i: number, n: number, r: number, offset: number) {
  var offset = offset + 0;
  var x = 0;
  const radius = r / 2;
  const radian = i * ((2 * Math.PI) / n) - 1 * Math.PI;
  x = radius * Math.cos(radian) - IMG_SIZE / 2 + offset;

  return x;
}
function positionY(i: number, n: number, r: number, offset: number) {
  var offset = offset + 0;
  var y = 0;
  const radius = r / 2;
  const radian = i * ((2 * Math.PI) / n) - 1 * Math.PI;
  y = radius * Math.sin(radian) - IMG_SIZE / 2 + offset;

  return y;
}
const RoleCircle = forwardRef<HTMLDivElement, RoleCircleProps>(
  ({ role, i, n, onRoleClick }, ref) => {
    return (
      <>
        <div
          style={{
            top: `${positionX(i, n, 260, 122)}px`,
            left: ` ${positionY(i, n, 260, 122)}px`,
          }}
          className={role.isActive ? "active  role-circl" : " role-circl"}
          onClick={() => onRoleClick(role)}
          ref={ref}
        >
          <div
            className="name"
            style={{
              top: `${positionX(i, n, 120, 10)}px`,
              left: ` ${positionY(i, n, 120, -30)}px`,
            }}
          >
            {role.name}
          </div>
        </div>
      </>
    );
  }
);
export default RoleCircle;
