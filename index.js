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
    var answer = document.querySelector("#answer");
    var func;

    switch (operator) {
        case "add":
            func = add;
            break;
        case "subtract":
            func = subtract;
            break;
        case "multiply":
            func = multiply;
            break;
        case "divide":
            func = divide;
            break;
        default:
            break;
    };

    console.log(func);

    answer.value = calculate(num1, num2, func);
});

function add(num1, num2) {
    return num1 + num2;
};

function subtract(num1, num2) {
    return num1 - num2;
};

function multiply(num1, num2) {
    return num1 * num2;
};

function divide(num1, num2) {
    return num1 / num2;;
};

function calculate(num1, num2, operator) {
    return operator(num1, num2);
};