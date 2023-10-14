

// create a generic function:

function identity<T>(arg:T):T{

    return arg
}

const str = identity('hello world')
const num = identity(25)


// generic array of class:

class Stack2<T> {

    items:T[] = []

    push(item:T){
        this.items.push(item)
    }

    pop():T | undefined {
        return this.items.pop()
    }
}


const numStack = new Stack2<number>();
numStack.push(1);
numStack.push(2);
const poppedNumber2 = numStack.pop();

const strStack = new Stack2<string>();
strStack.push("Hello");
strStack.push("World");
const poppedString2 = strStack.pop()