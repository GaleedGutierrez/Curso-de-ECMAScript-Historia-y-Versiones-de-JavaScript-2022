const USER = {
	username : 'galeed',
	age      : 21,
	country  : 'AR',
};

const { username, ...values } = USER;

console.log(username);
console.log(values);
