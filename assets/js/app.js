'use strict';

require('jquery');
require('bootstrap3');
require('featherlight');
const SmoothScroll = require('smooth-scroll');
const angular = require('angular');

require('bootstrap3/dist/css/bootstrap.min.css');
require('@fortawesome/fontawesome-free/css/all.min.css');
require('ionicons/dist/css/ionicons.css');
require('./../css/main.css');

require('./main');

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

/*
 * SmoothScroll
*/

var scroll = new SmoothScroll('a[href*="#"]', {
	ignore: '[data-scroll-ignore]', // Selector for links to ignore (must be a valid CSS selector)
	header: null, // Selector for fixed headers (must be a valid CSS selector)
	topOnEmptyHash: true, // Scroll to the top of the page for links with href="#"
	speed: 500, // Integer. How fast to complete the scroll in milliseconds
	clip: true, // If true, adjust scroll distance to prevent abrupt stops near the bottom of the page
	easing: 'easeInOutCubic', // Easing pattern to use
	updateURL: true, // Update the URL on scroll
	popstate: true, // Animate scrolling with the forward/backward browser buttons (requires updateURL to be true)
	emitEvents: true // Emit custom events
});