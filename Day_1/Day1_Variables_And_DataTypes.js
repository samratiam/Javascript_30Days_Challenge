//Using var
var test1 = 1234;
console.log(test1);

//Using let
let test2 = "example of let";
console.log(test2);

//Using const
const test3 = true;
console.log(test3);


//Number
var test4 = 5345;
console.log("Type of 4",typeof(test4));

//string
var test5 = "Test 5";
console.log("Type of 5",typeof(test5));

//boolean
var test6 = false;
console.log("Type of 6",typeof(test6));


//object
var test7 = {name:"Ram" , roll:21};
console.log("Type of 7",typeof(test7));


//array
//It returns object type. Arrays are special type of objects. 
// So, different datatype values can be stored
var test8 = ["Saab", "Volvo", 5, true,10.7];
console.log("Type of 8",typeof(test8));
console.log("Array result:",test8);


//Let 
let test9 = "First";
console.log("Test 9 Initial: ",test9);

test9 = "Second";
console.log("Test 9 Final:",test9);

//const
const test10 = "Sample 1";
test10 = "Sample 5"; //Throws error. Can't reassign value to const
console.log("Test 10:", test10);