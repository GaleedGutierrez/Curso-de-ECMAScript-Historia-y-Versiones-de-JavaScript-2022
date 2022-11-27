const anotherFunction = async () => {
	const module = await import('./module.mjs');

	console.log(module);
	module.hello();
};

const button = document.querySelector('#btn') as HTMLButtonElement;

button.addEventListener('click', anotherFunction);

export {};
