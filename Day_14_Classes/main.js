class Person {
	//Properties
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
	greet() {
		return `Namaste, ${this.name}`
	}
	updateAge() {
		return `Updated user age: ${this.age + 5}`
	}

	static genericGreeting() {
		return `What's up?`
	}

}

const user = new Person("Sam", 30);
console.log(user.greet());
console.log(user.updateAge());

//Inheritance
class Student extends Person {
	static totalNumOfStudents = 0;
	constructor(name, age, studentId) {
		super(name, age); //It sends "this" context of Student which will be used in constructor of Person
		this.studentId = studentId;
		//using static property
		Student.totalNumOfStudents += 1;
	}
	getStudentId() {
		return `Student ID: ${this.studentId}`;
	}

	//Override greet() method
	greet() {
		return `Hello ${this.name} with Student ID: ${this.studentId}`
	}
}

const ram = new Student("Ram", 25, "12345");
console.log(ram.getStudentId());
console.log(ram.greet());

//Static Methods and Properties
console.log(Person.genericGreeting());


const sita = new Student("Sita", 35, "123456");
const hari = new Student("Hari", 45, "123457");

console.log("Total num of students:", Student.totalNumOfStudents)
