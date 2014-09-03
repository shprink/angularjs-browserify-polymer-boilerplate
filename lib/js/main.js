'use strict';

var angular = require('angular');

require('angular-ui-router');
require('angular-material');
require('angular-animate');

var app = angular.module('boilerplate', [
    'ui.router'
            , 'ngAnimate'
            , 'ngMaterial'
]);

// controllers
app.controller('HomeCtrl', ['$scope', '$log', require('./Controllers/Home')]);
app.controller('AdminCtrl', ['$scope', '$log', require('./Controllers/Admin')]);

// Services
app.service('UserService', ['$rootScope', '$log', require('./Services/User')]);

// Config
app.config(['$stateProvider', '$urlRouterProvider', require('./Config/Router')]);

// Run
app.run(['$rootScope', '$log', '$materialSidenav', require('./Run')]);

module.exports = app;