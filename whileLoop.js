let name = prompt("Hi..Whats your name:");
while (name != "Siri") {
  name = prompt("Hi..Whats your name:");
}
alert("Siri");

let number = prompt("Guess the lottery number");
while (number != 6) {
  if (number < 6) {
    number = prompt("Number to low guess again");
  } else {
    number = prompt("Number to high guess again");
  }
}

alert("You guessed the right number");
