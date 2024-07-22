// console.log(`Maximum number is ${maxNum(-40,10)}`) //Shows TypeError: maxNum is not a function

//This is function expression which is not hoisted unlike function declaration
//Function also doesn't have function name
//Function expression should be before the calling method
var maxNum = function (num1, num2) {
	if (num1 > num2) {
		return num1;
	}
	else {
		return num2;
	}
}
console.log(`Maximum number is ${maxNum(-40, 10)}`)
