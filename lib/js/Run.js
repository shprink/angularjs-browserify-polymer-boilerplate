'use strict';

var Run = function($rootScope, $log, $materialSidenav) {
    $log.log('Running');

    $rootScope.toggleLeft = function() {
        $materialSidenav('left').toggle();
    };
};

module.exports = Run;