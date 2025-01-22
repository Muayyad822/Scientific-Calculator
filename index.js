let display = document.querySelector("#display");

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = " ";
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Syntax Error";
    }
}

// Handle percentage and negation
function handleSpecialOperation(operation) {
    let value = parseFloat(display.value); // Get the current value as a number

    if (isNaN(value)) {
        display.value = "Error"; // Handle invalid input
        return;
    }

    switch (operation) {
        case "%":
            display.value = (value / 100).toString(); // Convert to percentage
            break;

        case "+/-":
            if (display.value.startsWith("-")) {
                display.value = display.value.slice(1); // Remove the negative sign
            } else {
                display.value = "-" + display.value; // Add a negative sign
            }
            break;


        default:
            display.value = "Error"; // For unexpected cases
    }
}

// Function to handle scientific operations
function calculateScientific(operation) {
    let input = parseFloat(display.value); // Get the input from the display

    if (isNaN(input)) {
        display.value = "Error"; // Handle invalid input
        return;
    }

    switch (operation) {
        case "sin":
            display.value = Math.sin(toRadians(input)).toFixed(5);
            break;
        case "cos":
            display.value = Math.cos(toRadians(input)).toFixed(5);
            break;
        case "tan":
            display.value = Math.tan(toRadians(input)).toFixed(5);
            break;
        case "log":
            display.value = Math.log10(input).toFixed(5); // Base-10 logarithm
            break;
        case "ln":
            display.value = Math.log(input).toFixed(5); // Natural logarithm
            break;
        case "sqrt":
            display.value = Math.sqrt(input).toFixed(5);
            break;
        case "exp":
            display.value = Math.exp(input).toFixed(5); // e^x
            break;
        case "abs":
            display.value = Math.abs(input).toFixed(5); // Absolute value
            break;
        default:
            display.value = "Invalid Operation";
    }
}

// Function to calculate power (x^y)
function appendToDisplay(input) {
    if (input === "^") {
        display.value += "**"; // Use `**` for exponentiation in JavaScript
    } else {
        display.value += input;
    }
}

// Calculate function to handle `^`
function calculate() {
    try {
        // Use `eval` to calculate the value, including exponentiation
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Syntax Error";
    }
}


// Helper function to convert degrees to radians
function toRadians(degrees) {
    return degrees * (Math.PI / 180);
}

// Scientific mode toggle
let isScientificMode = false; // Track the current mode

// Function to toggle modes
function toggleScientificMode() {
    const keysDiv = document.getElementById("keys");
    keysDiv.innerHTML = ""; // Clear existing buttons

    if (isScientificMode) {
        // Load basic buttons
        keysDiv.innerHTML = `
        <button onclick="clearDisplay()" class="white">C</button>
       <button onclick="handleSpecialOperation('+/-')" class="white">+/-</button>
       <button onclick="handleSpecialOperation('%')" class="white">%</button>
       <button onclick="appendToDisplay('/')" class="operator">/</button>
       <button onclick="appendToDisplay('7')">7</button>
       <button onclick="appendToDisplay('8')">8</button>
       <button onclick="appendToDisplay('9')">9</button>
       <button onclick="appendToDisplay('*')" class="operator">x</button>
       <button onclick="appendToDisplay('4')">4</button>
       <button onclick="appendToDisplay('5')">5</button>
       <button onclick="appendToDisplay('6')">6</button>
       <button onclick="appendToDisplay('-')" class="operator">-</button>
       <button onclick="appendToDisplay('1')">1</button>
       <button onclick="appendToDisplay('2')">2</button>
       <button onclick="appendToDisplay('3')">3</button>
       <button onclick="appendToDisplay('+')" class="operator">+</button>
       <button onclick="toggleScientificMode()" class="pad"><img src="calculator.png" alt="" style="filter: invert(1) brightness(2);" width="30px" ></button>
       <button onclick="appendToDisplay('0')" >0</button>
       <button onclick="appendToDisplay('.')" >.</button>
       <button onclick="calculate()" class="operator" class="pad">=</button>
        `;
    } else {
        // Load scientific buttons
        keysDiv.innerHTML = `
            <button onclick="clearDisplay()" class="white">C</button>
            <button onclick="calculateScientific('sin')" class="pad">sin</button>
            <button onclick="calculateScientific('cos')" class="pad">cos</button>
            <button onclick="appendToDisplay('/')" class="operator">/</button>
            <button onclick="calculateScientific('log')">log</button>
            <button onclick="calculateScientific('ln')">ln</button>
            <button onclick="calculateScientific('sqrt')">√</button>
            <button onclick="appendToDisplay('*')" class="operator">x</button>
            <button onclick="calculateScientific('abs')">|x|</button>
             <button onclick="appendToDisplay('^')">x<sup>y</sup></button>
            <button onclick="appendToDisplay('00')" class="pad">00</button>
            <button onclick="appendToDisplay('-')" class="operator">-</button>
            <button onclick="calculateScientific('exp')">e^</button>
            <button onclick="calculateScientific('tan')">tan</button>
            <button onclick="appendToDisplay('.')">.</button>
            <button onclick="appendToDisplay('+')" class="operator">+</button>
            <button onclick="toggleScientificMode()" class="pad"><img src="calculator.png" alt="" style="filter: invert(1) brightness(2);" width="30px" ></button>
            <button onclick="calculate()" class="operator">=</button>
             
        `;
    } 

    // Toggle the mode
    isScientificMode = !isScientificMode;
}
