document.getElementById('signupForm').addEventListener('submit', function(e) {
    let valid = true;

    // Validate username
    const username = document.getElementById('username').value;
    if (username.length < 3) {
        valid = false;
        document.getElementById('usernameError').textContent = "Username must be at least 3 characters long.";
    } else {
        document.getElementById('usernameError').textContent = "";
    }

    // Validate email
    const email = document.getElementById('email').value;
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        valid = false;
        document.getElementById('emailError').textContent = "Invalid email address.";
    } else {
        document.getElementById('emailError').textContent = "";
    }

    // Validate password
    const password = document.getElementById('password').value;
    if (password.length < 6) {
        valid = false;
        document.getElementById('passwordError').textContent = "Password must be at least 6 characters.";
    } else {
        document.getElementById('passwordError').textContent = "";
    }

    if (!valid) e.preventDefault();
});