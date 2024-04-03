(function (window) {
    'use strict';

    var App = window.App;
    var UserManager = App.UserManager;
    var usermanager = new UserManager();

    const submitBtn = document.querySelector("#submitBtn");
    submitBtn.addEventListener("click", async () => {
        
        try {
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;
            const abc = await usermanager.login(email, password);
            window.location.href = "index.html";
        } catch (error) {
            alert(error);
        }
    });
})(window);
