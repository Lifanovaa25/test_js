const radius = 253 / 2;
const N = 6;
const IMG_SIZE = 13.5;
function positionX(i,n) {
  var a = 0;
  var x = 0;
  var y = 0;
  const radian = i * ((2 * Math.PI) /n) - 0.5 * Math.PI;

  // for (let i = 0; i < Items.length; i++) {
  // console.log(radius);

  a = (i * 360) / N + 90;
  // x = Math.round(radius * Math.cos(theta[i]));
  // y = Math.round(radius * Math.sin(theta[i]));
  x = radius * Math.cos(radian) - IMG_SIZE / 2;
  y = radius * Math.sin(radian) - IMG_SIZE / 2;
  // }
  return x;
}
function positionY(i, n) {
  const radian = i * ((2 * Math.PI) /n) - 0.5 * Math.PI;
  var a = 0;
  var x = 0;
  var y = 0;
  // for (let i = 0; i < Items.length; i++) {
//   console.log(radian);

  a = (i * 360) / N + 90;
  // x = Math.round(radius * Math.cos(theta[i]));
  // y = Math.round(radius * Math.sin(theta[i]));
  x = radius * Math.cos(radian) - IMG_SIZE / 2;
  y = radius * Math.sin(radian) - IMG_SIZE / 2;
  // }
  return y;
}