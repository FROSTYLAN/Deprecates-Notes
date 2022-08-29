const articulos = [
  { nombre: "Bici", costo: 3000 },
  { nombre: "TV", costo: 2500 },
  { nombre: "Libro", costo: 320 },
  { nombre: "Celular", costo: 10000 },
  { nombre: "Laptop", costo: 20000 },
  { nombre: "Teclado", costo: 500 },
  { nombre: "Audífonos", costo: 1700 },
];

articulos.forEach(function (articulo) {
  console.log(articulo.nombre);
});

// El método forEach() ejecuta la función
// indicada una vez por cada elemento del array.

// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
