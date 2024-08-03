//Task 3: Write a function that generates unique IDs. Use a closure to keep
//track of the last generated ID and increment it with each call

function generateUniqueID() {
	let randomID = Math.floor(1000 + Math.random() * 9000); //1000 to 9999
	function increaseId() {
		randomID += 1;
		return randomID
	}
	return increaseId
}
let uniqueID = generateUniqueID()
console.log(`ID 1:${uniqueID()}`)
console.log(`ID 2:${uniqueID()}`)
console.log(`ID 3:${uniqueID()}`)

//Task 4: Create a closure that captures a user's name and returns a function
// that greets the user by name 
function greetUser(name) {
	function greet() {
		return `Hello ${name}`;
	}
	return greet
}
let greetNewUser = greetUser("Samrat")
console.log(greetNewUser());

//Activity 3 Closures in Loops
//Write a loop that creates an array of functions. Each function should log
//its index when called. Use a closure to ensure each function logs the correct index
let testArray = []

function createLogFunction(index)
{
	return function(){
		console.log(`Index of function: ${index}`)
	}
}

for (let i = 0; i < 5; i++) {
	//By using closures, each function retains the correct value of i from when it was created, even after the loop has finished running.
	testArray.push(createLogFunction(i))

}
testArray[3]();
testArray[2]();

// let testArrayFunctions = createTestArray()
// testArrayFunctions[1]()