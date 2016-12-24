(function () {
"use strict";

angular.module('newsletter')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['UserService'];
function MyInfoController(UserService) {
	var $ctrl = this;
	$ctrl.userInfo = UserService.getUserInfo();
}

})();