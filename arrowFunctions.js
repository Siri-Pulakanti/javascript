function greet(name) {
  console.log("Hello ", name);
}

const greet2 = (name) => console.log("Hello ", name);

greet("siri");
greet2("Dwaraka");

function sum(a, b) {
  return a + b;
}

const sum2 = (a, b) => a + b;

console.log(sum(4, 5));
console.log(sum2(4, 9));

const triple = (number) => 3 * number;
console.log(triple(8));
