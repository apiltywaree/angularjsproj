/**
 * Created by apiltiwari on 7/28/16.
 */
angular.module('app').directive('userType', [function ($scope) {
    return {
        restrict: 'EA',
        //template:"<h1>hello</h1>"
        templateUrl: "/angularjsproj/views/user.html",
        link: function ($scope) {
            alert("inside user directive");
        }
    }
}]);