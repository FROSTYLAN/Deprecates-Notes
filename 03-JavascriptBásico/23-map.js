var articulos = [
  { nombre: "Bici", costo: 3000 },
  { nombre: "TV", costo: 2500 },
  { nombre: "Libro", costo: 320 },
  { nombre: "Celular", costo: 10000 },
  { nombre: "Laptop", costo: 20000 },
  { nombre: "Teclado", costo: 500 },
  { nombre: "Audífonos", costo: 1700 },
];

var nombreArticulos = articulos.map(function (articulo) {
  return articulo.nombre;
});

console.log(nombreArticulos);

// Este crear un array nuevo iterando los elemento de
// otro array a traves de una función.
