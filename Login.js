document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple client-side validation
    if (username === '' || password === '') {
        displayError('Please fill out all fields.');
    } else if (username !== 'admin' || password !== 'password') {
        alert('Invalid username or password.');
    } else {
        // Redirect to another page or perform login logic
        window.location.href = 'home.html';
    }
});

function displayError(message) {
    const errorMessage = document.getElementById('error-message');
    errorMessage.textContent = message;
}
