"use strict";
function Declaration(x, y) {
    let result = x + y;
    return result;
}
console.log(Declaration(2, 4));
const Expression = function (x, y) { return x + y; };
console.log(Expression(2, 4));
const Arrow = (x, y) => {
    return x + y;
};
console.log(Arrow(2, 4));
const greeting = (greeting) => {
    if (greeting) {
        return `hello ${greeting}`;
    }
    return 'hello Brother';
};
console.log(greeting());
console.log(greeting('Sister'));
const greeting2 = (greeting = 'Sister') => {
    if (greeting) {
        return `hello ${greeting}`;
    }
    return 'hello Brother';
};
console.log(greeting2());
console.log(greeting2('Sister'));
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4));
function display(value) {
    console.log(value);
}
display("Hello");
display(42);
function identity(arg) {
    return arg;
}
let result = identity(20);
console.log(result);
