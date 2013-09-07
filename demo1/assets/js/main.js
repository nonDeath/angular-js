function Ctrl1($scope) {
	$scope.name = 'AngularJs';
}

function PhoneListCtrl($scope) {
    console.log($scope);
    $scope.phones = [
        {
            "name": "Nexus S",
            "snippet": "Fast just got faster with Nexus S.",
            "img": "motorola-xoom.2.jpg"
        },
        {
            "name": "Motorola XOOM™ with Wi-Fi",
            "snippet": "The Next, Next Generation tablet.",
            "img": "motorola-xoom.2.jpg"
        },
        {
            "name": "MOTOROLA XOOM™",
            "snippet": "The Next, Next Generation tablet.",
            "img": "motorola-xoom.2.jpg"    
        }
    ];
}