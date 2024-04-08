(function (window) {
	'use strict';

	var App = window.App || {};
	const LOCAL_DB_NAME = "userDB";

	function UserManager() {
		this.users = new Map(); // Store users' information
		this.loadData();

		// logged-in user
		this.loggedInUserFullname = localStorage.getItem("userFullname");
		this.loggedInUserEmail = localStorage.getItem("userEmail");
	}

	UserManager.prototype.register = function (name, email, password) {
		validate(name, email, password);

		if (this.users.has(email)) {
			throw new Error("The username already exists in the database.");
		}

		// Hash the password, and store to local
		hashPassword(password).then((hashedPassword) => {
			this.users.set(email, {password: hashedPassword, name:name});
			this.saveData();
		});
	};

	UserManager.prototype.login = async function (email, password) {
		if (!this.users.has(email)) {
			throw new Error("The username or password is wrong.");
		}

		// Hash the password, and store to local
		await hashPassword(password).then((hashedPassword) => {
			const storedPassword = this.users.get(email)["password"];

			if (storedPassword != hashedPassword) {
				throw new Error("The username or password is wrong.");
			}

			// Persist logged in user info
			this.loggedInUserFullname = this.users.get(email)["name"];
			this.loggedInUserEmail = email;
			localStorage.setItem("userFullname", this.loggedInUserFullname);
			localStorage.setItem("userEmail", this.loggedInUserEmail);			
		});
	};

	UserManager.prototype.logout = function () {
		console.log("Logout");
		localStorage.removeItem("userEmail");
		localStorage.removeItem("userFullname");
	};

	UserManager.prototype.getLoggedInUser = function () {
		return {
			email: this.loggedInUserEmail,
			name: this.loggedInUserFullname
		};
	};

	UserManager.prototype.isLoggedIn = function () {
		return this.loggedInUserEmail != null;
	};

	UserManager.prototype.loadData = function () {
		// Retrieve the JSON string from localStorage
		const storedMapJSON = localStorage.getItem(LOCAL_DB_NAME);

		// Check if data exists in localStorage
		if (storedMapJSON) {
			// Parse the JSON string and convert it back to a Map
			this.users = new Map(JSON.parse(storedMapJSON));
		}
	}

	UserManager.prototype.saveData = function () { // Serialize the Map object to JSON string
		const mapJSON = JSON.stringify(Array.from(this.users.entries()));

		// Store the JSON string in localStorage
		localStorage.setItem(LOCAL_DB_NAME, mapJSON);
	}

	UserManager.prototype.resetDB = function () {
		// Retrieve the JSON string from localStorage
		localStorage.removeItem(LOCAL_DB_NAME);
	}

	function validate(name, email, password) { 
		
		// Regular expression for email validation
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (! emailRegex.test(email)) {
			throw new Error("Email is invalid");
		}

		if (name.length == 0) {
			throw new Error("Name cannot be blank.");
		}

		if (password.length == 0) {
			throw new Error("password cannot be blank.");
		}
	}

	async function hashPassword(password) {
		return "hashed_" + password;
		// const encoder = new TextEncoder();
		// const data = encoder.encode(password);
		// const hashBuffer = await crypto.subtle.digest('SHA-256', data);
		// const hashArray = Array.from(new Uint8Array(hashBuffer));
		// const hashedPassword = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
		// return hashedPassword;
	}

	App.UserManager = UserManager;
	window.App = App;
})(window);
