

let Name:string = 'Aymon'
let Age: number = 20
let isStudents:boolean = true


function greet(name: string, age: number): string {
  return `Hello, ${name}, you are ${age} years old!`;
}

let persons: { name: string; age: number } = {
  name: "Alice",
  age: 25,
};

let numberss: number[] = [1, 2, 3, 4, 5];

interface Point {
  x: number;
  y: number;
}

class Circle {
  radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  getArea(): number {
    return Math.PI * this.radius ** 2;
  }
}