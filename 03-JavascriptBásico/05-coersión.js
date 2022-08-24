// COERCION IMPLÍCITA
var a = 4 + "7";
console.log(typeof a, a); // -> string "47"

var b = 4 * 7;
console.log(typeof b, b); // -> number 28

// Transformando number a string implícitamente
var c = 20;
var d = a + "";
console.log(typeof d, d); // -> String "20"

// Transformando number b string explícitamente
var c = 20;
var e = String(c);
console.log(typeof e, e); // -> String "20"
