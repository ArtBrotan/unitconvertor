const conversionEquations = [3.2808, 0.3048, 0.264172, 3.78541, 2.20462, 0.453592]
const input = document.getElementById("input")
const convertBtn = document.getElementById("convert-btn")
const metersFeet = document.getElementById("meter-feet")
const litersGallons = document.getElementById("liters-gallons")
const kilogramsPounds = document.getElementById("kilograms-pounds")

convertBtn.addEventListener("click", function() {
    const inputedNum = input.value
    const answer = convertUnits(inputedNum)
    console.log(answer)
})

function convertUnits(unit) {
    let conversionAnswers = []
    for (let i = 0; i < conversionEquations.length; i++) {
        let convertedUnit = unit * conversionEquations[i]
        conversionAnswers.push(convertedUnit.toFixed(3))
    }
    metersFeet.textContent = `${unit} meters = ${conversionAnswers[0]} | ${unit} feet = ${conversionAnswers[1]}`
    litersGallons.textContent = `${unit} liters = ${conversionAnswers[2]} | ${unit} gallons = ${conversionAnswers[3]}`
    kilogramsPounds.textContent = `${unit} kilograms = ${conversionAnswers[4]} | ${unit} pounds = ${conversionAnswers[5]}`
}