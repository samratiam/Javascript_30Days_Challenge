//Task 5: Recursive function to reverse a string
function reverseString(str, n) {
	if (n === 0) {
		return str[0]
	}
	return str[n] + reverseString(str, n - 1)
}

let text1 = "samrat";
let reverseText1 = reverseString(text1, text1.length - 1)
console.log("Reverse Text 1: ",reverseText1)

let text2 = "school";
let reverseText2 = reverseString(text2, text2.length - 1)
console.log("Reverse Text 2: ",reverseText2)


//Recursive function to check if a string is a palindrome
function checkPalindrome(str,start,end){
	if(start===end){
		return true;
	}
	if(str[start] != str[end]){
		return false;
	}

	return checkPalindrome(str, start+1,end-1); 
}
let text3 = "SMART";
checkPalindrome(text3,0, text3.length-1) ? console.log(`${text3} is palindrome `) : console.log(`${text3} is not palindrome `)

let text4 = "racecar";

checkPalindrome(text4,0, text4.length-1) ? console.log(`${text4} is palindrome `) : console.log(`${text4} is not palindrome `)

