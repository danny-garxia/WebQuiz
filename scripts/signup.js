(function (window) {
    'use strict';

    var App = window.App;
    var UserManager = App.UserManager;
    var usermanager = new UserManager();

    const submitBtn = document.querySelector("#submitBtn");
    submitBtn.addEventListener("click", () => {
        
        try {
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;
            usermanager.register(name, email, password);
            window.location.href = "login.html";
        } catch (error) {
            alert(error);
        }
    });
})(window);