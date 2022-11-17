/* eslint-disable */
// function newUser (name, age, country) {
// 	var name = name || 'Oscar';
// 	var age = age || 32;
// 	var country = country || 'MX'
// 	console.log(name, age,country);
// }

// newUser();
// newUser('David', 15, 'CO');


function newAdmin (name = 'Oscar', age = 32, country = 'CL') {
	console.log(name, age, country);
}

newAdmin();
newAdmin('Ada', 20, 'AR');
