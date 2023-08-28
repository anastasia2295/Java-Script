const defaltResulit = 0
let currentResult = defaltResulit

function add(){
    currentResult =  currentResult + parseInt(userInput.value)
    outputResult(currentResult, "")
}

addBtn.addEventListener("click", add)




