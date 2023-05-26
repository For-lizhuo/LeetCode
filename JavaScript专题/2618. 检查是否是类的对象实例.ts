function checkIfInstanceOf(obj: any, classFunction: any): boolean {
  if(obj===null||obj===undefined||classFunction===undefined||classFunction===null) return false;
  return (obj===classFunction.prototype)||checkIfInstanceOf(obj.__proto__,classFunction);
};

/**
 * checkIfInstanceOf(new Date(), Date); // true
 */