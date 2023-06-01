
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

function calcOperator(operator){
    let enteredNum = parseInt(userInput.value);
    userInput.value = '';
    let iniNum = existNum;

    if (
        operator !== 'ADD' && 
        operator !=='SUB' &&
        operator !== 'MUL' &&
        operator !== 'DIV'
    ) {
        return;
    }
    
    if (operator == 'ADD'){
        existNum += enteredNum;     
        display('+', iniNum, enteredNum);  
        entry("ADD", enteredNum, existNum);

    }
    else if(operator == 'SUB'){
        existNum -= enteredNum;     
        display('-', iniNum, enteredNum);  
        entry("ADD", enteredNum, existNum);
    }
    else if(operator == 'MUL'){
        existNum *= enteredNum;     
        display('*', iniNum, enteredNum);  
        entry("ADD", enteredNum, existNum);
    }
    else if(operator == 'DIV'){
        existNum /= enteredNum;     
        display('/', iniNum, enteredNum);  
        entry("ADD", enteredNum, existNum);
    }
}

function add(){     
    calcOperator('ADD');  
        
}

function subtract(){
    calcOperator('SUB');
}

function multiply(){
    calcOperator('MUL');
} 

function divide(){
    calcOperator('DIV');
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
