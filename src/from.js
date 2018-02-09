export function fromXxyyArray(data) {
  return { x: data[0], y: data[1] };
}

export function fromXyxyArray(data) {
  var x = [];
  var y = [];
  for (const point of data) {
    x.push(point[0]);
    y.push(point[1]);
  }
  return { x, y };
}

export function fromXyxyObject(data) {
  var x = [];
  var y = [];
  for (const point of data) {
    x.push(point.x);
    y.push(point.y);
  }
  return { x, y };
}

export function fromGeneral(data) {
  if (Array.isArray(data)) {
    if (data.length === 0) return { x: [], y: [] };
    if (Array.isArray(data[0])) {
      if (data.length === 2) {
        return fromXxyyArray(data);
      } else {
        return fromXyxyArray(data);
      }
    } else {
      return fromXyxyObject(data);
    }
  } else {
    if (Array.isArray(data.x) && Array.isArray(data.x)) {
      return data;
    } else {
      throw new TypeError('unknown data format');
    }
  }
}
