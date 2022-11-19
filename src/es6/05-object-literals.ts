// Enhanced object literals

function newUser (user: string, age: number, country: string, uId: number) {
	return {
		user,
		age,
		country,
		id : uId
	};
}

console.log(newUser('Galeed', 21, 'AR', 1));

export {};
