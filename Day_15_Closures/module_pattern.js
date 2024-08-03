// Task 6: Use closures to create a simple module for managing a 
// collection of items. Implement methods to add, remove and list items

function manageItems(){
	let numOfItems = 0;
	let listOfItems = []

	function addItem(itemName){
		listOfItems.push(itemName);
		numOfItems += 1;
	}
	function removeItem(){
		listOfItems.pop();
		numOfItems = numOfItems - 1;
	}
	function listItems(){
		console.log(`Items List: ${listOfItems}`)
		console.log(`Number of Items : ${numOfItems}`)

	}
	
	return {addItem, removeItem,listItems};
}

let result = manageItems()

result.addItem("Bag");
result.addItem("Book");
result.addItem("Laptop");
result.addItem("Purse");

result.listItems()
result.removeItem()
result.removeItem()
result.listItems()


