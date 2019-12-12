var close = document.getElementById('close');
var rules_window = document.getElementById('rules');

var open = document.getElementById('rules-button');

close.addEventListener('click', () => {
    rules_window.style.display = 'none';
})

open.addEventListener('click', () => {
    rules_window.style.display = 'block';
})