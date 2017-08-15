'use strict';

(function (angular) {
    angular.module('TunaTechApp', [])
        .controller('HomeController', HomeController)
        .directive('lightboxDirective', lightboxDirective);

    HomeController.$inject = ['$http'];

    function HomeController($http) {
        var vm = this;

        vm.showSpeakerLightBox = false;

        vm.activateSpeakerLightBox = activateSpeakerLightBox;

        _init();

        function _init() {
            $http.get('./data/speakers.json?rand=' + Math.random() )
                .then(function (res) {
                    vm.speakers = res.data;
                });

            $http.get('./data/schedule.json?rand=' + Math.random())
                .then(function (res) {
                    vm.schedule = res.data;
                });
        }

        function activateSpeakerLightBox(speaker) {
            vm.currentSpeaker = speaker;
            vm.showSpeakerLightBox = true;
        }
    }

    function lightboxDirective() {
        return {
            restrict: 'E', // applied on 'element'
            transclude: true, // re-use the inner HTML of the directive
            template: '<section ng-transclude></section>', // need this so that inner HTML will be used
        }
    }

})(angular);