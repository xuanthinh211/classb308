// Create a form
const form = document.createElement('form');

// Create a submit button and set its initial value
const btn = document.createElement('input');
btn.type = 'submit';
btn.value = 'Initial Text';

// Function to change the text on the button
function changeButtonText() {
    btn.value = 'Changed Text';
}

// Function to display the submit button's value
function showSubmitValue() {
    alert('Submit button value: ' + btn.value);
}

// Append the button to the form
form.appendChild(btn);

// Append the form to the form container
document.getElementById('formContainer').appendChild(form);

// Change the text on the button after a short delay
setTimeout(changeButtonText, 2000); // 2 seconds delay