interface Coord {
  col: string | undefined;
  x1: string |  number;
  y1:  string | number;
  x2: string |  number;
  y2: string |  number;
  coord: string;
}

interface Role {
  name: string;
  mainSkills: string[];
  otherSkills: string[];
  isActive?:boolean
}

type Point = {
  x: number,
  y: number
}