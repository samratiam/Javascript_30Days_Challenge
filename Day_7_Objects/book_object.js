const book = {title: "The Alchemist",author:"Paulo Coelho",year:2005,
	displayBook: function(){
		return `Book Title:${this.title}, Book Author: ${this.author}`;
	},
	updateYear: function(newDate)
	{
		this.year = newDate;
	}
};

console.log(book);

console.log("Book Title:", book.title);
console.log("Book Author:",book.author);

console.log("Display book detail using displayBook method:");
console.log(book.displayBook());

book.updateYear("2024")
console.log("Updated year of book:",book.year );

console.log("Show book details using for..in loop:");
for(const key in book)
{
	console.log(`${key}: ${book[key]}`)
}

console.log("Using Object.keys and Object.values method:");
console.log("Keys: ",Object.keys(book));
console.log("Values: ",Object.values(book));
