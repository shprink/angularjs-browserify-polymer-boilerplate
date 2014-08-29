'use strict';

var UserService = function($rootScope, $log) {
    $log.log('UserService');
    this.getUser = function() {
        return {};
    };
};

module.exports = UserService;