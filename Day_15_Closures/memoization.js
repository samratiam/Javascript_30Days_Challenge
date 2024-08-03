//Task 7: Write a function that memoizes the results of another function.
//Use a closure to store the results of previous compuatations
const memoize = (fn) => {
	let cache = {};
	return (n) => {
		if (n in cache) {
			return cache[n];
		}
		else {
			const addResult = fn(n);
			cache[n] = addResult;
			return addResult;
		}
	}
}

const add10 = (n) => n + 10;
const memoizeAdd10 = memoize(add10);
console.log("Memoizing the add 10 function results:")
console.log(memoizeAdd10(5));
console.log(memoizeAdd10(10));
console.log(memoizeAdd10(5)); // Returns the value 15 from cache

//Task 8: Create a memoized version of a function that calculates the factorial of a number
function memoizeFact(func){
	let cacheValues = {}
	return function(n){
		if(n in cacheValues){
			return cacheValues[n]
		}
		else {
			let factorial = func(n);
			cacheValues[n] = factorial;
			return factorial;
		}
	}
}

function calculateFactorial(n){
	let factorialResult = 1;
	for (let i = 1; i <= n; i++) {
		factorialResult = factorialResult * i;
	}
	return factorialResult;
}

const memoizeFactorial = memoizeFact(calculateFactorial)
console.log("Factorial of 5:",memoizeFactorial(5));
console.log("Factorial of 10:",memoizeFactorial(10));
console.log("After memoization, Factorial of 5:",memoizeFactorial(5));
