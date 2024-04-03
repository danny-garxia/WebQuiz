function validateLogin() {
    var enteredEmail = document.getElementById('email').value;
    var enteredPassword = document.getElementById('password').value;

    var storedEmail = localStorage.getItem('userEmail');
    var storedPassword = localStorage.getItem('userPwd');

    if (enteredEmail === storedEmail && enteredPassword === storedPassword) {
        alert('Login successful!');
        window.location.href = 'index.html'; // Redirects to index.html upon successful login
    } else {
        alert('Incorrect email or password.');
    }
}
