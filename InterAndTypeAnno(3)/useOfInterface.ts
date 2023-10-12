

// 1. Basic interface:
    interface Person2 {
        name:string
        age?:number
        readonly apiKey: string;
    }

    const AymonInterface:Person2 = {
        name:'Aymon',
        age:28,
        apiKey: 'iwhefiudijewjf'
    }

    // You can't modify config.apiKey after initialization

    interface Logger {
            log(message: string): void;
            }


    const consoleLogger:Logger = {
        log(message){
            console.log(message)
        }
    }

    const consoleLoggerResult = consoleLogger.log('Hello bro')

interface Name {
    name: string;
    }

interface Age {
  age: number;
}

interface Employee extends Name, Age {
  id: number;
}

let romon:Employee = {
    id:410210,
    name:'romon',
    age:4
}

class Animal {
  constructor(public name: string) {}
}

interface Bird extends Animal {
  fly(): void;
}