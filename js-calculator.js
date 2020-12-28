"use strict"


// Reference:  https://freshman.tech/calculator/
// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects

//#####################  Building A Calculator  #######################################################################################

// -First we are creating an object (calculator) to keep track of the
//  values of the first operand, operator, and
//  second operand of our arithmetic expressions.
// -In this case we are using an object initializer (curly brackets)
//  to to write our object and assign its properties.

const calculator = {
    displayValue: "0", // -This is what will be displayed on the screen.
    firstOperand: null, // -Stores the first operand of any expression.
    waitingForSecondOperand: false, // -Checks if the first operand and
                                    //  the operator have been entered. If
                                    //  true, the next input will be
                                    //  considered the second operand.
    operator: null, // -Stores the operator for an expression.
};

//******* Input the Digits *****************************************************

// (?) ternary operator is used to check if the current value displayed on the calculator is 0.
// If so, calculator.displayValue is overwritten with whatever digit was clicked. Otherwise, if
// displayValue is a non-zero number, the digit is appended to it through string concatenation.

function inputDigit(digit) {
    const {displayValue } = calculator;
    calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
}
//******* Input a Decimal Point ************************************************

function inputDecimal(dot) {
    // If the `displayValue` property does not contain a decimal point
    if (!calculator.displayValue.includes(dot)) {
        // Append the decimal point
        calculator.displayValue += dot; // (+=) adds the value of the right operand to a
                                        // variable and assigns the result to the variable.
    }
}

//******* Updating the Display *************************************************

// -We need the contents of displayValue to be shown at all times. So we
//  must create a function that updates the screen with the values of displayValue
//  every time an operation is performed.
// - document.querySelector(selectors); -- The Document method querySelector() returns
//   the first Element within the document (html page) that matches the specified selector,
//   or group of selectors. If no matches are found, null is returned.

function updateDisplay() {
    // Select the element with the class of 'calculator-screen'
    const display = document.querySelector('.calculator-screen');
    // update the value of the element with the contents of 'displayValue'
    display.value = calculator.displayValue;
}

updateDisplay();

//******* Handling Key Presses ***************************************************************

// -The four sets of keys on the calculator are: digits (1-9), operators (+, -, *, /, =),
//  the decimal point(.) and a reset key (AC).
// -arrow functions (=>) allow for shorter function syntax
// -.addEventListener -The EventTarget method addEventListener() sets up a function
//  that will be called whenever the specified event is delivered to the target.

const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
    // Listening for a click event
    // Access the clicked element
    const { target } = event; // This is the callback function of the event listener.
    // The target variable is an object that represents the element that was clicked.
    // Check if the clicked element is a button.
    // If not, exit from the function
    if (!target.matches('button')) {
        return;
    }

    if (target.classList.contains('operator')) {
        console.log('operator', target.value);
        return;
    }

    if (target.classList.contains('decimal')) {
        console.log('decimal', target.value);
        return;
    }
    if (target.classList.contains('all-clear')) {
        console.log('clear', target.value);
        return;
    }

    inputDigit(target.value);
    updateDisplay();
});

