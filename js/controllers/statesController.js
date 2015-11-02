(function (module) {

    var statesController = function () {

        var model = this;
        model.predicate = '';
        model.charities = [
            {
                name: 'Against Malaria Foundation',
                color: 'red'
            },
            {
                name: 'Give Directly',
                color: 'blue'
            },
            {
                name: 'Deworm the World Initiative',
                color: 'red'
            },
            {
                name: 'Environmental Working Group',
                color: 'green'
            },
            {
                name: 'ALS Association',
                color: 'blue'
            },
            {
                name: 'American Humane Association',
                color: 'orange'
            }
        ];
        //alert(model.charities[0].name);

        model.changeOrder = function() {
            model.predicate = model.predicate === 'name' ? '-name' : 'name';
        }

    };

    module.controller('statesController', statesController);

}(angular.module('animations')));