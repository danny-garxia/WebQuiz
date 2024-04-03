function loadUserAccountArea() {
	fetch('components/loginarea.html')
		.then(response => response.text())
		.then(html => {
			document.getElementById('UserAccountArea').innerHTML = html;
	});
}

function loadNavBar() {
	fetch('components/navbar.html')
		.then(response => response.text())
		.then(html => {
				document.getElementById('NavBar').innerHTML = html;
		}).then(()=>{
			loadUserAccountArea()
	});
}

function loadHomePage() {
	fetch('pages/home.html')
		.then(response => response.text())
		.then(html => {
				document.getElementById('ContentArea').innerHTML = html;
		}).then(()=>{
			loadUserAccountArea()
	});
}

(function (window) {
		'use strict';

		var USER_ACCOUNT_SELECTOR = '.UserAccount';

		var App = window.App;
		var UserManager = App.UserManager;

		$(document).ready(function () {
			loadNavBar();
			loadHomePage();
		});
		
		// var elem = document.querySelector(USER_ACCOUNT_SELECTOR);
		// // elem.innerHTML = "login | signup";
})(window);
