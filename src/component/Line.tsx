import React,{FC} from "react";
import './../@types/types'
interface IProps {
  lineCoords: [] ;
  lineCoordsOther: [];

}
const Lines: FC<IProps> =({lineCoords,lineCoordsOther}) => {
  return (<><svg className="lines" width="100%" height="100%">
  <g>
    {lineCoords?.map((coord, index) => (
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
    {lineCoordsOther?.map((coord, index) => (
      <path
        key={index}
        d={coord}
        stroke="#8F59B9"
        fill="transporant"
        strokeWidth="2"
      />
    ))}
  </g>
</svg></>) 
};
export default Lines;
