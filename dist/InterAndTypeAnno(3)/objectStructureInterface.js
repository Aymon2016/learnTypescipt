"use strict";
const alice = {
    firstName: "Alice",
    lastName: "Johnson",
    age: 30,
};
const bob = {
    firstName: "Bob",
    lastName: "Smith",
    age: 25,
};
const charlie = {
    firstName: 'charlie',
    lastName: "Brown",
    age: 28,
};
function printPersonInfo(person) {
    console.log(`Name: ${person.firstName} ${person.lastName}, Age: ${person.age}`);
}
printPersonInfo(alice);
printPersonInfo(bob);
