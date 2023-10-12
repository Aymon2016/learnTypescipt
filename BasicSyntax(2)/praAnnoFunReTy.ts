// 1. Basic Function with Return Type Annotation:
function add(a: number, b: number): number {
  return a + b;
}

// 2. Practice with More Complex Functions:
function findLargest(numbers: number[]): number {
  return Math.max(...numbers);
}

 // 3.Handle Error Cases:
function divide (a:number, b:number):number | string {

    if(b=== 0 ){
        return 'Division by zero is not allowed'
    }

    return a/b
}

// 4. Explore Functions with Generics:
function getLastElement<T>(arr: T[]): T | undefined {
  if (arr.length === 0) {
    return undefined;
  }
  return arr[arr.length - 1];
}

console.log(getLastElement(['string','rohim']))

// 5. Experiment with Complex Logic:
// throw new error cannot change func return type this.

function findFactorial(n: number): number {
  if (n < 0) {
    throw new Error("Factorial is not defined for negative numbers");
  }
  if (n === 0) {
    return 1;
  }
  return n * findFactorial(n - 1);
}

findFactorial(-5)