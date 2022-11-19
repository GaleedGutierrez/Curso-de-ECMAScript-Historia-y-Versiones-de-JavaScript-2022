/* eslint-disable */

// Array destructuring
let fruit = ['apple', 'banana'];
let [a, b, c] = fruit;
console.log(a, b, c);


// Object destructuring
let user = {
    username: 'Galeed',
    age: 21
}
let {username, age} = user;
console.log(username, age);

// Spread operator
const person = {name: 'Galeed', age: 21};
const country = 'AR';

const data = {
	id: 1,
	...person,
	country
}
console.log(data);

// Rest
function sum (num: number, ...values: number[]) {
	console.log({num, values});
	console.log(num + values[0]);
	return num + values[0];
}

sum(1, 1, 2, 3)



export {}
