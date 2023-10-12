"use strict";
let Name = 'Aymon';
let Age = 20;
let isStudents = true;
function greet(name, age) {
    return `Hello, ${name}, you are ${age} years old!`;
}
let persons = {
    name: "Alice",
    age: 25,
};
let numberss = [1, 2, 3, 4, 5];
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    getArea() {
        return Math.PI * this.radius ** 2;
    }
}
