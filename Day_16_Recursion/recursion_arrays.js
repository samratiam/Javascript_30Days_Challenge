//Recursion function to find the sum of all elements in an array
function sum(arr, n) {
	if (n === 0) {
		return arr[0]
	}
	return arr[n] + sum(arr, n - 1)
}

let sumArray1 = [1, 2, 3];
console.log("Sum of array of 5 elements:", sum(sumArray1, sumArray1.length - 1))


let sumArray2 = [6, 7, 8, 9, 10];
console.log("Sum of array of 5 elements starting from 6:", sum(sumArray2, sumArray2.length - 1))

//Recursive function to find the maximum elements in an array
function findMax(arr, n) {
	if (n === 0) {
		return arr[0]
	}
	return arr[n]> findMax(arr, n-1) ? arr[n] : findMax(arr,n-1)
}
let array1 = [3, 10,20,5,7];
console.log("Maximum element of array 1:",findMax(array1, array1.length))

let array2 = [56,24,4,0,98,19];
console.log("Maximum element of array 2:",findMax(array2, array2.length))
