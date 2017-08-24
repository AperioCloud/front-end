// controller.js
angular
.module('app')
.controller('LoginCtrl', ['$scope', '$http',  function($scope, $http,particlejs) {
    console.log("Hello World from controller");

particlesJS.load('particles-js', 'assets/particles.json', function() {
  console.log('callback - particles.js config loaded');
})

}]);﻿

