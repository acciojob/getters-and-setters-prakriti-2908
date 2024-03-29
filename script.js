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
const person = new Person("John", 25);
console.log(person.name); // Output: John

person.age = 30;
console.log(person.age); // Output: 30

const student = new Student("Alice", 22);
student.study(); // Output: Alice is studying

const teacher = new Teacher("Bob", 40);
teacher.teach(); // Output: Bob is teaching