let testArray = [1, 2, 3, 4, 5];

let doubledTestArray = testArray.map((x) => x * 2);
console.log("Array with doubled values:", doubledTestArray);


let test1 = [4, 6, 8, 11, 13, 14, 17];
let evenArray = test1.filter(x => x % 2 == 0);
console.log("Array with even values using filter:", evenArray);

let test2 = [1, 3, 4, 7];
let sum = test2.reduce((x, y) => x + y);
console.log("Sum of array:", sum);