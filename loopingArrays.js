let colors = ["red", "blue", "green", "yellow", "orange", "grey"];
colors.push("white");
// for (let i = 0; i < colors.length; i++) {
//   console.log(colors[i]);
// }

console.log(colors.indexOf("reddy")); //index of an element

console.log(colors.includes("reddy")); //checks if the element exists in the array

console.log(colors.includes("red"));

let friends = ["dwaraka", "srinivas", "simone", "vijay", "nikhil"];
let name = prompt("Hi, what is your name");
if (friends.includes(name.toLowerCase())) {
  console.log("Hi " + name);
} else {
  console.log("Sorry, you are not invited to the party");
}

// let x=false
// for(let i=0;i< friends.length;i++){
//     if(name.toLowerCase()==friends[i]){
//          x=true;
//     }
// }
// if(x){
//      console.log("Hi ",name)
// }
// else{
//      console.log("Sorry you are not invited to the party")
// }
