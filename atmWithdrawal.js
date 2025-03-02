/*
atm withdrawal with total balance tracking sys
total balance-10k
we need a func-withdrawMoney
if reqmoney>current bal==insufficient bal
else trans of amt xxx is success remaining balance is yyy
*/
let total = 10000;
function withDrawMoney(reqMoney) {
  if (total >= reqMoney) {
    total = total - reqMoney;
    console.log(
      "The transaction of",
      reqMoney,
      "is successful remianing balance is",
      total
    );
  } else {
    console.log("Insufficient Balance and your current balance is", total);
  }
}

withDrawMoney(50);
withDrawMoney(250);
withDrawMoney(750);
withDrawMoney(15000);
