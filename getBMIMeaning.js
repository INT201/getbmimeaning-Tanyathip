const { template } = require('@babel/core')

function calculateBMI(weight, height) {
  BMI = weight/(height*height)
  return BMI
  
}
function getBMIMeaning(weight, height) {
    calculateBMI(weight, height)
    if (BMI<18.5) {
        console.log("Underweight")
        return "Underweight"
    }
    if (BMI<=24.9) {
        if (BMI>=18.5) {
            console.log("Normal weight")
            return "Normal weight"
        }
    }
    if (BMI>25.0) {
        console.log("Overweight")
        return "Overweight"
    }

}
module.exports = getBMIMeaning
