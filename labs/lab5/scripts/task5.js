let display = '';

function appendToDisplay(value) {
    display += value;
    document.getElementById('display').value = display;
}

function clearDisplay() {
    display = '';
    document.getElementById('display').value = display;
}

function calculate() {
    try {
        let result;
        if (display.includes('^')) {
            let [base, exponent] = display.split('^');
            result = Math.pow(parseFloat(base), parseFloat(exponent));
        } else {
            // Replace % with /100* for percentage calculations
            let expression = display.replace(/%/g, '/100*');
            result = eval(expression);
        }
        display = result.toString();
        document.getElementById('display').value = display;
    } catch (error) {
        display = 'Error';
        document.getElementById('display').value = display;
    }
}

function squareRoot() {
    try {
        const number = parseFloat(display);
        if (number < 0) {
            throw new Error('Cannot calculate square root of negative number');
        }
        display = Math.sqrt(number).toString();
        document.getElementById('display').value = display;
    } catch (error) {
        display = 'Error';
        document.getElementById('display').value = display;
    }
} 