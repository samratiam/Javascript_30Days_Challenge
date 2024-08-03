function outer(){
	let age = 30;
	function inner(){
		return `Inner Age: ${age}`;

	}
	let innerRes = inner()
	console.log(innerRes)
}
outer()

function outerFunc(){
	let userName = "Samrat";
	function innerFunc(){
		return `Inner func: ${userName}`
	}
	return innerFunc
}
let outerFuncResult = outerFunc()
console.log(outerFuncResult());

//Task 2: Create a closure that maintains a private counter. Implement functions to increment and get the current value of the counter.
function counterFunc() {
	let counter = 0;

	function increaseCounter() {
		counter += 1;

	}
	function getCounter() {
		return `Counter Value: ${counter}`;

	}
	return {increaseCounter, getCounter}
}
let result = counterFunc()
result.increaseCounter()
result.increaseCounter()
console.log(result.getCounter());
