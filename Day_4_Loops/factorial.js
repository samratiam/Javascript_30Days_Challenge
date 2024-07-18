let num = 5;
let i = 1;
let factorialValue = 1;

do {
	factorialValue = factorialValue * i;
	i++;
} while (i <= num)

console.log(`Factorial of ${num} is ${factorialValue}`);