let fruits = ["apple", "banana", "grape", "watermelon"];
console.log(fruits);
fruits.push("pieapple");
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.unshift("strawberry");
console.log(fruits);
fruits.shift();
console.log(fruits);

console.log(fruits.slice(1, 3)); //Slice doesnt modify the data in array
console.log(fruits.slice(1));
console.log(fruits.splice(1, 0)); //Splice modifies the data in array
console.log(fruits);
console.log(fruits.splice(2, 1, "berry"));
console.log(fruits);
