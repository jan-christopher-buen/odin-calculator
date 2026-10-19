function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}

let firstNumber = "";
let operator = "";
let secondNumber = "";

function operate(operator, a, b) {
    if (operator === "+") {
        return add(a, b);
    } else if (operator === "-") {
        return subtract(a, b);
    } else if (operator === "*") {
        return multiply(a, b);
    } else if (operator === "/") {
        return divide(a, b);
    }
}

const display = document.querySelector("#display");
const digitButtons = document.querySelectorAll(".digit");
const clearButton = document.querySelector("#clear");

function updateDisplay(value) {
    display.textContent = value;
}

digitButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const digit = button.textContent;

        if (operator === "") {
            firstNumber = firstNumber + digit;
            updateDisplay(firstNumber);
        } else {
            secondNumber = secondNumber + digit;
            updateDisplay(secondNumber);
        }
    });
});

clearButton.addEventListener("click", () => {
    firstNumber = "";
    operator = "";
    secondNumber = "";
    updateDisplay("0");
});

updateDisplay("0");