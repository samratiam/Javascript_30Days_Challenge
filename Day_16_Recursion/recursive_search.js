// Task 7: Recursive function to perform a binary search on a sorted array. 
function binarySearch(arr, start, end, searchText) {
	// Base case: if start index is greater than end index, searchText is not present
	if (start > end) {
		console.log(`${searchText} is not found`)
		return false;
	}

	let middle = Math.floor((start + end) / 2);

	if (arr[middle] === searchText) {
		console.log(`${searchText} is found at index ${middle}`)
		return true;
	}

	if (arr[middle] === searchText) {
		console.log(`${searchText} is found at index ${middle}`)
		return true;
	}
	if (arr[middle] > searchText) {
		return binarySearch(arr, start, middle - 1, searchText)
	}
	else {
		return binarySearch(arr, middle + 1, end, searchText)
	}
}

let testArray1 = [6, 7, 8, 9, 10, 11];
binarySearch(testArray1, 0, testArray1.length - 1, 0)
binarySearch(testArray1, 0, testArray1.length - 1, 8)

//Task 8: Recursive function to count the occurrences of a target element in an array. 
function countTargetElement(targetArr, n, target) {
	if (n < 0) {
		return 0;
	}

	let count = (targetArr[n] === target) ? 1 : 0;

	return count + countTargetElement(targetArr, n - 1, target)
}
let targetArray = [5, 6, 7, 5, 5, 10, 5, 5, 9, 5, 6];
console.log("Target 5 occurrences:", countTargetElement(targetArray, targetArray.length - 1, 5))

console.log("Target 6 occurrences:", countTargetElement(targetArray, targetArray.length - 1, 6))


//TODO:
//Tree Traversal
//Task 9: Recursive function to perform an in-order traversal of a binary tree. Log the nodes as they are visited.
//Task 10: Recursive function to calculate the depth of a binary tree. Log the result for a few test cases