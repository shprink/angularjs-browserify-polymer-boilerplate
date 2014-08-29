'use strict';

var angular = require('angular');

require('angular-ui-router');

var app = angular.module('boilerplate', [
    'ui.router'
]);

// controllers
var HomeCtrl = require('./Controllers/Home');
var AdminCtrl = require('./Controllers/Admin');
app.controller('HomeCtrl', ['$scope', '$log', HomeCtrl]);
app.controller('AdminCtrl', ['$scope', '$log', AdminCtrl]);

// Services
var UserService = require('./Services/User');
app.service('UserService', ['$rootScope', '$log', UserService]);

// Config
var RouterConfig = require('./Config/Router');
app.config(['$stateProvider', '$urlRouterProvider', RouterConfig]);

app.run([function() {
        console.log('running');
    }]);


module.exports = app;