// function outer(){
// 	let age = 30;
// 	function inner(){
// 		return `Inner Age: ${age}`;
		
// 	}
// 	let innerRes = inner()
// 	console.log(innerRes)
// }
// outer()

// function outerFunc(){
// 	let userName = "Samrat";
// 	function innerFunc(){
// 		return `Inner func: ${userName}`
// 	}
// 	return innerFunc
// }
// let result = outerFunc()
// console.log(result());

//Task 2: Create a closure that maintains a private counter. Implement functions to increment and get the current value of the counter.
function counterFunc()
{
	let counter = 0;
	
	function increaseCounter(){
		counter += 1;
		function getCounter(counter)
		{
			console.log(`Counter Value: ${counter}`);
			
		}
		return getCounter(counter)
	}
	return increaseCounter
}
let result1 = counterFunc()
result1()

let result2 = counterFunc()
result2()