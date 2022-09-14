let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];

console.log(array.flat());
// [ 1, 2, 3, 1, 2, 3, [ 1, 2, 3 ] ]
// Aplana un array, si no tiene argument tomara 1 de profundidad.

console.log(array.flat(2));
// [ 1, 2, 3, 1, 2, 3, 1, 2, 3]

let array2 = [1, 2, 3, 4, 5];

console.log(array2.flatMap((value) => [value, value * 2]));
// [1, 2, 2, 4, 3, 6, 4, 8, 5, 10];
