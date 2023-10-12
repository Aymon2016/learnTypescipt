"use strict";
function swap(a, b) {
    return [a, b];
}
const output = swap(10, 20);
const output2 = swap("hello", "world"); // output2 is ["world", "hello"]
// create generic with class:
class Stack {
    constructor() {
        this.items = [];
    }
    push(item) {
        this.items.push(item);
    }
    pop() {
        return this.items.pop();
    }
}
const numberStack = new Stack();
numberStack.push(1);
numberStack.push(2);
const poppedNumber = numberStack.pop(); // poppedNumber is 2
const stringStack = new Stack();
stringStack.push("apple");
stringStack.push("banana");
const poppedString = stringStack.pop(); // poppedString is "banana"
const pair1 = { key: "age", value: 30 };
const pair2 = { key: "name", value: "Alice" };
