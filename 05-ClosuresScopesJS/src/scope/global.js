// variables

var a; // declarando
var b = "b"; // declaramos / asignamos
b = "bb"; // reasignar
var a = "aa"; // redeclarar
//
// -----------------------------------------------------
//
// Global Scope
var fruit = "Apples"; // global

function bestFruit() {
  console.log(fruit);
}

bestFruit();
//
// ----------------------------------------------------
//
function countries() {
  country = "Colombia"; // global
  console.log(country);
}

countries();
console.log(country);
