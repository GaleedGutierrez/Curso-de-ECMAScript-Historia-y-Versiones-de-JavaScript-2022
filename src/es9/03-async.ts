async function* anotherGenerator () {
	yield await Promise.resolve(1);
	yield await Promise.resolve(2);
	yield await Promise.resolve(3);
}

const OTHER = anotherGenerator();

OTHER.next().then(response => console.log(response.value));
OTHER.next().then(response => console.log(response.value));
OTHER.next().then(response => console.log(response.value));
console.log('Hello!!!');

async function arrayOfNames (array: string[]) {
	for await (const VALUE of array) {
		console.log(VALUE);
	}
}

const NAMES = arrayOfNames([ 'Galeed', 'Oscar', 'Freddy' ]);

console.log('After');

export {};
