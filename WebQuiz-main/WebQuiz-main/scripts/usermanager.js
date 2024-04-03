(function (window) {
    'use strict';

    var App = window.App || {};
    var Promise = window.Promise;

    function UserManager() {
        this.users = {}; // Store users' information
        this.loggedInUser = null; // Track the logged-in user
    }

    UserManager.prototype.register = function (username, password) {

    };

    UserManager.prototype.login = function (username, password) {

    };

    App.UserManager = UserManager;
    window.App = App;
})(window);
