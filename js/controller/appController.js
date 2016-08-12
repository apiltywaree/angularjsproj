angular.module('app').controller('appCtrl', ['$scope', function ($scope) {
    alert("this is inside appCltrl");
    // $scope.person = {
    //     'firstName': 'mark',
    //     'lastName': 'empty',
    //     'address': '3002 dkjkdjkfjasd',
    //     'phoneNo': '46543564563'
    // }
    var userType = {
        'admin': 1,
        'user': 2
    }
    $scope.genders = ['male', 'female', 'other'];
    $scope.marriage = ['single', 'married', 'other'];
    $scope.user = userType.admin;
    // $scope.display = false;
    //
    // var checkAdmin = function () {
    //     if ($scope.user == userType.admin) {
    //         $scope.display = true;
    //         alert(true);
    //     }
    //     else {
    //         $scope.display = false;
    //     }
    // }
    // checkAdmin();
    $scope.user = 1;
    $scope.toggle = function () {
        if ($scope.user == 1) {
            $scope.user = 2;
        }
        else {
            $scope.user = 1;
        }
    }
    //this.toggle=toggle();
    $scope.cars = ['nissan', 'BMW'];
    $scope.person = {
        'firstName': '',
        'lastName': '',
        'address': '',
        'dob': '',
        'phone': '',
        'gender': '',
        'carInterest': {
            'nissan': '',
            'BMW': ''
        },
        'maritalStatus': '',
        'country': ''
    };

}]);

angular.module('app').controller('appCtrl2', ['$scope', function ($scope) {
    $scope.person = {
        'firstName': 'john',
        'lastName': 'empty'
    }
}]);
