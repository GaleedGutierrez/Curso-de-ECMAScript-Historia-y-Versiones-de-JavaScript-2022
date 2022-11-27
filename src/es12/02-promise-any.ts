const promise1 = new Promise((resolve, reject) => reject('Reject 1'));
const promise2 = new Promise((resolve, reject) => resolve('Resolve 2'));
const promise3 = new Promise((resolve, reject) => reject('Reject 3'));

const ARRAY = [ promise1, promise2, promise3 ];

Promise.any(ARRAY)
	.then(response => console.log(response));

export {};
