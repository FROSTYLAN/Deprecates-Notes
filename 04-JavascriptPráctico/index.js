const h1 = document.querySelector("h1");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const form = document.querySelector("#form");
const btn = document.querySelector("#btnCalculo");
const pResult = document.querySelector("#result");

form.addEventListener("submit", btnOnclick);

function btnOnclick(event) {
  event.preventDefault();
  const sumaInputs = input1.value + input2.value;
  pResult.innerText = "Resultado: " + sumaInputs;
}
