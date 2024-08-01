import { add } from "./modules/one.js";
import { person } from "./modules/two.js";
import multiplyFunc,{subtract} from "./modules/three.js" //We can rename the default export function as there can only be one default export per module. No need of curly  braces
import * as test from './modules/four.js' //import module as a test object

let num1 = 5, num2 = 10;
console.log("Add result:", add(num1, num2));

console.log(`FirstName: ${person.firstname}, LastName: ${person.lastName}`)
let greetings = person.greet();
console.log(`Greeting: ${greetings}`)

console.log("Subtraction:", multiplyFunc(10,5));
console.log("Multiplication:",subtract(36,20));

console.log("Use multiple values from another module:");
console.log(test.add(4,13));
console.log(test.PI);
console.log(test.book.author,test.book.title);

// const lodash = require("lodash");

import _ from '../node_modules/lodash/lodash.js'; //works for node js only
// import { concat } from "../node_modules/lodash/lodash.js";

// Original array to be concatenated
let array = [1, 2, 3];
 
// Values to be added to original array 
let values = [0, 5, "a", "b"]
 
let newArray = _.concat(array, values);
console.log("Before concat: " + array);
 
// Printing newArray 
console.log("After concat: " + newArray);

import axios from "axios"; //works for node js only
axios.get('https://emojihub.yurace.pro/api/random')
  .then((response) => {
    console.log(response.data);
    // console.log(response.status);
    // console.log(response.statusText);
    // console.log(response.headers);
    // console.log(response.config);
  });

//TODO: Module Bundling
// Use a module bundler like Webpack or Parcel to bundle multiple Javascript files into a single file. 
// Write a script to demonstrate the bundling process