// ========================== 01 - Import using CommonJS
// const lib = require('./lib');

// console.log("Sum: ", lib.sum(5,4));
// console.log("Diff: ", lib.diff(5,4));

// ========================== 02 - Import using ES6
// import { sum, diff } from './lib2.js';

// console.log("Sum is: ", sum(5,7));
// console.log("Diff is: ", diff(8,3));


// =====================================================
//                  fs module
// =====================================================

const fs = require('fs');

// Read file synchronously
// const text = fs.readFileSync('demo.txt', 'utf-8');
// console.log(text);

// Read file Asynchronously
fs.readFile('demo.txt', 'utf-8', (err, text) => {
  console.log(text);
});

console.log("============= DONE =============");