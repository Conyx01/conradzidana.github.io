document.getElementById('submitButton').addEventListener('click', function() {
    // Capture form data
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var message = document.getElementById('message').value;

    // Perform basic form validation
    if (!name || !email || !phone || !message) {
        alert('Please fill out all fields.');
        return;
    }

    // Create form data object
    var formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('message', message);

    // Make POST request to your server
    fetch('/submit-form', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (response.ok) {
            return response.text();
        } else {
            throw new Error('Error sending form data.');
        }
    })
    .then(data => {
        // Handle successful form submission
        alert('Form submission successful!');
        // Optionally, reset form fields
        document.getElementById('contactForm').reset();
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('phone').value = '';
        document.getElementById('message').value = '';
    })
    .catch(error => {
        // Handle error
        console.error('Error:', error);
        alert('Error sending form data. Please try again later.');
    });
});
