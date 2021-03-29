const obj1 = {
  a: 'a',
  b: {
    a: 'a',
    b: 'b',
    c: {
      a: 1,
    },
  },
};
const obj2 = {
  b: {
    c: {
      a: 1,
    },
    b: 'b',
    a: 'a',
  },
  a: 'a',
};
const obj3 = {
  a: {
    c: {
      a: 'a',
    },
    b: 'b',
    a: 'a',
  },
  b: 'b',
};

const deepEqual = (ObjectOne, objectTwo) => {
  const isParametrsObject = typeof ObjectOne !== 'object' || typeof objectTwo !== 'object';
  const isParametrsUndefined = ObjectOne === undefined || objectTwo === undefined;
  const isParametrsNull = ObjectOne === null || objectTwo === null;
  if (ObjectOne === objectTwo) return true;
  if (isParametrsUndefined) return false;
  if (isParametrsObject) return false;
  if (isParametrsNull) return false;
  const objectOneKeys = Object.keys(ObjectOne);
  const objectTwoKeys = Object.keys(objectTwo);
  if (objectOneKeys.length !== objectTwoKeys.length) return false;
  for (const key of objectOneKeys) {
    if (!objectTwoKeys.includes(key) || deepEqual(ObjectOne[key], objectTwo[key])) return true;
  }
  return false;
};
console.log(deepEqual(obj1, obj2));
console.log(deepEqual(obj1, obj3));
