'use strict';

var RouterConfig = function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('login', {
            url: "/login",
            views: {
                "scaffolding": {
                    templateUrl: 'views/Login/content.html',
                    controller: 'LoginCtrl'
                }
            }
        })
        .state('root', {
            url: '',
            abstract: true,
            views: {
                "scaffolding": {
                    templateUrl: 'views/scaffolding.html'
                },
                "menu@root": {
                    templateUrl: 'views/menu.html'
                },
                "header@root": {
                    templateUrl: 'views/header.html'
                }
            }
        })
        .state('root.home', {
            url: "/home",
            views: {
                "content@root": {
                    templateUrl: 'views/Home/content.html',
                    controller: 'HomeCtrl'
                }
            }
        })
        .state('root.module', {
            url: "/module",
            views: {
                "content@root": {
                    templateUrl: 'views/Modules/home.html',
                    controller: 'ModuleCtrl'
                }
            }
        })
        .state('root.module.user', {
            url: "/user",
            views: {
                "content@root": {
                    templateUrl: 'views/Modules/User/content.html',
                    controller: 'ModuleUserCtrl'
                }
            }
        })
        .state('root.admin', {
            url: "/admin",
            views: {
                "content@root": {
                    templateUrl: 'views/Admin/home.html',
                    controller: 'AdminCtrl'
                }
            }
        })
        .state('root.admin.user', {
            url: "/user",
            views: {
                "content@root": {
                    templateUrl: 'views/Admin/User/content.html',
                    controller: 'AdminUserCtrl'
                }
            }
        });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/login');
};

module.exports = RouterConfig;
