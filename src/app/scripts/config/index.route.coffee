
# @ngInject
config = ($stateProvider, $urlRouterProvider) ->
  $stateProvider.state 'home',
    url: '/'
    templateUrl: 'app/views/main.html'
    controller: 'MainController'
    controllerAs: 'main'
  $urlRouterProvider.otherwise '/'

config.$inject = ['$stateProvider', '$urlRouterProvider' ]

angular.module('sterlingConvert').config config