'use strict';

var LoginCtrl = function($scope, $log, $state) {
    $log.log('LoginCtrl');

    $scope.goToHome = function(){
        $state.go('root.home');
    }
};

module.exports = LoginCtrl;
