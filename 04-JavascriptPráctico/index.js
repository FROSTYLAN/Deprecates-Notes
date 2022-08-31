const h1 = document.querySelector("h1");
const p = document.querySelector("p");
const parrafito = document.getElementsByClassName("parrafito");
const pid = document.getElementById("pid");
const input = document.querySelector("input");

console.log({ h1, p, parrafito, pid, input });

h1.innerHTML = "Patito <br> Feo";
// Esta propiedad insertar html en una etiqueta.

h1.innerText = "Patito <br> Feo";
// Esta propiedad insertar texto en una etiqueta.

console.log(h1.getAttribute("class"));
// getAttribute muestra el valor de la propiedad dada.

h1.setAttribute("id", "rojo");
// getAttribute asigna una propiedad a nuestra etiqueta.

h1.classList.add("rojo");
// classList.add() añade una clase a nuestro elemento html.

h1.classList.remove("rojo");
// classList.remove() elimina la clase a nuestro elemento html.

console.log(h1.classList.toggle("rojo"));
// Si la clase existe en la elimina y devuelve false, sino, la añade y devuelve true.

console.log(h1.classList.contains("verde"));
// Verifica si existe esa clase dentro del elemento HTML.

input.value = "456";
// Para los inputs podemos utilizar value para acceder a su valor.
// Sin la necesidad de usar setAttribute

const img = document.createElement("img");
// Crea un elemento html.
img.setAttribute(
  "src",
  "https://static.platzi.com/static/images/conf/logo_black@2x.png"
);
console.log(img);

pid.innerHTML = "";
pid.append(img);
// Agrega elementos al elemento html.
// AppendChild los agrega al final.
