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

let justCalculated = false;

const display = document.querySelector("#display");
const digitButtons = document.querySelectorAll(".digit");
const operatorButtons = document.querySelectorAll(".operator");
const equalsButton = document.querySelector("#equals");
const clearButton = document.querySelector("#clear");

function updateDisplay(value) {
    display.textContent = value;
}

function resetCalculator() {
    firstNumber = "";
    operator = "";
    secondNumber = "";
    justCalculated = false;
}

function calculate() {
    if (firstNumber === "" || operator === "" || secondNumber === "") {
        return;
    }

    if (operator === "/" && Number(secondNumber) === 0) {
        resetCalculator();
        updateDisplay("Nice try 😏");
        return;
    }

    const result = operate(operator, Number(firstNumber), Number(secondNumber));
    const rounded = Math.round(result * 1000) / 1000;

    updateDisplay(rounded);
    firstNumber = String(rounded);
    operator = "";
    secondNumber = "";
    justCalculated = true;
}

digitButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const digit = button.textContent;

        if (justCalculated && operator === "") {
            firstNumber = "";
            justCalculated = false;
        }

        if (operator === "") {
            firstNumber = firstNumber + digit;
            updateDisplay(firstNumber);
        } else {
            secondNumber = secondNumber + digit;
            updateDisplay(secondNumber);
        }
    });
});

operatorButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if (firstNumber === "") {
            return;
        }

        if (secondNumber !== "") {
            calculate();
        }

        operator = button.textContent;
        justCalculated = false;
    });
});

equalsButton.addEventListener("click", calculate);

clearButton.addEventListener("click", () => {
    resetCalculator();
    updateDisplay("0");
});

updateDisplay("0");