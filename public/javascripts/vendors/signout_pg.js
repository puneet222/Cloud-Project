sampleApp.controller('signout',function($scope,$location){
    sessionStorage.clear();
    window.location = '/'


    $scope.go = function (path){
        $location.path(path);
    }

});
