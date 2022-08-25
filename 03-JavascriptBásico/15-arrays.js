var frutas = ["Manzana", "Plátano", "Cereza", "Fresa"];

console.log(frutas); // -> ["Manzana", "Plátano", "Cereza", "Fresa"]

console.log(frutas.length); // -> 4

console.log(frutas[0]); // -> Manzana

// push: agrega un elemento al final del array y devuelve la nueva longitud.
var masFrutas = frutas.push("Uvas");
console.log(frutas, masFrutas);

// pop: elimina el elemento final del array y lo devuelve.
var ultimo = frutas.pop();
console.log(frutas, ultimo);

// unshift: agrega un elemento al inicio del array y devuelve la nueva longitud.
var nuevaLongitud = frutas.unshift("Uvas");
console.log(frutas, nuevaLongitud);

// shift: Elimina el primer elemento del array y lo devuelve.
var borrarFruta = frutas.shift();
console.log(frutas, borrarFruta);

// indexOf: Devuelve la posicion de un elemento.
var posicion = frutas.indexOf("Cereza");
console.log(posicion, frutas[2]);
