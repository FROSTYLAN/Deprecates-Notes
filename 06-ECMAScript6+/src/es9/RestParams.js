const obj = {
  name: "oscar",
  age: 32,
  country: "MX",
};

let { name, ...all } = obj;

console.log(name, all);
