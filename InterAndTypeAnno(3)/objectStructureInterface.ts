

interface Person3 {
  firstName: string;
  lastName: string;
  age: number;
}

const alice: Person3 = {
  firstName: "Alice",
  lastName: "Johnson",
  age: 30,
};

const bob: Person3 = {
  firstName: "Bob",
  lastName: "Smith",
  age: 25,
};

const charlie = {
  firstName: 'charlie',
  lastName: "Brown",
  age: 28,
};

function printPersonInfo(person: Person3) {
  console.log(`Name: ${person.firstName} ${person.lastName}, Age: ${person.age}`);
}

printPersonInfo(alice);
printPersonInfo(bob);
