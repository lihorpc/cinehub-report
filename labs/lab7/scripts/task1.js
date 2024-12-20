document.addEventListener('DOMContentLoaded', () => {
    const showButton = document.getElementById('showButton');
    const inputField = document.getElementById('inputField');

    showButton.addEventListener('click', () => {
        console.log(inputField.value);
    });
});