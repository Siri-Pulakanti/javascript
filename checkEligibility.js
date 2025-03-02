function checkEligibility(name, age, country) {
  if (
    (country == "India" && age >= 18) ||
    (country == "Japan" && age >= 20) ||
    (country == "UAE" && age >= 25)
  ) {
    console.log(name, "you are eligible to vote in", country);
  } else {
    console.log(name, "you are not eligible to vote in", country);
  }
}
checkEligibility("siri", 9, "India");
checkEligibility("siri", 19, "UAE");
checkEligibility("siri", 29, "Japan");
