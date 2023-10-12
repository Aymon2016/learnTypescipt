"use strict";
// create interface 
let Aymon = {
    firstname: 'aymon',
    lastname: 'ahamed',
    age: 24
};
let car1 = {
    brand: "Toyota",
    model: "Camry",
};
let car2 = {
    brand: "Honda",
    model: "Accord",
    year: 2022,
};
class Persons {
    constructor(firstname, age) {
        this.firstname = firstname;
        this.age = age;
    }
    getName() {
        return `My name is ${this.firstname} and my age is ${this.age}`;
    }
}
const aymon = new Persons('Ayman', 30);
console.log(aymon.getName());
// Use generic: 
class Student {
    constructor(firstname, age) {
        this.firstname = firstname;
        this.age = age;
    }
    getName() {
        return `My name is ${this.firstname} and my age is ${this.age}`;
    }
}
const Student1 = new Student('Ayman', '30');
console.log(Student1.getName());
