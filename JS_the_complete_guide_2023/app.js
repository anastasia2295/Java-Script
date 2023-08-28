const defaltResulit = 0
let currentResult = defaltResulit
let logEntries = []

function getUserNumberInput (){
    return parseInt(usrInput.value)
}
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber){
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`
    outputResult(currentResult, calcDescription)
}

function add(){
    const enteredNumber = getUserNumberInput()
    const initialResult = currentResult
    currentResult += enteredNumber
    createAndWriteOutput("+", initialResult, enteredNumber)
    logEntries.push(enteredNumber)
    console.log(logEntries)
}

function subtract () {
    const enteredNumber = getUserNumberInput()
    const initialResult = currentResult
    currentResult -= enteredNumber
    createAndWriteOutput("-", initialResult, enteredNumber)
}

function multiply() {
    const enteredNumber = getUserNumberInput()
    const initialResult = currentResult
    currentResult *= enteredNumber
    createAndWriteOutput("*", initialResult, enteredNumber)
}

function divide(){
    const enteredNumber = getUserNumberInput()
    const initialResult = currentResult
    currentResult /= enteredNumber
    createAndWriteOutput("/", initialResult, enteredNumber)
}
addBtn.addEventListener("click", add)
subtractBtn.addEventListener("click", subtract)
multiplyBtn.addEventListener("click", multiply)
divideBtn.addEventListener("click", divide)