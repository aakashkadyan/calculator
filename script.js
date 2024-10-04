let numValue = document.querySelectorAll('.mybtn');  
let resultField = document.getElementById('result');  
let equal = document.querySelector('.equals');  
let currentExpression = '';  // Variable to hold the expression
let operations = document.querySelectorAll('.operation');  

// Add event listeners to number buttons and basic operators
numValue.forEach(element => {
    element.addEventListener('click', () => {
        if (element.value === 'c') {  // Clear if 'c' is clicked
            currentExpression = '';
            resultField.value = '';
        } else if (!isNaN(element.value) || element.value === '.') {  // Only append if it's a number or decimal
            currentExpression += element.value;
            resultField.value = currentExpression;  // Update the display
        }
    });
});

// Add event listeners to operation buttons
operations.forEach(button => {
    button.addEventListener('click', () => {
        if (button.value === '√') {  // Square root operation
            currentExpression = Math.sqrt(parseFloat(resultField.value));  // Calculate the square root
            resultField.value = currentExpression;  // Display the result
        } else if (button.value === 'x²') {  // Square operation
            currentExpression = Math.pow(parseFloat(resultField.value), 2);  // Square the current value
            resultField.value = currentExpression;  // Display the result
        } else if (button.value !== '=' && button.value !== 'c') {
            currentExpression += ` ${button.value} `;  // Add the operator to the expression
            resultField.value = currentExpression;  // Update the display
        }
    });
});

// Handle equals button click (for evaluating the expression)
equal.addEventListener('click', () => {
    try {
        let result = eval(currentExpression);  // Evaluate the expression
        resultField.value = result;  // Display the result
        currentExpression = result;  // Store the result for further calculations
    } catch (error) {
        resultField.value = 'Error';  // Handle invalid expressions
    }
});
