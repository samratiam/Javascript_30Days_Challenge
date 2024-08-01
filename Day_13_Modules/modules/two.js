const person = {
	firstname: "Ram", lastName: "Thapa",
	greet: function () {
		return `Namaste, ${this.firstname}`;
	}
}

export { person };