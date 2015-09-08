config = ($stateProvider, $urlRouterProvider) ->
  $stateProvider.state 'home',
    url: '/'
    templateUrl: 'app/views/main.html'
    controller: 'MainController'
    controllerAs: 'main'
  $urlRouterProvider.otherwise '/'

angular.module('sterlingConvert').config config
