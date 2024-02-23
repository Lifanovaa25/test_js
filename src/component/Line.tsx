import React, { FC } from "react";
import "./../@types/types";
interface IProps {
  CoordsMain: [];
  CoordsOther: [];
}
const Lines: FC<IProps> = ({ CoordsMain, CoordsOther }) => {
  return (
    <>
      <svg className="lines" width="100%" height="100%">
        <g>
          {CoordsMain?.map((coord, index) => (
            <path
              key={index}
              d={coord}
              stroke="#FF7A00"
              fill="transporant"
              strokeWidth="2"
            />
          ))}
        </g>
      </svg>
      <svg className="lines" width="100%" height="100%">
        <g>
          {CoordsOther?.map((coord, index) => (
            <path
              key={index}
              d={coord}
              stroke="#8F59B9"
              fill="transporant"
              strokeWidth="2"
            />
          ))}
        </g>
      </svg>
    </>
  );
};
export default Lines;
