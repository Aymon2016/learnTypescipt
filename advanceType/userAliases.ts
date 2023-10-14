
type Age1 = number;
const myAge2: Age1 = 30;

type Person11 = {
  name: string;
  age: number;
};

const alice2: Person11 = {
  name: "Alice",
  age: 30,
};

type Point2 = {
  x: number;
  y: number;
};

type Circle4 = {
  center: Point2;
  radius: number;
};

type KeyValuePair2<T> = {
  key: string;
  value: T;
};

const agePair: KeyValuePair2<number> = {
  key: "age",
  value: 30,
};
