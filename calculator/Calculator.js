function add(a, b) {
  return a + b;
}

function subtraction(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function division(a, b) {
  return a / b;
}

function divisionInteger(a, b) {
  return (a - a % b) / b;
}

console.log("Correct usage:");
console.log("5 + 10 = " + add(5, 10));
console.log("-5 - -10 = " + subtraction(-5, -10));
console.log("2.1 * -8.2 = " + multiply(2.1, -8.2));
console.log("7 / 3 = " + division(7, 3));
console.log("7 / 4 = " + divisionInteger(7, 4));

console.log("Alternative usage:");
console.log("5 + abc = " + add(5, "abc"));
console.log("5 - abc = " + subtraction(5, "abc"));
console.log("5 + true = " + add(5, true));
console.log("5 - true = " + subtraction(5, true));
console.log("1 + undefined = " + add(1, undefined));
console.log("null + true = " + add(null, true));
console.log("foo + false = " + add("foo", false));
console.log("null + false = " + add(null, false));
console.log("+Infinity + -Infinity = " + add(+Infinity, -Infinity));
console.log("one parameter = " + add(5));
console.log("no parameters = " + division());

