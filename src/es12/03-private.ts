class User {
	name: string;
	age: number;

	constructor (name: string, age: number) {
		this.name = name;
		this.age = age;
	}

	#speak () {
		return 'Hello!';
	}

	greeting () {
		const { name } = this;

		return `${this.#speak()} ${name}`;
	}

	get #uAge () {
		return this.age;
	}

	set #uAge (newAge: number) {
		this.age = newAge;
	}
}

const user = new User('Galeed', 21);

// Error
console.log(user.uAge);
console.log(user.uAge = 30);

export {};
