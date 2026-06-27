function validateForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const feedback = document.getElementById('feedback');

    feedback.textContent = '';

    if (!name) {
        feedback.textContent += 'Name is required.\n';
        return false;
    }

    if (!validateEmail(email)) {
        feedback.textContent += 'Please enter a valid email address.\n';
        return false;
    }

    if (!message) {
        feedback.textContent += 'Message cannot be empty.\n';
        return false;
    }

    feedback.textContent = 'Form submitted successfully!';
    return true;
}

function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    if (validateForm()) {
       
    }
});