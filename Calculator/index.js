const operand1Element = document.getElementById('operand1');
const operatorElement = document.getElementById('operator');
const operand2Element = document.getElementById('operand2');
const resultElement = document.getElementById('result');
const addElement = document.getElementById('add');
const subElement = document.getElementById('sub');
const multiplyElement = document.getElementById('mul');
const divideElement = document.getElementById('div');
const modulusElement = document.getElementById('mod');
const equalsElement = document.getElementById('equals');

let num1, num2, operator, res;
function calc(){
    num1 = Number(operand1Element.value);
    num2 = Number(operand2Element.value);
    switch(operator){
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        case '%':
            return num1 % num2;
        default:
            break;                      
    }
}

operand1Element.addEventListener("input", function() {
    // Remove non-numeric characters using a regular expression
    this.value = this.value.replace(/[^0-9]/g, '');
});
operand2Element.addEventListener("input", function() {
    // Remove non-numeric characters using a regular expression
    this.value = this.value.replace(/[^0-9]/g, '');
});

addElement.addEventListener('click', 
    function() {
        operator = '+';
        operatorElement.innerText = operator;
    }
);
subElement.addEventListener('click', 
    function() {
        operator = '-';
        operatorElement.innerText = operator;
    }
);
multiplyElement.addEventListener('click', 
    function() {
        operator = '*';
        operatorElement.innerText = operator;
    }
);
divideElement.addEventListener('click', 
    function() {
        operator = '/';
        operatorElement.innerText = operator;
    }
);
modulusElement.addEventListener('click', 
    function() {
        operator = '%';
        operatorElement.innerText = operator;
    }
);

equalsElement.addEventListener('click',
    function(){
        if(operand1Element.value != "" && operand2Element.value != "" && operatorElement.innerText != ""){
            res = calc();
            resultElement.innerHTML = num1 + " " + operator + " " + num2 + " = " + res;
            operand1Element.value = "";
            operand2Element.value = "";
            operatorElement.innerText = "";
        }
        
    }
);
