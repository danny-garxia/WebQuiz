/**
 * Loads HTML content from a file and inserts it into the specified target element.
 * @param {string} filename - The name or URL of the file containing the HTML content to load.
 * @param {string} target - The ID of the target element where the loaded HTML content will be inserted.
 */
function loadComponent(filename, target) {
	var promise = fetch(filename)
		.then(response => response.text())
		.then(html => {
			document.getElementById(target).innerHTML = html;
	});

	return promise;
}

(function (window) {
	'use strict';

	var App = window.App;
	var UserManager = App.UserManager;
	var usermanager = new UserManager();
	console.log("Logged in user")
	console.log(usermanager.getLoggedInUser());
	console.log(usermanager.isLoggedIn());

	loadComponent("components/navbar.html", "NavBar").then(()=>{
		if (usermanager.isLoggedIn()) {
			loadComponent("components/userprofilemenu.html", "UserAccountArea").then(()=> {
				$("#LogoutButton").on("click", () => {
					usermanager.logout();
					window.location.reload();
				});

				const user = usermanager.getLoggedInUser();
				$("#UserFullname").html(user["name"]);
			});
			
		} else {
			loadComponent("components/loginarea.html", "UserAccountArea");
		}
		
	});

	loadComponent("pages/home.html", "ContentArea");
})(window);
