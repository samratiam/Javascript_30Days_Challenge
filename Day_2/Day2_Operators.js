//Arithmentic Operations

//Task 1
let num1 = 15;
let num2 = 10;

console.log("Addition:", num1 + num2);

//Task 2
console.log("Subtraction:", num1 - num2);

//Task 3
console.log("Multiplication:", num1 * num2);

//Task 4
console.log("Division:", num1 / num2);

//Task 5
console.log("Remainder", num1 % num2);

//Assignment Operators
//Task 6
num1 += num2;
console.log("num1 after += num2:", num1);

//Task 7
num1 -= num2;
console.log("num1 after -= num2:", num1);

//Comparison Operators
// Task 8
if (num1 < num2) {
	console.log("num1 is less than num2");
}
else if (num1 > num2) {
	console.log("num1 is greater than num2");
}

//Task 9
if (num1 >= num2) {
	console.log("num1 is greater than or equal to num2");
}

else if (num1 <= num2) {
	console.log("num1 is less than or equal to num2");
}

//Task 10

let num3 = 15;
let num4 = '15';


//It results false as both values are equal in value but not in type
if (num3 === num4) {
	console.log("num3 is equal to num4 with strict equality");
}


//It results true as both values are equal
if (num3 == num4) {
	console.log("num3 is equal to num4 in value but not in type");
}


//Logical Operators
//Task 11
if (num3 > num2 && num3 < num4) {
	console.log("num3 is greater than num2 and less than num4");
}

//Task 12
if (num3 < num2 || num3 > num4) {
	console.log("num3 is less than num2 or greater than num4");
}

//Task 13
let num5 = 50;
let num6 = 30;
let num7 = 25;
if (!(num5 > num6 && num5 < num7)) {
	console.log("num5 is less than num6 or greater than num7");
}

//Ternary Operator
let num8 = 40;
console.log(num8 >= 0 ? `${num8} is positive` : `${num8} is negative`);


