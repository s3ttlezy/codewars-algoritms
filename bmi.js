// Enter height value in meters

function bmi(weight, height) {
  let bmi = (weight / height**2).toFixed(1)
  return bmi > 18.5 ? bmi >= 25.0 ? bmi >= 30.0 ? "Obese" : "Overweight" : "Normal" : "Underweight"
}

bmi(90, 1.80)