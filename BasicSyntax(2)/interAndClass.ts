

// create interface 

interface Person7 {
    firstname : string;
    lastname : string;
    age : number;

}

let Aymons: Person7 = {
    firstname:'aymon',
    lastname : 'ahamed',
    age : 24 
}

// You can also use optional properties in interfaces:

interface Car {
    brand: string;
    model: string;
    year?: number; // Optional property
}

let car1: Car = {
    brand: "Toyota",
    model: "Camry",
};
let car2: Car = {
    brand: "Honda",
    model: "Accord",
    year: 2022,
};

// Create Classes with interface

// when protected . they access only class or subclass

interface Shape {
     getName(): string
}


class Persons implements Shape  {

    private firstname : string;
    protected age : number 

    constructor (firstname:string,age:number) {

        this.firstname = firstname
        this.age = age
    }

    getName () {
        return `My name is ${this.firstname} and my age is ${this.age}`
    }
}

const aymon = new Persons('Ayman', 30);

console.log(aymon.getName());

// Use generic: 
    
class Student<T> {

    private firstname : T;
    protected age : T 

    constructor (firstname:T,age:T) {

        this.firstname = firstname
        this.age = age
    }

    getName (): string {
        return `My name is ${this.firstname} and my age is ${this.age}`
    }
}

const Student1 = new Student<string>('Ayman', '30');

console.log(Student1.getName());