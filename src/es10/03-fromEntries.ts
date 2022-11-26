const ARRAY: [string, number | string][] = [ [ 'name', 'galeed' ], [ 'age', 21 ] ];

const ENTRIES = new Map(ARRAY);

console.log(Object.fromEntries(ENTRIES));

export {};
