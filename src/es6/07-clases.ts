// class User {
// 	constructor (parameters) {

// 	}
// }

// const newUser = new User();

// class User {
// 	// Métodos
// 	greeting () {
// 		return 'Hello!';
// 	}
// }

// const user = new User();

// console.log(user.greeting());

// const developer = new User();

// console.log(developer.greeting());

// Constructor
// class User {
// 	// Constructor
// 	constructor () {
// 		console.log('Nuevo Usuario');
// 	}

// 	greeting () {
// 		return 'Hello!';
// 	}
// }
// const user = new User();


// This
// class User {
// 	name: string;

// 	constructor (name: string) {
// 		this.name = name;
// 	}

// 	speak () {
// 		return 'Hello!';
// 	}

// 	greeting () {
// 		const { name } = this;

// 		return `${this.speak()} ${name}`;
// 	}

// }

// const user = new User('Galeed');

// console.log(user.greeting());

// Setters and getters

class User {
	name: string;
	age: number;

	constructor (name: string, age: number) {
		this.name = name;
		this.age = age;
	}

	speak () {
		return 'Hello!';
	}

	greeting () {
		const { name } = this;

		return `${this.speak()} ${name}`;
	}

	get uAge () {
		return this.age;
	}

	set uAge (newAge: number) {
		this.age = newAge;
	}
}

const user = new User('Galeed', 21);

console.log(user.uAge);
console.log(user.uAge = 30);
