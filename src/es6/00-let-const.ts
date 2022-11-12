// eslint-disable-next-line no-var
var lastName = 'David';

lastName = 'Galeed';
console.log(lastName);

let fruit = 'Apple';

fruit = 'Kiwi';
console.log(fruit);

const animal = 'Dog';

// animal = 'Cat';
console.log(animal);


const fruits = () => {
	// eslint-disable-next-line no-constant-condition
	if (true) {
		// eslint-disable-next-line no-var
		var fruit1 = 'Apple';
		// eslint-disable-next-line no-var, prefer-const
		let fruit2 = 'Kiwi';
		const fruit3 = 'Banana';
	}

	// console.log({ fruit1, fruit2, fruit3 });
};

fruits();


