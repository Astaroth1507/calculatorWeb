let displayValue = "";

function setup() {
    noCanvas();
    let displayInput = select('#display');
    displayInput.input(updateDisplay);
}

function updateDisplay() {
    displayValue = this.value();
}

function keyPressed() {
    if (keyCode === ENTER) {
        calculate();
    } else {
        const allowedKeys = "0123456789+-*/().";
        const key = key.toLowerCase();

        if (allowedKeys.includes(key)) {
            appendToDisplay(key);
        }
    }
}

function appendToDisplay(value) {
    displayValue += value;
    select("#display").value(displayValue);
}

function calculate() {
    try {
        const result = eval(displayValue);
        select("#display").value(result);
        displayValue = result.toString();
    } catch (error) {
        select("#display").value("");
    }
}

function clearDisplay() {
    displayValue = "";
    select("#display").value("");
}

function login() {
    const username = select("#username").value();
    const password = select("#password").value();
    const loginForm = select("#login-form");
    const calculator = select("#calculator");

    if (username === "usuario" && password === "contrasena") {
        loginForm.style('display', 'none');
        calculator.style('display', 'block');
    } else {
        alert("Credenciales incorrectas. Inténtalo de nuevo.");
    }
}