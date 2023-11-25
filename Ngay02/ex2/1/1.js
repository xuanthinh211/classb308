// Create a submit button
const btn = document.createElement('input');
btn.type = 'submit';
btn.value = 'Initial Text';

document.getElementById('buttonContainer').appendChild(btn);

// Change the text on the button after a short delay
setTimeout(() => {
    btn.value = 'Changed Text';
}, 2000); // 2000 milliseconds (2 seconds) delay
