const library = {name:"KTM Library", books: [{title:"The Alchemist",year:2005,author:"Paulo Coelho"},
									 {title:"The Power of Mind",year:2010,author:"Dane Carnegie"},
									 {title:"The Art of Living",year:2013,author:"John Doe", } ]};

console.log("Library Object:", library);

console.log("Displaying library details:");
console.log("Name of the library:",library.name);
console.log("Title of books:");
library.books.forEach(
	book => console.log(book.title)
)

