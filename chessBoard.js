//print 8 # in a single row
let j = "";
for (let row = 1; row <= 8; row++) {
  for (let i = 1; i <= 8; i++) {
    printRow(row, i);
  }
  console.log(j);
  j = "";
}
function printRow(x, i) {
  if (x % 2 == 1) {
    if (i % 2 == 1) {
      j = j + "#";
    } else {
      j = j + "_";
    }
  } else {
    if (i % 2 == 1) {
      j = j + "_";
    } else {
      j = j + "#";
    }
  }
}
