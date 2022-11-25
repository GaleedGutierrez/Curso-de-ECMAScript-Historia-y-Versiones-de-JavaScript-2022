const anotherFunction = () => {
	return new Promise((resolve, reject) => {
		(false)
			? resolve('Hey!!!')
			: reject('Whooooops!!!');
	});
};

anotherFunction()
	.then(response => console.log(response))
	.catch(error => console.log(error))
	.finally(() => console.log('Finally'));
