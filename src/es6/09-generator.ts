function* iterate (array: string[]) {
	for (const VALUE of array) {
		yield VALUE;
	}
}

const IT = iterate([ 'Oscar', 'Galeed', 'Ana', 'Ulises', 'Jennifer' ]);

console.log(IT.next().value);
console.log(IT.next().value);
console.log(IT.next().value);
console.log(IT.next().value);
console.log(IT.next().value);
console.log(IT.next().value);
console.log(IT.next().value);
