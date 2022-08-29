const articulos = [
  { nombre: "Bici", costo: 3000 },
  { nombre: "TV", costo: 2500 },
  { nombre: "Libro", costo: 320 },
  { nombre: "Celular", costo: 10000 },
  { nombre: "Laptop", costo: 20000 },
  { nombre: "Teclado", costo: 500 },
  { nombre: "Audífonos", costo: 1700 },
];

var articulosBaratos = articulos.some(function (articulo) {
  return articulo.costo <= 700;
});

console.log(articulosBaratos);
// El método some() comprueba si al menos un elemento del
//array cumple con la condición implementada por la función proporcionada.

// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/some
