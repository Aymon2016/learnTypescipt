
/* Importing */


/* 1. importing named exports */

import { pi, add} from './Export';

console.log(`PI: ${pi}`);
console.log(`2 + 3 = ${add(2, 3)}`);


/* 2.import alises export */

import { sumision} from './Export';

console.log(sumision(2,3))

import Logger from './Export';
console.log(Logger)



/* Re-Exporting from One Module to Another: */

// utils.ts
// export function utilityFunction() {
//   // Function implementation
// }

// // helpers.ts
// export * from './utils';

export * from './Export';

// ai import funtion jekane import korbo export file er sob funtion peye jabo.

// Exporting and Importing in the Same Module:

import { pi as circlePi } from './Export';