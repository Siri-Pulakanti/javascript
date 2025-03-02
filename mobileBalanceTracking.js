/*
mob bal=600
rate 5rup/min
makecall function(time in min)
call success you are charged xx and balance is yy
call failed insufficient bal, available bal yy

*/

let mobileBal = 600;
function makeCall(duration, rate) {
  if (mobileBal >= rate * duration) {
    mobileBal -= rate * duration;
    console.log(
      "The call is successful you are charged",
      duration,
      "and balance is",
      mobileBal
    );
  } else if (mobileBal == 0) {
    console.log(
      "The call is failed due to insufficient balance, the available balance is",
      mobileBal
    );
  } else {
    console.log(
      "You will get a talktime of only",
      mobileBal / rate,
      "minutes please reacharge",
      (duration - mobileBal / rate) * rate,
      "rupees for the complete converstion"
    );
  }
}

// makeCall(55, 0.9);
makeCall(31, 2);
// makeCall(78, 0.08);
makeCall(50, 20);
// makeCall(780, 0.06);
// makeCall(150, 0.000004);
