function submitLogin(event) {
    event.preventDefault(); // Prevent the default form submission

    // Gather input data
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Validate input data
    if (!username || !password) {
        alert('Please enter both username and password.');
        return;
    }

    // Send data to the server for authentication
    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // Handle successful login
            window.location.href = '/dashboard';
        } else {
            // Handle login failure
            alert('Login failed: ' + data.message);
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    });
}