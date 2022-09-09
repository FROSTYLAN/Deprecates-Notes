let person = {
  name: "John",
  age: 21,
  country: "United States",
};

console.log(person.name, person.age, person.country);

// es6
let { name, age, country } = person;
console.log(name, age, country);
