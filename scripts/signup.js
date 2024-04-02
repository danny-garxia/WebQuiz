function addData() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('pwd').value;

    localStorage.setItem('userName', name);
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPwd', password);

    // Redirect to login page after storing the data
    window.location.href = 'login.html';
}
