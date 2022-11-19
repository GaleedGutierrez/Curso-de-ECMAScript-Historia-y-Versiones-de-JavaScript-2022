interface InterfaceDeepCopy {
	[key: string | number]: any[] | any;
	[key: symbol]: any[] | any;
}

function isObjectOrArray (element: InterfaceDeepCopy | InterfaceDeepCopy[]): string {
	const ELEMENT_IS = {
		'[object Object]' : 'object',
		'[object Array]'  : 'array'
	};
	const TYPE_ELEMENT = Object.prototype.toString.call(element) as keyof typeof ELEMENT_IS;
	const IS_ELEMENT_ANY = TYPE_ELEMENT !== '[object Object]' && TYPE_ELEMENT !== '[object Array]';
	const RESULT = (IS_ELEMENT_ANY)
		? 'any'
		: ELEMENT_IS[TYPE_ELEMENT];

	return RESULT;
}

function deepCopy (subject: InterfaceDeepCopy | InterfaceDeepCopy[]): InterfaceDeepCopy | InterfaceDeepCopy {
	const SUBJECT_IS = isObjectOrArray(subject);

	if (SUBJECT_IS === 'any') return subject;

	const COPY_SUBJECT: InterfaceDeepCopy | InterfaceDeepCopy[] = (SUBJECT_IS === 'array')
		? []
		: {};

	for (const KEY in subject) {
		const IS_KEY_ANY = isObjectOrArray(subject[KEY]) === 'any';

		COPY_SUBJECT[KEY] = (IS_KEY_ANY)
			? subject[KEY]
			: deepCopy(subject[KEY]);
	}

	return COPY_SUBJECT;
}

const OBJ1 = {
	a : 'a',
	b : 'b',
	c : {
		d : 'd',
		e : 'e'
	},

	f : [ 1, 2, 3, 4, 5 ],

	editA () {
		this.a = 'AAAAAAAAAA';
	}
};

const ARR1 = [
	'a',
	'b',
	{
		d : 'd',
		e : 'e'
	},
	[ 1, 2, 3, 4, 5, { c: 1 },
		function () {
			return 10;
		}
	],
];

const OBJ2 = deepCopy(ARR1);

console.log(ARR1);
