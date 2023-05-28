function areDeeplyEqual(o1: any, o2: any): boolean {
  if (typeof o1 !== "object" || o1 === null) {
    return o1 === o2;
  }
  if (o1 instanceof Array !== o2 instanceof Array) return false;
  let res = true;
  if (Object.keys(o1).length !== Object.keys(o2).length) return false;
  for (let key of Object.keys(o1)) {
    if (!o2.hasOwnProperty(key)) return false;
    if (typeof o1[key] === "object" && o1[key] !== null) {
      res = areDeeplyEqual(o1[key], o2[key]);
    } else {
      res = o1[key] === o2[key];
    }
    if (res === false) return false;
  }
  return res;
}

function areDeeplyEqual2(o1: any, o2: any): boolean {
  if (o1 === o2) return true;
  if (typeof o1 !== typeof o2) return false;
  const type = typeof o1;
  if (type !== "object" || type === null) return o1 === o2;
  if (Reflect.getPrototypeOf(o1) !== Reflect.getPrototypeOf(o2)) return false;
  if (Object.keys(o1).length !== Object.keys(o2).length) return false;
  for (let key of Object.keys(o1)) {
    if (!areDeeplyEqual(o1[key], o2[key])) return false;
  }
  return true;
}
function areDeeplyEqual3(o1: any, o2: any): boolean {
  if (typeof o1 !== "object" || o1 === null) {
    return o1 === o2;
  }
  if (o1 instanceof Array !== o2 instanceof Array) return false;
  if (Object.keys(o1).length !== Object.keys(o2).length) return false;
  for (let key of Object.keys(o1)) {
    if (!areDeeplyEqual(o1[key], o2[key])) {
      return false;
    }
  }
  return true;
}
