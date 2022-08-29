const miAuto = {
  marca: "Toyota",
  model: "Corolla",
  year: 2020,
  detailCar: function () {
    console.log(`auto ${this.model} ${this.year}`);
  },
};

console.log(miAuto);
console.log(miAuto.marca);
console.log(miAuto.model);
console.log(miAuto.year);
miAuto.detailCar();
