'use strict';

function Ctrl1($scope) {
	$scope.name = 'AngularJs';
}

function PhoneListCtrl($scope, $http) {

    $http.get('phones/phones.json').
        success(
            function(data) {
                $scope.phones = data.splice(0, 4);
            }
        );

    $scope.ordenarPor = "age";
}

function PhoneDetailCtrl($scope, $routeParams, $http) {
    $http.get('phones/' + $routeParams.phoneId + '.json').
        success(function(data) {
            $scope.phone = data;
        });
}