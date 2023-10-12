// Class Declaration

class Person {
  // Properties
  firstName: string;
  lastName: string;
  age: number;

  // Constructor
  constructor(firstName: string, lastName: string, age: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  // Method
  greet() {
    console.log(`Hello, my name is ${this.firstName} ${this.lastName}, and I am ${this.age} years old.`);
  }
}
// object create with class
const person1 = new Person("Alice", "Johnson", 30)

// 3. Accessing Properties:

console.log(person1.firstName)
 person1.greet()

 // 4. Inheritance:

 class Student2 extends Person {
  studentId: number;

  constructor(firstName: string, lastName: string, age: number, studentId: number) {
    super(firstName, lastName, age); // Call the parent class constructor
    this.studentId = studentId;
  }

  study() {
    console.log(`${this.firstName} is studying.`);
  }
}

const student2 = new Student2('Bob', 'Smith', 56 ,789 )

// getter and setter:

class Circle3 {
  private _radius: number;

  constructor(radius: number) {
    this._radius = radius;
  }

  get radius(): number {
    return this._radius;
  }

  set radius(value: number) {
    if (value >= 0) {
      this._radius = value;
    } else {
      console.error("Invalid radius value");
    }
  }
}

