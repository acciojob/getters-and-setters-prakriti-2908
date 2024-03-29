//complete this code
class Person {
	// #name
	// #age
	constructor(name,age){
		this.name = name;
		this.age = age;
	}
	get name(){
		return this.name;
	}
	set age(age){
		this.age = age;
	}
}

class Student extends Person {
	study(){
		let n = this.name;
		console.log(`${n} is studying`);
	}
}

class Teacher extends Person {
	let n = this.name;
	teach(){
		console.log(`${n} is teaching`);
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
