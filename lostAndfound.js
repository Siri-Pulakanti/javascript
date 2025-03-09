//lost & found
let lostItem = prompt("Hi..Please let me know what is the item lost");
let foundItems = ["mobile", "keys", "glasses", "wallet", "laptop"];
if (foundItems.includes(lostItem.toLowerCase())) {
  console.log(
    lostItem + " found at index " + foundItems.indexOf(lostItem.toLowerCase())
  );
} else {
  console.log(lostItem + " not found");
}
