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

//******* Updating the Display *************************************************

// -We need the contents of displayValue to be shown at all times. So we
//  must create a function that updates the screen with the values of displayValue
//  every time an operation is performed.
// - document.querySelector(selectors); -- The Document method querySelector() returns
//   the first Element within the document that matches the specified selector,
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

const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) =>{})

