

function swap<T>(a:T , b:T):[T,T] {

    return [a , b]
}

const output = swap(10 , 20)
const output2 = swap("hello", "world"); // output2 is ["world", "hello"]


// create generic with class:

class Stack<T> {
  private items: T[] = [];

  push(item: T): void {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }
}

const numberStack = new Stack<number>();
numberStack.push(1);
numberStack.push(2);
const poppedNumber = numberStack.pop(); // poppedNumber is 2

const stringStack = new Stack<string>();
stringStack.push("apple");
stringStack.push("banana");
const poppedString = stringStack.pop(); // poppedString is "banana"

// generic interface:

interface KeyValuePair<T, U> {
  key: T;
  value: U;
}

const pair1: KeyValuePair<string, number> = { key: "age", value: 30 };
const pair2: KeyValuePair<string, string> = { key: "name", value: "Alice" };    