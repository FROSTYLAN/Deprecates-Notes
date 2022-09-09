function newFunction(name, age, country) {
  var name = name || "Charles";
  var age = age || 18;
  var country = country || "us";
  console.log(name + " " + age + " " + country);
}

// es6
function newFunction2(name = "Charles", age = 19, country = "us") {
  console.log(name + " " + age + " " + country);
}

newFunction2();
newFunction2("Ricardo", 23, "CO");
