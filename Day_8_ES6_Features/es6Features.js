const testArray = [4, "Ram", 10, 2034, "Nepal"];

//Array destructuring
const [a, b, c, d, e] = testArray;
console.log(`First Element: ${a} and Second Element: ${b}`)

//Object Destructuring
const book = { title: "The Alchemist", author: "Paulo Coelho", year: 2005 };
const { title, year, author } = book;
console.log(`Title: ${title} and Author: ${author}`);

//Using Spread Operator
const newArray = [...testArray, "New One", "Another One"];
console.log("New array:", newArray);

//Using Rest operator for indefinite parameters in function 
function sum(...args) {
	let sum = 0;
	for (const element of args) {
		sum += element;
	}
	return sum;
}
console.log("Using rest operators:", sum(1, 4, 3, 2));

// Default parameters
const product = ((num1, num2 = 1) => {
	return num1 * num2;
})
console.log("Product without second values:", product(10));
console.log("Product with second values:", product(10, 3));


//Enhanced object literals 
const userName = "Ram Thapa";
const userAge = 20;
const userBirthDate = function () {
	console.log("User Birth Year:", new Date().getFullYear() - this.userAge);
}
const user = { userName, userAge, userBirthDate };
console.log("User Details:", user);
user.userBirthDate();