const defaltResulit = 0
let currentResult = defaltResulit

currentResult = (currentResult+10) * 3 / 2 - 1 
let calculationDescription = `(${defaltResulit} + 10) * 3 / 2 - 1`
let errorMessage = "An error \n" +
"occurred!"
outputResult(currentResult, calculationDescription)