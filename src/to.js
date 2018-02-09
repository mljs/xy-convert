export function toXxyyArray({ x, y }) {
  return [x, y];
}

export function toXyxyArray({ x, y }) {
  var ans = [];
  for (var index = 0; index < x.length; index++) {
    ans.push([x[index], y[index]]);
  }
  return ans;
}

export function toXyxyObject({ x, y }) {
  var ans = [];
  for (var index = 0; index < x.length; index++) {
    ans.push({ x: x[index], y: y[index] });
  }
  return ans;
}
