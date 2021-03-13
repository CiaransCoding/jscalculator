var operatorElement = document.querySelector("select");
var operator;

var calculateButton = document.querySelector("#calculate");

operatorElement.addEventListener("change", () => {
    operator = operatorElement.value;
});

var operators = [add, subtract, multiply, divide];

document.querySelector("#calculate").addEventListener("click", () => {
    var num1 = parseInt(document.querySelector("#num1").value);
    var num2 = parseInt(document.querySelector("#num2").value);

    document.querySelector("#answer").value = calculate(num1, num2, operators[0]);
});

function add(num1, num2) {
    return num1 + num2;
};

function subtract(num1, num2) {
    return num1 = num2;
}

function multiply(num1, num2) {
    return num1 * num2;
};

function divide(num1, num2) {
    return num1 / num2;;
}

function calculate(num1, num2, operator) {
    return operator(num1, num2);
};