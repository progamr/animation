(function (module) {

    var mainController = function () {

        var model = this;
        model.toggle = true;
        model.toggleSidebar = function () {

            model.toggle = !model.toggle;

        };
    };

    module.controller('mainController', mainController);

}(angular.module('animations')));