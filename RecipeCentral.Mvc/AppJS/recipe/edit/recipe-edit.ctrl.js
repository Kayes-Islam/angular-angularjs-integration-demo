RecipeEditCtrl.$inject = ['$scope', '$http', '$location', '$window', '$modal', 'mvcDataService'];
function RecipeEditCtrl($scope, $http, $location, $window, $modal, mvcDataService) {
    $scope.model = mvcDataService.model;
    
    $scope.submit = function () {
        $http.post($location.url(), $scope.model)
            .then(function () {
                $window.location.href = mvcDataService.baseHref + "/admin";
            },
            function (error) {
                $scope.error = "Error Occurred.";
            });
    }

    $scope.addIngredient = function (index) {
        var data = '';
        $scope.openEditor(data, 'sm')
            .then(function (result) {
                $scope.model.ingredients.push(result);
            });
    };

    $scope.addStep = function (index) {
        var data = '';
        $scope.openEditor(data, 'lg')
            .then(function (result) {
                $scope.model.steps.push(result);
            });
    };

    $scope.openEditor = function (text, size) {
        var modalInstance = $modal.open({
            templateUrl: 'ItemEditorDialog.html',
            controller: 'ItemEditorDialogCtrl',
            resolve: {
                data: function () {
                    return {
                        text: text,
                        size: size
                    };
                }
            }
        });

        return modalInstance.result;
    };


}

angular.module('recipe.app')
    .controller('RecipeEditCtrl', RecipeEditCtrl);


// UI Bootstrap Dialog
ItemEditorDialogCtrl.$inject = ['$scope', '$modalInstance', 'data'];
function ItemEditorDialogCtrl($scope, $modalInstance, data) {
    $scope.text = angular.copy(data.text);
    $scope.textAreaStyle = data.size == 'lg' ?
        {
            "height": "400px"
        } :
        {
            "height": "100px"
        };

    $scope.ok = function () {
        $modalInstance.close($scope.text);
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
};

angular.module('recipe.app')
    .controller('ItemEditorDialogCtrl', ItemEditorDialogCtrl);

