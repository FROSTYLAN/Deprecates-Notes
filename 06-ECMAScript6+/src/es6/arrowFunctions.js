const names = [
  { name: "Charles", age: 18 },
  { name: "Valeria", age: 15 },
  { name: "Karis", age: 18 },
];

let listOfNames = names.map(function (item) {
  console.log(item.name);
});

// es6

let listOfNames2 = names.map((item) => console.log(item.name));

const listOfNames3 = (name, age, country) => {
  // ...
};

const listOfNames4 = (name) => console.log();

const square = (num) => num * num;
