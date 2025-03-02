function getBMIStatus(name, weight, height) {
  var BMI = weight / (height * height);

  if (BMI < 18.5) {
    console.log(name, "your BMI is", BMI, "underweight");
  } else if (BMI < 24.9 && BMI >= 18.5) {
    console.log(name, "your BMI is", BMI, "Normal");
  } else if (BMI < 29.9 && BMI >= 24.9) {
    console.log(name, "your BMI is", BMI, "Overweight");
  } else {
    console.log(name, "your BMI is", BMI, "Obese");
  }
}

getBMIStatus("siri", 40, 1.7);
