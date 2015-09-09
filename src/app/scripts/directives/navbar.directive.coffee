# @ngInject
coinNavbar = ->
  directive = undefined
  directive =
    restrict: 'E'
    templateUrl: 'app/views/directives/navbar.html'
    scope: creationDate: '='

angular.module('sterlingConvert').directive 'coinNavbar', coinNavbar

