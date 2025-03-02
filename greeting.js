function getTimeinHrs() {
  const options = {
    timeZone: "Asia/Kolkata",
    hour: "2-digit",
    hour12: false, // 24-hour format
  };

  const currentHourInIST = new Date().toLocaleString("en-IN", options);
  return currentHourInIST;
}

function greeting(name) {
  var time = getTimeinHrs();
  if (time >= 6 && time <= 11) {
    console.log("Hi Goodmorning", name);
  } else if (time >= 12 && time <= 15) {
    console.log("Hi Goodafternoon");
  } else if (time >= 16 && time <= 19) {
    console.log("Hi Good Evening", name);
  } else if (time >= 20 && time <= 22) {
    console.log("Hi Good Night");
  } else {
    console.log("Sleep dude");
  }
}

greeting("siri");
