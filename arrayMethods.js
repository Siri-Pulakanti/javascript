let numbers = [1, 2, 4, 15, 66, 53, 78, 94, 3];
let evenNumbers = numbers.filter(function (num) {
  return num % 2 == 0;
});
console.log(evenNumbers);
console.log(numbers);
