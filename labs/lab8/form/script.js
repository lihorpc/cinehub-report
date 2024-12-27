const formData = {
    email: "",
    message: ""
};

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.feedback-form');
    
    const savedData = localStorage.getItem('feedback-form-state');
    if (savedData) {
        const parsedData = JSON.parse(savedData);
        formData.email = parsedData.email;
        formData.message = parsedData.message;
        
        form.elements.email.value = formData.email;
        form.elements.message.value = formData.message;
    }

    form.addEventListener('input', (e) => {
        const { name, value } = e.target;
        formData[name] = value.trim();
        localStorage.setItem('feedback-form-state', JSON.stringify(formData));
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        if (!formData.email || !formData.message) {
            alert('Fill please all fields');
            return;
        }

        console.log(formData);
        localStorage.removeItem('feedback-form-state');
        form.reset();
        formData.email = "";
        formData.message = "";
    });
}); 