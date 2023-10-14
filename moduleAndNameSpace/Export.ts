
// 1. Export:

export const pi:number = 3.1416

export function add(x: number, y: number): number {
  return x + y;
}

export const sum = (a:number,b:number):number=>{
        return a+b
    
}

// 2. Aliases:

export { sum as sumision}

// 3. Default Exports:
export default function Logger() {
  return 'hello default export system'
}

