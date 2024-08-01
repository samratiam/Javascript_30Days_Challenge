class Person{
	constructor(firstName, lastName)
	{
		this.firstName = firstName;
		this.lastName = lastName;
	}

	// Fullname works like a property
	//gettter method
	get fullname(){
		return `${this._firstName} ${this._lastName}`
	}

	//setter method
	set firstName(value){
		// creates a new property _firstName. If we don't use new name, it will result in Maximum call stack size exceeded error
		this._firstName=value;
	}

	set lastName(value){
		// creates a new property _lastName
		this._lastName=value;
	}
}

const user = new Person("Samrat","Pudasaini");
console.log("Full name:", user.fullname)

user.firstName="Shyam";
user.lastName="Thapa";
console.log("Full name using setter:",user.fullname) 

//TODO:
//9. Define a class Account with private fields for balance and a method to deposit and withdraw money. Ensure that the balance can
//only be updated through these methods.
//10. Create an instance of the Account class and test the deposit and withdraw methods, logging the balance after each operation