
let buttons = document.querySelectorAll('button');
let input = document.getElementById('inputBox');
let string = "";

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const buttonText = e.target.innerHTML;
        performCalculation(buttonText);
    });
});

input.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        performCalculation(input.value);
    }
});

function performCalculation(value) {
    if (value === '=') {
        try {
            string = eval(string);
            input.value = string;
        } catch (error) {
            input.value = 'Error';
            string = '';
        }
    } else if (value === 'AC') {
        string = '';
        input.value = string;
    } else if (value === 'DEL') {
        string = string.substring(0, string.length - 1);
        input.value = string;
    } else {
        string += value;
        input.value = string;
    }
