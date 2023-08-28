const defaltResulit = 0
let currentResult = defaltResulit

function add(num1, num2){
    const result = num1+num2
    return result
}
const additionResult = add(1, 2)

currentResult = additionResult
let calculationDescription = `(${defaltResulit} + 10) * 3 / 2 - 1`
let errorMessage = "An error \n" +
"occurred!"
outputResult(currentResult, calculationDescription)