var firstName; // Undefined
firstName = "Oscar";
console.log(firstName);

//
// --------------- VAR --------------- //
//

var lastName = "Castillo"; // declarar y asignar ✅
lastName = "Quito"; // reasignar ✅
var lastName = "Chacón"; // redeclarar y asignar ✅

//
// --------------- LET --------------- //
//

let fruit = "Apple"; // declarar y asignar ✅
fruit = "Kiwi"; // reasignar ✅
let fruit = "Banana"; // redeclarar ❌

//
// --------------- CONST --------------- //
//

const firstName = "Apple"; // declarar y asignar ✅
firstName = "Kiwi"; // reasignar ❌
const firstName = "Banana"; // redeclarar ❌

//
// -------------------- ED con CONST -------------------- //
//

const vehicles = [];
vehicles.push("car");
console.log(vehicles);

vehicles.pop();
console.log(vehicles);
