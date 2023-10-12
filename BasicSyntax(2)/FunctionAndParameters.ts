

function Declaration(x:number,y:number):number{

    let result = x+y;
    return result
}
console.log(Declaration(2,4))

const Expression = function(x:number,y:number):number{return x+y}

console.log(Expression(2,4))

const  Arrow = (x:number,y:number):number=>{

    return x+y
}

console.log(Arrow(2,4))


const greeting = (greeting?:string):string=>{

    if(greeting){
       return `hello ${greeting}`
    }
    return 'hello Brother'
}

console.log(greeting())
console.log(greeting('Sister'))

const greeting2 = (greeting:string = 'Sister'):string=>{

    if(greeting){
       return `hello ${greeting}`
    }
    return 'hello Brother'
}

console.log(greeting2())
console.log(greeting2('Sister'))


function sum(...numbers: number[]): number {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4)); 

function display(value: string): void;
function display(value: number): void;
function display(value: string | number): void {
    console.log(value);
}

display("Hello");  
display(42)


function identity<T>(arg: T): T {
    return arg;
}

let result = identity<number>(20);
console.log(result);