//flat
const ARRAY = [ 1, 2, 3, 4, 5, [ 6, 7, 8, 9, 10, [ 11, 12, 13, 14, 15, 16 ] ] ];

// console.log(ARRAY.flat(3));

// flatmap
const ARRAY_2 = [ 1, 2, 3, 4, 5 ];

console.log(ARRAY_2.flatMap((value) => [ value, value * 2 ]));
