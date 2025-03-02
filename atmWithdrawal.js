/*
atm withdrawal with total balance tracking sys
total balance-10k
we need a func-withdrawMoney
if reqmoney>current bal==insufficient bal
else trans of amt xxx is success remaining balance is yyy
*/
let total = 10000;
let dailyTranslimit = 5000;
function withDrawMoney(reqMoney) {
  if (total >= reqMoney && reqMoney <= dailyTranslimit) {
    total = total - reqMoney;
    console.log(
      "The transaction of",
      reqMoney,
      "is successful remianing balance is",
      total
    );
    dailyTranslimit -= reqMoney;
  } else if (total >= reqMoney && reqMoney > dailyTranslimit) {
    console.log(
      "The requested amout is exceeding daily transaction limit",
      dailyTranslimit
    );
  } else {
    console.log("Insufficient Balance and your current balance is", total);
  }
}

withDrawMoney(50);
withDrawMoney(250);
withDrawMoney(4900);
withDrawMoney(750);
withDrawMoney(15000);
