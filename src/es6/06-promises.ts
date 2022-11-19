const anotherFunction = () => {
	return new Promise((resolve, reject) => {
		const algo = false;

		if (algo) {
			resolve('Hey!!!');
		} else {
			reject('Whoooops!!!');
		}
	});
};

anotherFunction()
	.then((response) => console.log(response))
	.catch((error) => console.log(error));
