// let length= x.length
// console.log(length)

//prompt the user to write a msg and once done display an alert showing the no of char they

// let y=prompt("Please wirte a msg")
// let length = y.length
// alert("You have typed"+length+"num of char")

// 50 char limit , current total char count and remainig char count

// let msg=prompt("Please type a msg")
// let msgLen=msg.length
// if(msgLen<=50)
// {
//     alert("you have typed"+msgLen+"no of char anf the remainig char count is"+(50-msgLen))

// }
// else{
//     alert("you have exceeded the char limit by"+(msgLen-50))

// }
// if(msgLen<=10){
//     alert("you have typed "+msg+" Its lenght is "+msgLen)

// }
// else{
//     alert("you have exceeded char limit by"+(msgLen-10)+"valid part of msg "+(msg.slice(0,11)))

// }

// usr nundi input theskovali,store in a variable; 1st letter in upper,next in lower

// let usrNme=prompt("Please enter your name")
// let x=usrNme.slice(1,usrNme.length)
// let y=usrNme.slice(0,1)
// y.toUpperCase()+ x.toLowerCase()
// alert("Hi " + y.toUpperCase()+ x.toLowerCase())

//love calculator, 2 names, random number bn 1-100,alert

let x = prompt("Please give 1st name");
let y = prompt("Please give 2nd name");
let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(x.toLowerCase());
if (
  (x.toLowerCase() == "romeo" && y.toLowerCase() == "juliet") ||
  (y.toLowerCase() == "romeo" && x.toLowerCase() == "juliet")
) {
  randomNumber = 100;
  console.log("hi");
}

alert(
  "Hi the Love percentage of " + x + " and " + y + "is " + randomNumber + "%"
);
