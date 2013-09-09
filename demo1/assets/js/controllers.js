'use strict';

function Ctrl1($scope) {
	$scope.name = 'AngularJs';
}

function PhoneListCtrl($scope, Phone) {
    $scope.phones = Phone.query();

    $scope.ordenarPor = "age";
}

function PhoneDetailCtrl($scope, $routeParams, Phone) {

    $scope.phone = Phone.get({phoneId: $routeParams.phoneId},
            function(phone) {
                $scope.phoneMainImg = phone.images[0];
            }
        );
    
    $scope.setImage = function(imageUrl) {
        $scope.phoneMainImg = imageUrl;
    };
}