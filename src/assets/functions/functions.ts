const IMG_SIZE = 13.5;
function positionX(i, n, r, offset) {
  var offset = offset + 0;
  var a = 0;
  var x = 0;
  var y = 0;
  const radius = r / 2;
  const radian = i * ((2 * Math.PI) / 10) - 0.5 * Math.PI;
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
  const radian = i * ((2 * Math.PI) / 10) - 0.5 * Math.PI;
  x = radius * Math.cos(radian) - IMG_SIZE / 2;
  y = radius * Math.sin(radian) - IMG_SIZE / 2 + offset;

  return y;
}