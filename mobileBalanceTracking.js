/*
mob bal=600
rate 1rup/min
makecall function(time in min)
call success you are charged xx and balance is yy
call failed insufficient bal, available bal yy

*/

let mobileBal = 600;
function makeCall(duration) {
  if (mobileBal >= duration) {
    mobileBal -= duration;
    console.log(
      "The call is successful you are charged",
      duration,
      "and balance is",
      mobileBal
    );
  } else {
    console.log(
      "The call is failed due to insufficient balance, the available balance is",
      mobileBal
    );
  }
}

makeCall(55);
makeCall(78);
makeCall(780);
makeCall(150);
