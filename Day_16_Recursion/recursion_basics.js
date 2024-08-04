
//Task 1: Write a recursive function to calculate the factorial of a number. 
function factorial(n) {
	let result = 1; 
	if (n === 1) {
		return 1;
	}
	return n * factorial(n - 1)
}
console.log(`Factoria of 5:${factorial(5)}`)
console.log(`Factoria of 6:${factorial(6)}`)
console.log(`Factoria of 7:${factorial(7)}`)

//Task 2: Recursive function to calculate the nth Fibonacci number
function fibonacci(n){
	if(n===1 || n===2){
		return 1;
	}
	return   fibonacci(n-1) + fibonacci(n-2) ;
}

console.log(`5th Fibonacci number : ${fibonacci(5)}`)
console.log(`8th Fibonacci number : ${fibonacci(8)}`)

