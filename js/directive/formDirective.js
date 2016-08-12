angular.module('app').directive('inputForm',[function ($scope) {
    return{
        restrict:'EA',
        //template:"<h1>hello</h1>"
        templateUrl:"/angularjsproj/views/admin.html",
        link:function($scope){
           alert("this is inside directive");

        }
    }
}]);
