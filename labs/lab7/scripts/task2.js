document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggleButton2');
    const inputField = document.getElementById('inputField2');

    toggleButton.addEventListener('click', () => {
        if (inputField.type === 'password') {
            inputField.type = 'text';
            toggleButton.textContent = 'Приховати';
        } else {
            inputField.type = 'password';
            toggleButton.textContent = 'Розкрити';
        }
    });
});