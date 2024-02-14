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
const RoleCircle = ({ role, onRoleClick, i, n }) => {
  const rolesRef = useRef({});

  return (
    <>
      <div
        style={{
          top: `${positionX(i, n, 256, 122)}px`,
          left: ` ${positionY(i, n, 256, 122)}px`,
        }}
        className={role.isActive ? "active  role-circl" : " role-circl"}
        onClick={() => onRoleClick(role)}
      >
        <div
          ref={(el) => (rolesRef.current[role.name] = el)}
          className="name"
          style={{
            top: `${positionX(i, n, 110, 10)}px`,
            left: ` ${positionY(i, n, 110, -30)}px`,
          }}
        >
          {role.name}
        </div>
      </div>
    </>
  );
};
export default RoleCircle;
