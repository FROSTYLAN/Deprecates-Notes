var isTrue = true;
var isFalse = false;
console.log((isTrue &&= isFalse));

var isTrue = true;
var isFalse = false;
console.log((isTrue ||= isFalse));

var isTrue = undefined;
var isFalse = false;
console.log((isTrue ??= isFalse));
