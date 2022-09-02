/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
let ConvertBtn = document.getElementById("convert-btn")
let inputValue = document.getElementById("input-value")
let lengthEL = document.getElementById("length-el")
let gallonsEL = document.getElementById("liters-el")
let poundsEL = document.getElementById("pounds-el")

const metertoFeet = 3.281
const litertoGallon = 0.264
const kilotoPound = 2.204

ConvertBtn.addEventListener("click", function() {
    let inputVal = inputValue.value    
    
    lengthEL.textContent = `${inputVal} meters = ${inputVal * metertoFeet} feet `
    gallonsEL.textContent = `${inputVal} liters = ${inputVal * litertoGallon} gallons`
    poundsEL.textContent =  `${inputVal} kilos = ${inputVal * litertoGallon} pounds`
    
})