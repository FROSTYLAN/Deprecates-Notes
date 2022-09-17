setTimeout(function () {
  console.log("Hola JavaScript");
}, 5000);

function gretting(name) {
  console.log(`Hola ${name}`);
}
setTimeout(gretting, 2000, "Oscar");
