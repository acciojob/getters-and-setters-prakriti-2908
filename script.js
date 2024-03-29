class Person {
	constructor(name, age){
		this._name = name; // using underscore as prefix for private property
		this._age = age;
	}
	get name(){
		return this._name;
	}
	set age(age){
		this._age = age;
	}
}

class Student extends Person {
	study(){
		console.log(`${this.name} is studying`);
	}
}

class Teacher extends Person {
	teach(){
		let n = this.name;
		console.log(`${n} is teaching`);
	}
}
// const person = new Person("John", 25);
// console.log(person.name); // Output: John

// person.age = 30;
// console.log(person.age); // Output: 30

// const student = new Student("Alice", 22);
// student.study(); // Output: Alice is studying

// const teacher = new Teacher("Bob", 40);
// teacher.teach(); // Output: Bob is teaching