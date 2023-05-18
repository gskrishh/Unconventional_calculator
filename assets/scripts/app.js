
const defalutNum = 0;
let existNum = defalutNum;
let logEntries = [];

function display(operator, befcal, aftcal){
    const displayText = ` ${befcal} ${operator} ${aftcal}`;
    outputResult(existNum, displayText);
}

function entry(operator, befNum, reNum){

    const log = {
        operation : operator,
        number : befNum,
        result : reNum
    };
    logEntries.push(log);
    console.log(logEntries);
}

function add(){
    let enteredNum = parseInt(userInput.value);
    let iniNum = existNum;
    existNum += enteredNum;     
    display('+', iniNum, enteredNum);
    entry("ADD", enteredNum, existNum);    
}


function subtract(){
    let enteredNum = parseInt(userInput.value);
    let iniNum = existNum;
    existNum -= enteredNum;
    display("-", iniNum, enteredNum);
    entry("SUB", enteredNum, existNum);
}

function multiply(){
    let enteredNum = parseInt(userInput.value);
    let iniNum = existNum;
    existNum *= enteredNum;     
    display("*", iniNum, enteredNum);    
    entry("MUL", enteredNum, existNum);
} 

function divide(){
    let enteredNum = parseInt(userInput.value);
    let iniNum = existNum;
    existNum /= enteredNum;
    display("/", iniNum, enteredNum);
    entry("DIV", enteredNum, existNum);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);