angular.module("recipe.app")
    .service(['$modal', function ($modal) {
        this.showDialog = function () {
            var modalInstance = $modal.open({
                templateUrl: 'myModalContent.html',
                controller: 'ModalInstanceCtrl',
                size: size,
                resolve: {
                    items: function () {
                        return $scope.items;
                    }
                }
            });

            return modalInstance.result;
        };
    }]);