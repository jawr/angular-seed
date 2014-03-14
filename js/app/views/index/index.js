define(['app'], function(app) {
    app.controller('indexCtrl', function($scope, example) {
        $scope.message = example.getMessage();
    });
});
